import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/action/productAction';

function ProductListing(props) {
    const product = useSelector( state => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/products")
          .catch((err) => {
            console.log("Err: ", err);
          });
          dispatch(setProducts(response.data));
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);
   
    return (
        <div className="container">
            <h2>ProductListing</h2>
            <ProductComponent />
        </div>
    );
}

export default ProductListing;