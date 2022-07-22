import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent(props) {
  const products = useSelector((state) => state.allProducts.product);
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((item) => {
            return (
              <>
                <div className="col-md-4">
              <Link to={`/product/${item.id}`}>
                  <div class="card mt-5" style={{ width: "18rem", height : "650px" }}>
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.title}
                      style={{ height: "400px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">$ {item.price}</li>
                      <li className="list-group-item">{item.category}</li>
                    </ul>
                  </div>
                </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductComponent;
