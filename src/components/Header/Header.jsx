import React from 'react'
import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
    <img src='../assets/rick-morty-round-4.webp' alt='logo round' className='roudLogo'></img>
    <img src="../assets/logo.webp" className='logo' alt="logo"></img>
    </div>
  )
}

export default Header