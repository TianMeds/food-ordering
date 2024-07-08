'use client';
import React, { useState } from 'react';
import { Toaster } from '../components/ui/sonner';
import { CartUpdateContext } from './_context/CartUpdateContext';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const Provider = ({ children }) => {
    const [updateCart, setUpdateCart] = useState(false);

    return (
        <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}}>
        <CartUpdateContext.Provider value={{ updateCart, setUpdateCart }}>
            {children}
            <Toaster />
        </CartUpdateContext.Provider>
        </PayPalScriptProvider>
    );
};

export default Provider;
