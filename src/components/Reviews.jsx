import React, { useState } from 'react'
import User from '../assets/user.png'
import { FaPen } from "react-icons/fa";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { useGetProductByIdQuery } from '../../../Backend/auth/productApi';
import { usePostReviewMutation } from '../../../Backend/auth/reviewApi';

const Reviews = ({ reviews }) => {

  const {id} = useParams()
  const {user} = useSelector((state) => state.auth)

  const {refetch} = useGetProductByIdQuery(id, {skip: !id})
  const [postReview] = usePostReviewMutation()

  const [isModelOpen, setIsModelOpen] = useState(false)
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState([])



  const handleOpenModel = () => {
    setIsModelOpen(true)
  }

  const handleCloseModel = () => {
    setIsModelOpen(false)
  }

  const handleRating = (value) => {
    setRating(value)
  }

  const handlePostReview = async (e) => {
    console.log("User from redux:", user)
    e.preventDefault()
    const newReview = {
      productId: id,
      userId: user?.id,
      comment: comment,
      rating: rating,
    }

    try {
      const response = await postReview(newReview).unwrap()
      alert('Review posted Successfully')
      setComment('')
      setRating(0)
      refetch()
    } catch (error) {
      alert("Something went wrong posting comment")
    }

    handleCloseModel()
  }

  return (
    <div>
      <h1 className='font-[Gilroy-Medium] text-lg'>All Reviews</h1>
      
      {reviews.length > 0 ? (
        
        reviews.map((review, index) => {

          const filledStars = Math.floor(review.rating);
          const emptyStars = 5 - filledStars;


          return (
            <div key={index} className='mb-6'>
            <div className='flex gap-2 items-center'>
              <img className='w-9 h-9' src={User} alt="User" />
              <div className='mt-4 mb-2'>
                <p className='text-[12px] text-red-700 font-[Gilroy-Medium]'>{review?.userId?.email}</p>
                <p className='text-[12px] font-[Gilroy-Medium]'>
                  {new Date(review?.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                
                {/* Rating Display */}
                <div className='flex text-sm mt-1'>
                  {Array(filledStars).fill(<HiStar className='text-yellow-500' />)}
                  {Array(emptyStars).fill(<HiOutlineStar className='text-yellow-500' />)}
                </div>
              </div>
            </div>
            <p className='pl-4 w-1/3 h-20 py-2 px-10 border-2 rounded-md shadow-md mb-4'>{review.comment}</p>
          </div>
          )
        })
      ) : (
        <p>No reviews yet.</p>
      )}
      
      <button onClick={handleOpenModel} className='flex gap-2 px-3 py-1 m-10 items-center bg-red-700 text-white font-[Gilroy-Medium] rounded-md'>
        <FaPen />
        Add Review
      </button>

      {/* Review Model */}
      
        <div className={`fixed inset-0 bg-black/90 flex items-center justify-center z-40 px-2 ${isModelOpen ? 'block' : "hidden"}`}>
          <div className='w-[23vw] h-auto bg-white rounded-lg p-4'>
            <h2 className='font-[Gilroy-Medium] text-sm mb-1'>Post Review</h2>
            <div>
              <textarea 
              rows={4} 
              className='border-2 border-b resize-none rounded-md w-full px-2 text-sm' 
              placeholder='Write your review'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              >
                
              </textarea>
            </div>
            <div className='flex m-2'>
              { 
                [1, 2, 3, 4, 5].map((star) => (
                  <span
                  key={star}
                  onClick={() => handleRating(star)}
                 
                  >
                  {
                    rating >= star ? 
                    <div>     
                      <HiStar className='text-yellow-500' />
                    </div> 
                    : 
                    <div>
                     <HiOutlineStar className='text-yellow-500' />
                    </div>
                  }  
                  </span>
                ))
              }
            </div>
            <div>
              <button onClick={handlePostReview} className='px-4 py-1 mr-2 bg-red-700 text-white font-[Gilroy-Medium] text-sm rounded-md mt-2'>Post</button>
              <button onClick={handleCloseModel} className='px-4 py-1 bg-gray-700 text-white font-[Gilroy-Medium] text-sm rounded-md mt-2'>Cancel</button>  
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Reviews;
