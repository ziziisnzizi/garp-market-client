import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(
    function () {
      axios
        .get("https://ee63e135-696e-452b-824e-af751590a987.mock.pstmn.io/products")
        .then(function (result) {
          const products = result.data.products;
          setProducts(products);
        }).catch(function (err) {
          console.err('err!', err);
        });
    }, [])

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="업떠요?" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="업떠요?" />
        </div>
        <h1>여기?</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <Link className={"product-link"} to={`/products/${index}`}>
                  <div>
                    <img
                      className="product-images"
                      src={product.imageUrl}
                      alt="사진"
                    />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">
                      {product.name}
                    </span>
                    <span className="product-price">
                      {product.price}원
                    </span>
                    <div className="product-seller">
                      <img className="product-avatar" src="images/icons/avatar.png" alt="사진" />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
          }
        </div>
      </div>
      <div id="footer"></div>
    </div>);
}

export default MainPage;  