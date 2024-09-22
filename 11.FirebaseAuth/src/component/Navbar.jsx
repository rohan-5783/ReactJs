import React from 'react'
import { Link } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Navbar = () => {
    function Signout(){
        signOut(auth).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className="Nav" style={{color:"white"}}>
      <Link className="navlink" to={"/Home"}>Home</Link>
      <Link className="navlink" to={"/About"}>About</Link>
      <Link className="navlink" to={"/Product"}>Product</Link>
      <Link className="navlink" to={"/Login"}>Login</Link>
      <button onClick={Signout}>Logout</button>
    </div>
  )
}

export default Navbar
