const Stripe = require('stripe')
const {Payment} = require('../models')
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')

const createStripeSession = async (userId , subName , price) =>{
    console.log('service file ' , userId)
    if (!userId) {
        throw new ApiError(httpStatus.NOT_FOUND,"Not Authrize login agin")
    }
    if (!subName || !price) {
        throw new ApiError(httpStatus.NOT_FOUND , "some data messing tray agin")        
    }
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items : [
            {
                price_data : {
                    currency:'usd',
                    product_data :{
                        name : `${subName} Subscription`
                    },
                    unit_amount : price + 100
                },
                quantity : 1
            }
        ],
        success_url: `http://192.168.0.101:3000/payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `http://192.168.0.101:3000/payment-cancel`,
    })
    await Payment.create({
        userId ,
        subName,
        price,
        sessionId :session.id
    })
    return session.url
}

module.exports ={
    createStripeSession
}