import React from "react";
// import "./Category.css";
import "./user.css"
import { Link } from "react-router-dom";

import { AppBar, Toolbar, styled, Button ,Avatar} from '@mui/material';
function User(props)
{
   return (

//  <div key={Math.random()}  className="boxcat    ">


//    <h2>{props.firstname}</h2> 
//    <h2>{props.middlename}</h2>
//    <h2>{props.lastname}</h2>
//    <h2>{props.gender}</h2>
//    <h2>{props.phone}</h2>
//    <h2>{props.email}</h2>
   
//  </div>
<div className="card">
  <div className="card-header">
    
  
  <div className="card-body">
  
  <img src={props.image} className="avtarimg"  alt="avtar img"/>
  <h3>NAME : {props.firstname}  {props.middlename}  {props.lastname}</h3>
    <h5 className="card-title">Gender : {props.gender} </h5>
    <h5 className="card-title">Phone : {props.phone} </h5>
    <h5 className="card-title">Email : {props.email} </h5>
    <h5 className="card-title">City : {props.city} </h5>
    <h5 className="card-title">Country : {props.country} </h5>
    
  </div>
  </div>
</div>
   
   )
};
export default User;