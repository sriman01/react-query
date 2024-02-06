import React from 'react'
import { useParams } from 'react-router-dom';

const fetchDataGet = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

  return data.products;
}
const SinglefetchDataGet = async (productID) => {
    const response = await fetch(`https://dummyjson.com/products/${productID}`);
    const data = await response.json();

  return data;
}

const fetchDataPost = () => {
    return(
        <div>fetchDataPost</div>
    )
}

export  {fetchDataGet, fetchDataPost, SinglefetchDataGet}