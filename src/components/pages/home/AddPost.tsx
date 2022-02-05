import React, {FC, useState} from 'react';
import {Box, TextField} from "@mui/material";
import {PostType, TypeSetState} from "../../../types";
import {users} from '../../layout/sidebar/dataUsers';

type AddPostType = {
    setPosts: TypeSetState<PostType[]>
}

const AddPost: FC<AddPostType> = ({setPosts}) => {
    const [content, setContent] = useState('')

    const addPostHandler = () => {
        setPosts(prev => [...prev, {
            author: users[0],
            content,
            createdAt: 'минуту назад'
        }])
    }

    return (
        <Box sx={{
            border: '1px solid #e2e2e2',
            borderRadius: '10px',
            padding: 2
        }}>
            <TextField
                label="What's new?"
                variant='outlined'
                InputProps={{
                    sx: {
                        border: 'none',
                        borderRadius: '25px',
                        backgroundColor: '#F9F9F9',
                    },
                }}
                sx={{
                    width: '100%',
                }}
                onKeyPress={addPostHandler}
                onChange={e => setContent(e.target.value)}
            />
        </Box>
    );
};

export default AddPost;