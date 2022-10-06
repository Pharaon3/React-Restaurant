import React from 'react'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import cartURL from "../public/img/cart.png"

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />


function EmptyCart() {
  return (
    <>
        <div style = {{position: 'sticky', paddingTop: 150, top: 0, paddingLeft: 50, paddingRight: 50}}>
            <h3 style={{textAlign: 'center'}}> Your Cart </h3>
            <img src={cartURL} />
            <p style={{color: 'darkgrey'}}>Please select at least one product to place an order</p>
        </div>
    </>
  );
}

export default EmptyCart;
