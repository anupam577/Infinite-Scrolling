import React, { useState, useEffect } from 'react';
// // import '../style/Categories/categories.css'
// import axios from 'axios'
import { AppBar, Toolbar, styled, Button, Avatar } from '@mui/material';
// import './Categorie.css'
// // import Categorie from './categorie';
import User from './user';
import { PulseLoader } from 'react-spinners';
import InfiniteScroll from "react-infinite-scroll-component";

const UserInfo = (props) => {
    const [UserInfo1, setuserInfo] = useState([])
    const [page, setPage] = useState(1);


    const getCategory = async () => {
        const url = `https://randomuser.me/api/?page=${page}&results=4&`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setuserInfo(parsedData.results);
    }
    useEffect(() => {
        getCategory();
    }, [])


    const fetchMoreData = async () => {

        const url = `https://randomuser.me/api/?page=${page}&results=4&`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setuserInfo(UserInfo1.concat(parsedData.results))
    };
    return (




        <>



         



            <div className='parent-container'>
                <InfiniteScroll
                    dataLength={UserInfo1.length}
                    next={fetchMoreData}
                    hasMore={UserInfo1.length !== 500}
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