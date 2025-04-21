import React from 'react';

const Book = ({ singleBook }) => {
    const {bookName, author, image} = singleBook;
    return (
        <div>
            <div className="card bg-base-100 w-96 border border-gray-200">
                <div className='bg-gray-200 flex items-center justify-center p-7 rounded-xl m-5'>
                    <img
                        src={image}
                        alt="Shoes"
                        className='w-[100px]' />
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>By: {author}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;