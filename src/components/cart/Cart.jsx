import React from 'react'
import "./cart.css"
import { Divider } from '@mui/material'
const Cart = () => {
  return (
    <div className='cart_section'>
      <div className="cart_container">
        <div className="left_cart">
          <img src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="cart_img" />
          <div className="cart_btn">
            <button className='cart_btn1'>Add to cart</button>
            <button className='cart_btn2'>Buy now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Fitness Gear</h3>
          <h4>Piegeon FAVOURITE Eletric kettle(1.5L,silver,Black)</h4>
          {/* divider to seperated imported from material ui */}
          <Divider/>
          <p className='mrp'>M.R.P.: ₹1195</p>
          <p>Deal of the day : <span style={{color:'#B12704'}}>₹625.00</span> </p>
          <p>you save : : <span style={{color:'#B12704'}}>₹570 (47%)</span> </p>
          <div className="discount_box">
            <h5>Discount : <span style={{color:'#111'}}>Extra 10% off</span></h5>
            <h4>Free Delivery <span style={{color:'#111', fontWeight:600}}>Oct 8-21</span>Details</h4>
            <p>Fastest Delivery <span style={{color:'#111', fontWeight:600}}>Tomorrow 11AM</span></p>
          </div>
          <p className='description'>About the Item: <span style={{color:'#565959', fontSize:14,fontWeight:500,letterSpacing:"0.4px"}}>This eletric kettle</span></p>
        </div>
      </div>
    </div>
  )
}

export default Cart