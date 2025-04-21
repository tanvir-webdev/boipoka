import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb } from '../utilitys/addToDb';

const BookDetails = () => {
    const {id} = useParams();
    const idData = parseInt(id)
    const data = useLoaderData();
    const singleData = data.find((data)=> data.bookId === idData);
    const {author, bookName, category, image, review, tags} = singleData;

    const handleToRead = (id)=>{
        addToStoredDb(id)
    }
    return (
        <div className='grid grid-cols-2 my-10'>
            <div>
                <img className='w-[300px]' src={image} alt="" />
            </div>
            <div>
                <h1 className='text-3xl font-bold'>{bookName}</h1>
                <p className='mb-3'>By: {author}</p>
                <hr />
                <h3>{category}</h3>
                <hr />
                <p className='my-5'>Review: {review}</p>
                <div>
                    <p>Tag</p>
                    {
                        tags.map((tag)=><button key={tag}>{tag}</button>)
                    }
                </div>
                <hr />
                <div className='mt-5'>
                    <button onClick={()=>handleToRead(idData)} className='btn btn-primary mr-3'>Read</button>
                    <button className='btn btn-success'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;