'use client';

import React, { useEffect, useState } from 'react';


import {
    useStripe,
    useElements,
    PaymentElement,
    Elements,
} from '@stripe/react-stripe-js'
import convertToSubcurrency from '../lib/convertToSubcurrency';
import { form } from '@heroui/theme';

const Checkout = ({amount} : {amount: number}) => {
    const stripe = useStripe();
    const elements = useElements();
    
    
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
    const [errorMessage, setErrorMessage] = useState<string>();
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({amount: convertToSubcurrency(amount)})
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
    }, [amount])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if(!stripe || !elements) {
            return
        }

        const {error : submitError} = await elements.submit();
        if (submitError) {
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }
        if (!stripe) return
    const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
            return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
        }
    })
    if (error) {

        setErrorMessage(error.message)
    } else {
        
    }
    setLoading(false)
    };

    
    

    return (
        <form onSubmit={handleSubmit} className='bg-white p-2 rounded-md'>
            {clientSecret && <PaymentElement></PaymentElement>}
            <button 
            disabled={!stripe ||loading}
            className='text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse'
            >
            {!loading ? `Pay $${amount}` : 'Processing...'}
            </button>
        </form>
    );
}

export default Checkout