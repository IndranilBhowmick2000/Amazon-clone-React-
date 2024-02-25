import React from 'react'
import "./Newnav.css"
import pic1 from './pic/nav.jpeg'

const Newnavbar = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p>All</p>
          <p>Mobile</p>
          <p>Bestseller</p>
          <p>Fashion</p>
          <p>Customer Services</p>
          <p>Electronics</p>
          <p>prime</p>
          <p>Today's deal</p>
          <p>Amazon pay</p>
        </div>
        <div className="right_data">
          <img src={pic1} alt="navdata" />
        </div>
      </div>
    </div>
  )
}
export default Newnavbar;
