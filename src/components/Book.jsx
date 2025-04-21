import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';


const Book = ({ singleBook }) => {
    const { bookName, author, image, category, rating, tags, bookId } = singleBook;
    return (
        <div>
            <Link to={`/book-details/${bookId}`}>
                <div className="card bg-base-100 border border-gray-200">
                    <div className='bg-gray-200 flex items-center justify-center p-7 rounded-xl m-5'>
                        <img
                            src={image}
                            alt="Shoes"
                            className='w-[100px]' />
                    </div>
                    <div className="card-body">
                        <div className='flex gap-2 my-2'>
                            {
                                tags.map((tag) => <button className='btn text-green-600 bg-green-100 border-none rounded-lg'>{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title">
                            {bookName}
                        </h2>
                        <p>By: {author}</p>
                        <hr className='border-dotted border-gray-400' />
                        <div className="card-actions justify-between">
                            <div>{category}</div>
                            <div className='flex items-center gap-2'>
                                {rating}
                                <FaRegStar />

                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;