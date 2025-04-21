import React from 'react';
import bookImage from '../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='flex items-center justify-around bg-gray-100 my-10 p-6 rounded-2xl'>
            <div>
                <h1 className='font-bold text-4xl mb-7'>Books to freshen up <br /> your bookshelf</h1>
                <button className="btn bg-green-600 text-white">View The List</button>
            </div>
            <div>
                <img src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;