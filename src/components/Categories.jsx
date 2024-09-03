import React from 'react'
import {Link} from 'react-router-dom'

import Accessories from "../assets/Accessories.jpg"
import Sandles from "../assets/Sandles.webp"
import Bag from "../assets/bag.jpg"
import Dress from "../assets/dress.jpg"

const Categories = () => {

    const categoriesData = [
        {   
            id: 1,
            image: Accessories,
            path: 'accessories',
            title: "Accessories",
        },
        {   
            id: 2,
            image: Sandles,
            path: 'sandles',
            title: "Sandles",
        },
        {   
            id: 3,
            image: Bag,
            path: 'bags',
            title: "Bags",
        },
        {   
            id: 4,
            image: Dress,
            path: 'dresses',
            title: "Dress",
        }
    ];

    return (
        <div>
            <h2 className='text-center p-16 text-3xl font-semibold font-[Gilroy-Medium]'>Categories</h2>

            <div className='flex lg:flex-row flex-col justify-center gap-24 font-[Gilroy-Medium]'>
                {categoriesData.map(category => (
                    <Link to={`categories/${category.path}`} key={category.id} className='flex flex-col items-center'>
                        <div className='w-28 h-28 shadow-md rounded-full relative overflow-hidden'>
                            <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                        </div>
                        <p className='text-center mt-4'>{category.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories
