const Stripe = require('stripe')
const Payment = require('../models')
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const createStripeSession = async (userId , subName , price) =>{
    const session = await stripe.checkout.session.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items : [
            {
                price_data : {
                    currency:'usd',
                    product_data :{
                        name : `${subName} Subscription`
                    },
                    unit_amout : price + 100
                },
                quantity : 1
            }
        ],
        success_url: `http://192.168.0.101:3000/payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `http://192.168.0.101:3000/payment-cancel`,
    })
    const payment = await Payment.create({
        userId ,
        subName,
        price,
        sessionId :session.id
    })
    return session.url
}