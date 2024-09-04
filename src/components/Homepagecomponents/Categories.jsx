import React from 'react'
import {Link} from 'react-router-dom'

import Accessories from "../../assets/Accessories.jpg"
import Sandles from "../../assets/Sandles.webp"
import Bag from "../../assets/bag.jpg"
import Dress from "../../assets/dress.jpg"
import Jewellery from "../../assets/Jewellery.webp"

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
            path: 'dress',
            title: "Dress",
        },
        {   
            id: 5,
            image: Jewellery,
            path: 'jewellery',
            title: "Jewellery",
        }
    ];

    return (
        <div className='max-w-[60vw] mx-auto'>
            <h2 className='text-center p-16 text-3xl font-semibold font-[Gilroy-Medium]'>Categories</h2>

            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center lg:gap-0 gap-20 font-[Gilroy-Medium]'>
                {categoriesData.map(category => (
                    <Link to={`categories/${category.path}`} key={category.id} className='flex flex-col items-center hover:scale-105 transition-all duration-300'>
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
