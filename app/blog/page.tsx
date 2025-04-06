'use client';
import Checkout from '../../components/checkout'
import convertToSubCurrency from '../../lib/convertToSubcurrency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error('Public key is not defined')
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const appearance = {
  theme: 'night',
  variables: {
    fontFamily: 'Sohne, system-ui, sans-serif',
    fontWeightNormal: '500',
    borderRadius: '8px',
    colorBackground: '#0A2540',
    colorPrimary: '#EFC078',
    accessibleColorOnColorPrimary: '#1A1B25',
    colorText: 'white',
    colorTextSecondary: 'white',
    colorTextPlaceholder: '#ABB2BF',
    tabIconColor: 'white',
    logoColor: 'dark'
  },
  rules: {
    '.Input': {
      backgroundColor: '#212D63',
      border: '1px solid var(--colorPrimary)'
    }
  }
};


export default function Page() {
  const amount: number = 49.99;
  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-red-500 to-purple-300">
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
        }}
        
      >
        <Checkout amount={amount} />
      </Elements>
    </main>
  )
}