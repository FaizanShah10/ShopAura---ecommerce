import React from 'react'
import Deals from "../assets/deals.png"

import "../App.css"

const Deal = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[80vw] h-[27vw] bg-pink-200 rounded-lg flex justify-center items-center p-8 gap-20 overflow-hidden'>
          {/* Image on the left */}
          <div className='w-[40%] h-auto'>
            <img className='w-full h-auto max-h-[80%] object-contain pt-14' src={Deals} alt="Deals" />
          </div>

          {/* Deal Description */}
           <div className='deals__content'>
                <h5>Get upto 20% discount</h5>
                <h4>Deal of the Month</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque rem ea dicta eveniet perferendis officia illum minus reiciendis id numquam.</p>
                <div className='deals__countdown flex-wrap'>
                    <div className='deals__countdown__card'>
                        <h4>14</h4>
                        <p>Days</p>
                    </div>
                    <div className='deals__countdown__card'>
                        <h4>12</h4>
                        <p>Hours</p>
                    </div>
                    <div className='deals__countdown__card'>
                        <h4>32</h4>
                        <p>Min</p>
                    </div>
                    <div className='deals__countdown__card'>
                        <h4>10</h4>
                        <p>Sec</p>
                    </div>

                </div>
           </div>
        </div>
      </div>
      <h2>ldfhjdsahf</h2>
    </>
  )
}

export default Deal
