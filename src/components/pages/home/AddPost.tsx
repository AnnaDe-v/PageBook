import {Alert, LinearProgress, TextField} from '@mui/material'
import {Box} from '@mui/system'
import React, {FC, KeyboardEvent, useCallback, useState} from 'react'
import {useAuth} from '../../providers/useAuth'
import {setLoadingStatusAC} from '../../layout/layout-reducer';
import {useDispatch} from 'react-redux';
import {addPostsTC} from './posts-reducer';


const AddPost: FC = () => {
    const [content, setContent] = useState<string>('')
    const {user, db} = useAuth()
    const [error, setError] = useState('')
    const dispatch = useDispatch()


    const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setLoadingStatusAC('loading')
        if (e.key === 'Enter' && user) {
            try {
                dispatch(addPostsTC(content, user, db))
            } catch (e: any) {
                setError(e)
            } finally {
                setLoadingStatusAC('succeeded')
            }
            setContent('')
        }
    }


    return (
        <>
            {error && (
                <Alert severity='error' style={{marginBottom: 20}}>
                    {error}
                </Alert>
            )}

            <Box
                sx={{
                    border: '1px solid #e2e2e2',
                    borderRadius: '10px',
                    padding: 2,
                }}
            >
                <TextField
                    label='Расскажи, что у тебя нового'
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
                    value={content}
                />
            </Box>
        </>
    )
}

export default AddPost;