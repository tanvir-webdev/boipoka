import React from 'react';
import Banner from '../components/Banner';
import Books from './../components/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const dataPromise = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books dataPromise={dataPromise}></Books>
        </div>
    );
};

export default Home;