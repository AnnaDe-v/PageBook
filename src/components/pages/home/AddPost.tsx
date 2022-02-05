import React, {FC} from 'react';
import {Box, TextField} from "@mui/material";

const AddPost: FC = () => {
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

            />
        </Box>
    );
};

export default AddPost;