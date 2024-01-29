import React from 'react'
import "./header.css";

const Header = () => {
  return (
    <div className='max-width header'>
      <div className="imgcontain">
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato logo" className='header-logo'/>
      </div>
      <div className="header-right">
        <div className="location-search-container">
        <div className="location ">
          <div className="loactionleft"><i className="fa-solid fa-location-dot"></i></div>
          <div>Bangalore,Jaypee</div>
          <div className="caret"><i className="fa-solid fa-caret-down"></i> |</div>
        </div>
        <div className="search-input">
        <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search for restaurant, cuisine or a dish'/>
        </div>
        </div>
        <div className="navigation-btns">
          <a href="#">Log In</a>
          <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  )
}

export default Header