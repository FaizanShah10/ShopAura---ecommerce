import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearCart } from '../redux/features/cartSlice';
import { usePlaceOrderMutation } from '../../../Backend/auth/orderApi';


const CheckoutPage = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth);

    const successMessage = () => toast.success("Order Placed Successfully!!")
    const failMessage = () => toast.error("Error Placing Order!!")
    
    const { cartItems, totalProducts, totalAmount, tax, grandTotal } = useSelector((state) => state.cart);

    const [placeOrder] = usePlaceOrderMutation()

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
                totalAmount: grandTotal 
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
                <ToastContainer/>
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
                                            required={true}
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
                        <Link to={'/'}>
                            <button className='px-8 py-2 bg-gray-200 text-black rounded-md mt-3'>Back</button>
                        </Link>
                    </div>

                    {/* Order Summary Section */}
                    <div className="bg-zinc-100 p-6 w-full lg:max-w-sm rounded-md shadow-md lg:mt-24 sm:mt-2 mt-2">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 font-[Gilroy-Bold]">Order Summary</h3>
                        <ul className="mb-6">
                            <li className="flex justify-between text-gray-800 mb-4">
                                <span>Selected Items:</span>
                                <span>{totalProducts}</span>
                            </li>
                            <li className="flex justify-between text-gray-800 mb-4">
                                <span>Total Price:</span>
                                <span>${totalAmount}</span>
                            </li>
                            <li className="flex justify-between text-gray-800 mb-4">
                                <span>Tax:</span>
                                <span>${tax}</span>
                            </li>
                            <li className="flex justify-between text-gray-800 font-bold">
                                <span>Grand Total:</span>
                                <span>${grandTotal}</span>
                            </li>
                        </ul>
                        <button 
                            onClick={handleSubmit} 
                            className="w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:bg-blue-800"
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
