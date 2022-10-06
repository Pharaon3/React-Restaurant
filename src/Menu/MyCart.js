import { React } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import cartURL from "../public/img/cart.png"
import { addDish, removeDish } from '../action/index';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';
import axios from 'axios'

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />

function MyCart(props) {
  const dispatch = useDispatch()
  const dishGroup = useSelector( state => state.dishGroup)
  const totalPrice = useSelector (state => state.totalPrice)
  const decreaseProductBtnClickedc = (groupId, dishId) => {
    dispatch(removeDish(groupId, dishId))
  }
  const increaseProductBtnClickedc = (groupId, dishId) => {
    dispatch(addDish(groupId, dishId))
  }
  const onCheckoutBtnClicked = (e) => {
    e.preventDefault()
    const cartObject = {
      totalPrice: totalPrice
    };
    axios.post('http://localhost:4000/order/create-order', cartObject)
      .then(res => console.log(res.data));
  }
  var count = 0;
  return (
    <>
      <div style = {{position: 'sticky', paddingTop: 150, top: 0, paddingLeft: 50, paddingRight: 50}}>
        <h3 style={{textAlign: 'center'}}> Your Cart </h3>
        <div style={{ display: totalPrice > 0 ? 'block' : 'none' }}> 
        <Table striped bordered hover style = {{textAlign: 'center', verticalAlign: 'center'}}>
          <thead>
            <tr>
              <th>No</th>
              <th>Dish Title</th>
              <th>Dish quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              dishGroup?.map((dishGroup, dishGroupIndex) => {
                return dishGroup.dish?.map((dish, dishIndex) => {
                  if(dish.quantity > 0){
                    return(
                      <tr key = {'cartDish' + dishGroupIndex + '_' + dishIndex}>
                        <td> { ++ count } </td>
                        <td style = {{width: '40%'}}> {dish.title} </td>
                        <td style = {{width: '30%'}}>
                          <AiFillMinusSquare 
                            className = 'mainYourCart_item_count_symbolM' 
                            onClick = { function () { decreaseProductBtnClickedc(dishGroupIndex, dishIndex); } } />
                          &nbsp;&nbsp; { dish.quantity } &nbsp;&nbsp;
                          <AiFillPlusSquare className='mainYourCart_item_count_symbolP' onClick={
                            function () {
                              increaseProductBtnClickedc(dishGroupIndex, dishIndex);
                            }
                          } />
                        </td>
                        <td style = {{width: '30%'}}> {Math.round(dish.price * dish.quantity * 100) / 100 + '€'} </td>
                      </tr>
                    )
                  }
                })
              })
            }
          <tr key = {'cartDishEnd'} >
            <td> </td>
            <td style = {{width: '40%'}}> <b> Total </b></td>
            <td style = {{width: '30%'}}> </td>
            <td style = {{width: '30%'}}><b> {Math.round(totalPrice * 100) / 100 + '€'} </b></td>
          </tr>
          </tbody>
        </Table>
        <Button style = {{width: '100%', backgroundColor: 'black', height: 50}} onClick = {onCheckoutBtnClicked}><h4> Checkout </h4></Button>
        </div>
        <div style={{ display: totalPrice > 0 ? 'none' : 'block' }}>
          <img src={cartURL} alt = 'empty cart image'/>
          <p style={{color: 'darkgrey', textAlign: 'center'}}>Please select at least one product to place an order</p>
        </div>
      </div>
    </>
  );
}

export default MyCart;
