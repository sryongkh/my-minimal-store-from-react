import React from "react";
import products from "../Products/Products";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

function ProductList() {
    const addToCart = (product) => {
      cart.addToCart(product);
    };
  
    const cart = <Cart />;
  
    return (
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </ul>
        {cart}
      </div>
    );
  }
  
  export default ProductList;