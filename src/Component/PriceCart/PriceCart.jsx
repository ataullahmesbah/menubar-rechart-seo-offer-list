import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            
            <h2 className='text-center'><span className='text-purple-950 text-4xl font-extrabold '>
                {price.price}
                </span>
                <span className='text-2xl font-semibold text-white'>/month</span>
            </h2>
            <h4 className='text-2xl my-5 font-bold text-center'>{price.name}</h4>

            <p className='font-bold text-gray-300 underline'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}>
                </Feature>)
            }

            <button className='w-full bg-orange-600 py-2 rounded-lg text-white font-bold mt-auto hover:bg-purple-700'>Buy Now</button>
        </div>
    );
};

export default PriceCart;