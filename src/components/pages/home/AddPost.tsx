import {Alert, LinearProgress, TextField} from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, KeyboardEvent, useCallback, useState } from 'react'
import { useAuth } from '../../providers/useAuth'
import {v4 as uuidv4} from "uuid";
import {setDoc, collection, doc, onSnapshot} from 'firebase/firestore'
import {setLoadingStatusAC} from "../../layout/layout-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";

const AddPost: FC = () => {
    const [content, setContent] = useState<string>('')
    const { user, db } = useAuth()
    const [error, setError] = useState('')
    const dispatch = useDispatch()


    const addPostHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {

            setLoadingStatusAC(true)
            if (e.key === 'Enter' && user) {
                try {
                    const newPost = doc(collection(db, 'posts'))
                     setDoc(newPost, {
                        postId: newPost.id,
                        author: user,
                        content,
                        createdAt: '10 минут назад',
                    });
                    dispatch(setLoadingStatusAC(false))
                }
                catch (e: any) {
                    setError(e)
                }
                setContent('')
                console.log(e.currentTarget.value)
            }

    }, [content, db]);



    // const addPostHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
    //     setLoadingStatusAC(true)
    //     if (e.key === 'Enter' && user) {
    //         try {
    //             const newPost = doc(collection(db, 'posts'))
    //             await setDoc(newPost, {
    //                 postId: newPost.id,
    //                 author: user,
    //                 content,
    //                 createdAt: '10 минут назад',
    //             });
    //             await dispatch(setLoadingStatusAC(false))
    //         }
    //         catch (e: any) {
    //             setError(e)
    //         }
    //         setContent('')
    //     }
    // }


    return (
        <>
            {error && (
                <Alert severity='error' style={{ marginBottom: 20 }}>
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