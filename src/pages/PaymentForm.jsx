import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/features/cartSlice';

const PaymentForm = ({ amount, address, onPaymentSuccess, cartItems }) => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);
    // console.log("LoggedIn User: ", user)
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
            toast.error('Stripe is not loaded yet!');
            return;
        }
    
        const cardElement = elements.getElement(CardElement);
    
        // Create a payment method
        const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: user?.fullName || "No Name Found!!",
                address: {
                    city: address.city,
                    country: address.country,
                    line1: address.street,
                    state: address.state,
                    postal_code: address.postalCode,
                },
            },
        });
    
        if (paymentError) {
            console.error('Error creating payment method:', paymentError);
            toast.error('Failed to create payment method. Please try again.');
            return;
        }
    
        try {
            // Send the payment method and order details to the backend
            const orderResponse = await fetch('http://localhost:8000/api/orders/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: user.userId,
                    userName: user.fullName,
                    productInfo: cartItems.map((item) => ({
                        name: item.name,
                        description: item.description,
                        price: item.price,
                        quantity: item.quantity,
                    })),
                    address: {
                        street: address.street,
                        city: address.city,
                        state: address.state,
                        postalCode: address.postalCode,
                        country: address.country,
                    },
                    payment: {
                        paymentMethodId: paymentMethod.id,
                        billingDetails: {
                            street: address.street,
                            city: address.city,
                            state: address.state,
                            postalCode: address.postalCode,
                            country: address.country,
                        },
                    },
                    totalAmount: Math.round(amount * 100), 
                }),
            });
    
            const orderResult = await orderResponse.json();
    
            if (orderResult.sessionId) {
                const result = await stripe.redirectToCheckout({
                    sessionId: orderResult.sessionId, 
                });
    
                if (result.error) {
                    console.error('Error redirecting to checkout:', result.error);
                    toast.error('Error placing order. Please try again.');
                } else {
                    dispatch(clearCart())
                }
            } else {
                toast.error('Error placing order. No sessionId returned.');
            }
        } catch (err) {
            console.error('Error placing order:', err);
            toast.error('Error placing order. Please try again.');
        }
    };
    
    
return (
        <form onSubmit={handleSubmit}>
            <CardElement options={{ hidePostalCode: true }} />
            <button
                type="submit"
                disabled={!stripe}
                className="bg-blue-600 text-white font-medium text-sm rounded-md py-2 px-4 mt-4"
            >
                Pay ${amount / 100}
            </button>
        </form>
    );
};

export default PaymentForm;
