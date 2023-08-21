import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import "./style.css"
const Navbar = () => {
  return (
    <div>
        <NavLink className={({isActive,isPending})=>isActive?" nav current":"nav pending"} to="/">Home</NavLink>
        <NavLink className={({isActive,isPending})=>isActive?"nav current":"nav pending"} to="/todo">ToDo</NavLink>
        <NavLink className={({isActive,isPending})=>isActive?"nav current":"nav pending"} to="/about">About Us</NavLink>
        <NavLink className={({isActive,isPending})=>isActive?"nav current":"nav pending"} to="/contact">Contact Us</NavLink>
    </div>
  )
}

export default Navbar