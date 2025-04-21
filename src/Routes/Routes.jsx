import React from 'react';
import Root from './../Pages/Root';

import {

    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import BookDetails from '../Pages/BookDetails';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: ()=>fetch('booksData.json'),
                element: <Home></Home>
            },
            {
                path: '/book-details/:id',
                element: <BookDetails></BookDetails>            }
        ]
    }
])

export default router