'use client';
import Checkout from '../../components/checkout'
import convertToSubCurrency from '../../lib/convertToSubcurrency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error('Public key is not defined')
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)



export default function Payment() {
  const amount: number = 2.99;
  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-yellow-500 to-red-300">
      <div className="mb-10">
        <h2 className="text-2xl">
          The cost is
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubCurrency(amount),
          currency: "usd",
          appearance: {theme: 'night', labels: 'floating', rules: {
            
          }},
          
          
        }}
        
      >
        <Checkout amount={amount} />
      </Elements>
    </main>
  )
}