import { NextRequest, NextResponse } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



export async function POST(request: Request) {
    try {
        const { amount } = await request.json();
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            automatic_payment_methods: {enabled: true},

        })

        return Response.json({clientSecret: paymentIntent.client_secret});
    } catch (error) {
        console.error('Internal error:', error);

        return Response.json(
            { error: `Internal Server Error:${error} `},
            {status: 500}
        )
    }
    
}
