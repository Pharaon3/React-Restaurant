import { React, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DishGroup from './DishGroup'
import { useSelector, shallowEqual } from 'react-redux';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />

function Dishes() {
  const dishGroup = useSelector( (state) => state.dishGroup, shallowEqual)
  console.log(dishGroup)
  return (
    <div>
      {
        dishGroup?.map((item, index)=>{
          return(
            <DishGroup 
              key = {"Dishes"+index}
              dishGroupId = {index}
              dishGroupTitle = {item.Gtitle}
              dishGroupName = {item.Gname}
              dishGroup = {item}
            />
          )
        })
      }
    </div>
  );
}

export default Dishes;
