import React, { useState, useEffect } from 'react';
// // import '../style/Categories/categories.css'
// import axios from 'axios'
import { AppBar, Toolbar, styled, Button, Avatar } from '@mui/material';
// import './Categorie.css'
// // import Categorie from './categorie';
import User from './user';
import { PulseLoader} from 'react-spinners';
import InfiniteScroll from "react-infinite-scroll-component";
 
const UserInfo = (props) => {
    const[len,setlen]=useState(12);
    const [loading, setLoading] = useState(true);
    const [UserInfo1, setuserInfo] = useState([])
    useEffect(() => {
        
        const getCategory = async () => {
            let res = await fetch(`https://randomuser.me/api/?results=${len}`, {
                method: "GET",
                // headers: {
                //     Authorization: `Bearer ${localStorage.getItem("token")}`,
                // },
            });
            res = await res.json();
            if (res) {
            //  console.log(res.results)
                setuserInfo(res.results)
            }
            else {
                console.log("error")
            }

            // console.log("res.data", res.data);
        }
       getCategory();
    }, [ ])

   useEffect(()=>{
    const fetchMoreData = async () => {
        // console.log("12")
        setlen(len+10)
         console.log(len)
        const url = `https://randomuser.me/api/?results=${len}}`;
        let data = await fetch(url);
        
        let parsedData = await data.json()
           
        console.log(parsedData);
        setuserInfo(UserInfo1.concat(parsedData))
      };
   },[len])
    const fun=()=>{
          setlen(len+10)
    }
    return (
        
        
        

        <>

             

            <h1 style={{ textAlign: 'center' }}>User  Info</h1>

            
         
            <div className='parent-container'>
            <InfiniteScroll
       
          dataLength={UserInfo1.length}
          next={fun}
         
          hasMore={UserInfo1.length !==500}
          loader={<PulseLoader
            color="#36d7b7"
            cssOverride={{
              float: 'centre',
              textAlign: 'center'
            }}

          />}
        >
                {UserInfo1.map(INFO =>
                    <User
                 gender={INFO.gender}
                        firstname={INFO.name.title}

                        middlename={INFO.name.first}
                        lastname={INFO.name.last}
                        email={INFO.email}
                        phone={INFO.phone}
                        image={INFO.picture.medium}
                        city={INFO.location.city}
                        country={INFO.location.country}
                        
                        


                    >
                    </User>
                )}
           </InfiniteScroll>
            </div>



        </>


    )
}

export default UserInfo