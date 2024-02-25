import React from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search'
import pic1 from "./pic/amazon.jpeg"
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom'




const Navbar = () => {
  return (
   <header>
    <nav>
      <div className="left">
        <div className="navlogo">
        {/* //image putted into navlink */}
          <NavLink to={'/'} > <img src={pic1}
        className='amazon_logo' alt="" /></NavLink>
       
        </div>
        <div className="nav_searchbar">
          <input type="text" placeholder='Search your products' />
          <div className="search_icon">
            <SearchIcon id="search"/>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="nav_btn">
          {/* <a href="">Sign in</a> */}
          {/* //added later above one put to navlink// */}
          <NavLink href="" to={'/login'}>Sign in</NavLink>
        </div>
        <div className="cart_btn">
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon id="icon"/>
          <p>cart</p>
    </Badge>
        </div>
        <Avatar className='avatar' />
      </div>
    </nav>
   </header>
  )
}

export default Navbar