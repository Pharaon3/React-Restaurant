import { React, useState } from 'react'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import child components
import Dish from './Dish'

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />

function DishGroup(props) {

    const dishGroupTitle = props.groupTitle
    const dishGroupID = props.groupID

    const dish = props.dish

    return (
    <>
    <section id = {dishGroupID} style = {{paddingTop: 150 }}>
        <h3 style = {{textAlign: 'center'}}> {dishGroupTitle} </h3>
        {
            dish?.map((item, index)=>{
                return(
                    <Dish key = {"productNumberItem"+index}
                        title = {item.title}
                        dishId = {item.id}
                        quantity = {item.quantity}
                        price = {item.price}
                        comment = {item.comment}
                        thisPrice = {props.count}
                        increaseProduct = {props.increaseProduct}
                        decreaseProduct = {props.decreaseProduct}
                    />
                )
            })
        }
    </section>
    </>
  );
}

export default DishGroup;
