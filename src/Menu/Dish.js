import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { addDish, removeDish } from '../action';
import { useSelector, useDispatch } from 'react-redux';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />

function Dish(props) {
  const dispatch = useDispatch()
  const DishID = props.dishId
  var quantity;
  const dishGroup = useSelector( state => state.dishGroup)
  dishGroup?.map((dishGroup, dishGroupIndex) => {
    if(dishGroupIndex === props.groupId){
      return dishGroup.dish?.map((dish, dishIndex) => {
        if(dishIndex === props.dishId){
          quantity = dish.quantity
        }
      })
    }
  })

  const decreaseProductBtnClicked = () => {
    dispatch(removeDish(props.groupId, DishID))
  }

  const increaseProductBtnClicked = () => {
    dispatch(addDish(props.groupId, DishID))
  }
  return (
    <>
      <div>
            {
              dishGroup?.map((dishGroup, dishGroupIndex) => {
                if(dishGroupIndex === props.groupId) {
                  return dishGroup?.dish?.map((dish, dishIndex) => {
                    if(dishIndex === props.dishId) {
                      return(
                        <div key = {'dishKey_' + dishIndex}>
                          <Card body style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', marginTop: 5 }}>
                            <Stack direction="horizontal" gap={3}>
                                <div>
                                  <h5><b> {dish.title} </b></h5>
                                  <p> {dish.comment} </p>
                                  <h5><b> {dish.price} € </b></h5>
                                </div>
                                <div className="ms-auto">
                                  <div id='add0' style={{ display: dish.quantity === 0 ? 'block' : 'none' }}>
                                    <Button
                                      variant="warning"
                                      style={{ width: 100, height: 40 }}
                                      onClick={increaseProductBtnClicked}
                                    > ADD </Button>
                                  </div>
                                  <div id='addn' style={{ display: dish.quantity === 0 ? 'none' : 'block' }}>
                                    <ButtonGroup aria-label="Basic example" style={{ width: 100, height: 40 }} >
                                      <Button
                                        variant="warning"
                                        onClick={decreaseProductBtnClicked}
                                      > - </Button>
                                      <Button variant="warning" disabled>{dish.quantity}</Button>
                                      <Button
                                        variant="warning"
                                        onClick={increaseProductBtnClicked}
                                      > + </Button>
                                    </ButtonGroup>
                                  </div>
                                </div>
                            </Stack>
                          </Card>
                        </div>
                      )
                    }
                  })
                }
            })
            }
      </div>
    </>
  );
}

export default Dish;
