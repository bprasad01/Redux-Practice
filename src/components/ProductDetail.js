import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/action/productAction";

function ProductDetail(props) {
  const product = useSelector((state) => state.product);
  const productId = props.match.params.productId;
  const disPatch = useDispatch();

  const productDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    disPatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") productDetails();
    return () => {
      disPatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <div style={{ width: "400px" }}>
              <img src={product.image} alt="" style={{ width: "400px" }} />
            </div>
          </div>
          <div class="col-md-6">
            <div>
              <h1>{product.title}</h1>
              <h2>{product.price}</h2>
              <h3>{product.category}</h3>
              <p>lorem ipsum dolor sit amet van dur product loewm ipsum dolor great </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
