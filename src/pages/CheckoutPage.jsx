import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { clearCart } from '../redux/features/cartSlice';
import { usePlaceOrderMutation } from '../../../Backend/auth/orderApi';
import PaymentForm from './PaymentForm';
import { getCode } from 'country-list'; // Import country-list library

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { cartItems, totalProducts, totalAmount, tax, grandTotal } = useSelector((state) => state.cart);

    const [placeOrder] = usePlaceOrderMutation();

    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
    });

    const handleAddressChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handlePaymentSuccess = () => {
        const countryCode = getCode(address.country); // Convert full country name to country code

        if (!countryCode) {
            toast.error("Invalid country name. Please enter a valid country.");
            return;
        }

        placeOrder({
            userId: user?.userId,
            userName: user?.fullName,
            address: {
                ...address,
                country: countryCode, // Use country code instead of full name
            },
            productInfo: cartItems,
            totalAmount: grandTotal,
        })
            .then(() => {
                dispatch(clearCart());
                setAddress({
                    street: '',
                    city: '',
                    state: '',
                    postalCode: '',
                    country: '',
                });
                toast.success("Order placed successfully!");
            })
            .catch(() => {
                toast.error("Error Placing Order!!");
            });
    };

    return (
        <Elements stripe={stripePromise}>
            <div className="font-[sans-serif] bg-white px-4 py-8">
                <div className="flex justify-center flex-col lg:flex-row gap-12">
                    <ToastContainer />

                    {/* Form Section */}
                    <div className="max-w-4xl w-full h-max rounded-md px-4 py-8">
                        <h2 className="text-2xl font-bold text-gray-800 font-[Gilroy-Bold]">Complete your order</h2>

                        <div className="mt-8">
                            <div className='p-4 bg-zinc-100 rounded-md'>
                                <h3 className="text-base text-gray-800 mb-4 font-[Gilroy-Medium]">Shipping Address</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Address Line"
                                            name="street"
                                            value={address.street}
                                            onChange={handleAddressChange}
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="City"
                                            name="city"
                                            value={address.city}
                                            onChange={handleAddressChange}
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="State"
                                            name="state"
                                            value={address.state}
                                            onChange={handleAddressChange}
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Postal Code"
                                            name="postalCode"
                                            value={address.postalCode}
                                            onChange={handleAddressChange}
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter your country Iso code i.e Pk/US"
                                            name="country"
                                            value={address.country}
                                            onChange={handleAddressChange}
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary and Payment Section */}
                    <div className="max-w-md w-full h-max p-4 bg-zinc-100 rounded-md mt-24">
                        <h2 className="text-2xl font-[Gilroy-Bold] text-gray-800">Order Summary</h2>
                        <div className="flex items-center justify-between mt-6 font-[Gilroy-Medium]">
                            <span className="text-gray-800">Total Items:</span>
                            <span>{totalProducts}</span>
                        </div>
                        <div className="flex items-center justify-between mt-4 font-[Gilroy-Medium]">
                            <span className="text-gray-800">Subtotal:</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between mt-4 font-[Gilroy-Medium]">
                            <span className="text-gray-800">Tax:</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between mt-4 font-[Gilroy-Medium]">
                            <span className="text-gray-800">Total Amount:</span>
                            <span>${grandTotal.toFixed(2)}</span>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-[Gilroy-Bold] mb-4">Payment</h3>
                            <PaymentForm
                                amount={grandTotal.toFixed(2) * 100}
                                cartItems={cartItems}
                                address={address}
                                onPaymentSuccess={handlePaymentSuccess}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Elements>
    );
};

export default CheckoutPage;
