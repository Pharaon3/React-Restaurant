import { React, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Dish from './Dish'

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />

function DishGroup(props) {
    
  const dishGroupTitle = props.dishGroupTitle
  const dishGroupId = props.dishGroupId
  const dishGroupName = props.dishGroupName
  const dishGroup = props.dishGroup
  return (
    <>
      <section id={dishGroupName} style={{ paddingTop: 150 }}>
        <h3 style={{ textAlign: 'center' }}> {dishGroupTitle} </h3>
        {
          dishGroup?.dish?.map((dishItem, dishIndex) => {
            return (
              <Dish
                key = {"DishGroup_" + dishGroupId + "_" + dishIndex}
                title = {dishItem.title}
                dishId = {dishIndex}
                groupId = {dishGroupId}
                quantity = {dishItem.quantity}
                price = {dishItem.price}
                comment = {dishItem.comment}
                dish = {dishItem}
              />
            )
          })
        }
      </section>
    </>
  );
}

export default DishGroup;
