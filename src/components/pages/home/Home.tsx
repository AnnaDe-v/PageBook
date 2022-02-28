import React, {FC, useEffect} from 'react';
import {Box} from '@mui/material';
import AddPost from "./AddPost";
import Posts from "./Posts";
import {fetchPostsTC} from "./posts-reducer";
import {useDispatch} from "react-redux";


const Home: FC = () => {

    return (
        <Box>
            <AddPost/>
            <Posts/>
        </Box>
    )

};

export default Home;