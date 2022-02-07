import React, {FC, useState} from 'react';
import {Box, TextField} from "@mui/material";
import {PostType, TypeSetState} from "../../../types";
import {users} from '../../layout/sidebar/dataUsers';

type AddPostType = {
    setPosts: TypeSetState<PostType[]>
}


const AddPost: FC<AddPostType> = ({setPosts}) => {
    const [content, setContent] = useState('')

    const addPostHandler = (e: React.KeyboardEvent<HTMLElement>): void => {
        if(e.key === 'Enter') {
            setPosts(prev => [{
                author: users[1],
                content,
                createdAt: 'минуту назад'
            }, ...prev])
            setContent('')
        }

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
                onChange={e => setContent(e.currentTarget.value)}
                value={content}
            />
        </Box>
    );
};

export default AddPost;