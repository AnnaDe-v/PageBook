import React, {FC, useState} from 'react';
import {Box, Button} from '@mui/material';
import AddPost from "./AddPost";
import {PostType} from "../../../types";

const Home: FC = () => {
    const [posts, setPosts] = useState<PostType[]>([])

    return (
        <Box>
            <AddPost setPosts={setPosts}/>
        </Box>
    )

};

export default Home;