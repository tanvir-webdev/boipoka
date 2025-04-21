import React, { Suspense } from 'react';
import Book from './Book';

const Books = ({ dataPromise }) => {
    return (
        <div className='my-5'>
            <h1 className='font-semibold text-3xl text-center'>Books</h1>
            <div className='grid grid-cols-3 my-11 gap-5'>
                <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    {
                        dataPromise.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;