import React from 'react'

const Right = () => {
  return (
    <div className='right_buy'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
        <div className="cost_right">
            <p>your order is eligible for FREE Delivery</p>
            <span style={{color:"#565959"}}>Select this option at checkout. Details</span>
            <h3>Subtotal (1 item): <span style={{fontWeight:700}}>₹4049.00</span></h3>
            <button className='rightbuy_btn'>Proceed to Buy</button>
            <div className="emi">
                Emi available
            </div>
        </div>
    </div>
  )
}

export default Right