import React from "react";
// import Categories from "../components/categories/categories";
// import Header  from "../components/navbar/header";
import {Box,Grid} from '@mui/material'; 
// import Posts from "../components/post/posts";
import { useNavigate } from "react-router-dom";
import Header from "../navbar/header";
import UserInfo from "../userInfo/users";
const  ContentPage=()=>{
   
  
    return (
        <div>
             
            <Header/>
            <h2 className='cen'>User Info</h2>
            <UserInfo/>
           
           
        </div>
    )
}

export default ContentPage