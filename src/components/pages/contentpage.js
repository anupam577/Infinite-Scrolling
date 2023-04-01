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
            <UserInfo/>
           {/* <Categories/>
          
           <Posts/>
         */}
         
                
                    {/* <Categories />
                    <Grid container>
                <Grid container item xs={12} sm={10} lg={13}>
                    <Posts />
                </Grid>
            </Grid> */}
           
        </div>
    )
}

export default ContentPage