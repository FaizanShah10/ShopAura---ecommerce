import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for redirection
import { useDispatch, useSelector } from 'react-redux';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearCart } from '../redux/features/cartSlice';
import { usePlaceOrderMutation } from '../../../Backend/auth/orderApi';

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Added useNavigate hook
    const { user } = useSelector((state) => state.auth);

    const successMessage = () => toast.success("Order Placed Successfully!!");
    const failMessage = () => toast.error("Error Placing Order!!");

    const { cartItems, totalProducts, totalAmount, tax, grandTotal } = useSelector((state) => state.cart);

    const [placeOrder] = usePlaceOrderMutation();

    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
    });

    const [payment, setPayment] = useState({
        cardNumber: '',
        cardHolderName: '',
        expirationDate: '',
        cvv: '',
        billingAddress: '',
    });

    const handleAddressChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handlePaymentChange = (e) => {
        setPayment({ ...payment, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        // Check if user is logged in
        if (!user) {
            toast.error("You must be logged in to make a payment!");
            navigate("/login"); 
            return;
        }

        // Check if address fields are complete
        if (!address.street || !address.city || !address.state || !address.postalCode || !address.country) {
            failMessage(); // Notify user that address is incomplete
            return; // Stop the function if address is incomplete
        }

        // Check if payment details are complete
        if (!payment.cardNumber || !payment.cardHolderName || !payment.expirationDate || !payment.cvv || !payment.billingAddress) {
            failMessage(); // Notify user that payment details are incomplete
            return; // Stop the function if payment details are incomplete
        }

        try {
            const response = await placeOrder({
                userId: user?.userId,
                userName: user?.fullName,
                address,
                payment,
                productInfo: cartItems,
                totalAmount: grandTotal,
            });

            // Check if the mutation was successful
            if (response?.data) {
                successMessage();
                dispatch(clearCart()); // Clear cart after successful order

                // Reset address and payment states
                setAddress({
                    street: '',
                    city: '',
                    state: '',
                    postalCode: '',
                    country: '',
                });
                setPayment({
                    cardNumber: '',
                    cardHolderName: '',
                    expirationDate: '',
                    cvv: '',
                    billingAddress: '',
                });
            } else {
                failMessage(); // Handle error response
            }
        } catch (error) {
            toast.error("Error Placing Order!", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    };

    return (
        <>
            <div className="font-[sans-serif] bg-white px-4 py-8">
                <div className="flex justify-center flex-col lg:flex-row gap-12">
                    <ToastContainer />
                    {/* Form Section */}
                    <div className="max-w-4xl w-full h-max rounded-md px-4 py-8">
                        <h2 className="text-2xl font-bold text-gray-800 font-[Gilroy-Bold]">Complete your order</h2>

                        <div className="mt-8">
                            <div className='p-4 bg-zinc-100 rounded-md'>
                                <h3 className="text-base text-gray-800 mb-4 font-[Gilroy-Medium]">Personal Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            defaultValue={user?.fullName}
                                            placeholder="Full Name"
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            defaultValue={user?.email}
                                            placeholder="Email"
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Address Section */}
                            <div className="mt-8 p-4 bg-zinc-100 rounded-md">
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
                                            placeholder="Country"
                                            name="country"
                                            value={address.country}
                                            onChange={handleAddressChange}
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Section */}
                            <div className="mt-8 p-4 bg-zinc-100 rounded-md">
                                <h3 className="text-base text-gray-800 mb-4 font-[Gilroy-Medium]">Payment Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Card Number"
                                            name="cardNumber"
                                            value={payment.cardNumber}
                                            onChange={handlePaymentChange}
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Card Holder Name"
                                            name="cardHolderName"
                                            value={payment.cardHolderName}
                                            onChange={handlePaymentChange}
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Expiration Date"
                                            name="expirationDate"
                                            value={payment.expirationDate}
                                            onChange={handlePaymentChange}
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="CVV"
                                            name="cvv"
                                            value={payment.cvv}
                                            onChange={handlePaymentChange}
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Billing Address"
                                            name="billingAddress"
                                            value={payment.billingAddress}
                                            onChange={handlePaymentChange}
                                            className="px-4 py-3 bg-white focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    {/* Order Summary Section */}
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

                        <div className="mt-8 flex items-center justify-between">
                                <button
                                    onClick={handleSubmit}
                                    className="bg-blue-600 text-white font-[Gilroy-Medium] text-sm rounded-md py-2 px-4 w-full"
                                >
                                    Place Order
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
