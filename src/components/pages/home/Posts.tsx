import React, {FC, KeyboardEvent, MouseEventHandler, useCallback, useEffect, useState} from 'react';
import {PostType} from "../../../types";
import {Avatar, Box, Card, IconButton, ImageList, ImageListItem} from "@mui/material";
import {Link} from "react-router-dom";
import { useAuth } from '../../providers/useAuth';
import {addDoc, collection, deleteDoc, doc, onSnapshot} from "firebase/firestore";
import {initialPosts} from "./initialPosts";
import {setLoadingStatusAC} from "../../layout/layout-reducer";
import DeleteIcon from '@mui/icons-material/Delete';
import user from "../../layout/sidebar/User";
import {useSelector, useDispatch} from "react-redux";
import {AppRootStateType} from "../../../app/store";



const Posts = () => {
    const { db } = useAuth()
    const [posts, setPosts] = useState<PostType[]>(initialPosts)
    const [error, setError] = useState('')
    const [count, setCount] = useState(1)
    // const posts = useSelector<AppRootStateType, PostType[]>((state) => state.posts);
    const dispatch = useDispatch()


    // useEffect(() => {
    //     dispatch(setLoadingStatusAC(true))
    //     dispatch(fetchPostsTC())
    // }, [])
    //
    //

    useEffect(() => {

        const unsub = onSnapshot(collection(db, 'posts'), doc => {
            const importedPosts: PostType[] = []
            doc.forEach((d: any) => {
                importedPosts.unshift(d.data())
            })
            setPosts(importedPosts)
        })
        return () => {
            unsub()
        }
    }, [])


    // useEffect(() => {
    //     debugger
    //     const unsub = onSnapshot(collection(db, 'posts'), doc => {
    //         dispatch(setLoadingStatusAC(true))
    //         doc.forEach((d: any) => {
    //             setPosts(prev => [d.data(), ...prev])
    //             dispatch(setLoadingStatusAC(false))
    //             debugger
    //         })
    //     })
    //
    //     return () => {
    //         unsub()
    //         debugger
    //     }
    // }, [])



    const removePostHandler = async (postId: string) => {
        debugger
        dispatch(setLoadingStatusAC(true))
        try {
            await deleteDoc(doc(db, `posts/`, postId));
            let filteredPosts = posts.filter(p => p.postId !== postId)
            setPosts(filteredPosts)
            debugger
            dispatch(setLoadingStatusAC(false))
        } catch (e: any) {
            setError(error)
        } finally {
        setLoadingStatusAC(false)
            debugger
        }
    }

    return (
        <>
            {posts.map((post, idx) => (
                <Card key={`Post-${idx}`}>
                    <Link
                        key={post.author._id}
                        to={`/profile/${post.author._id}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: '#111',
                            marginBottom: 12,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                marginRight: 2,
                                width: 50,
                                height: 50,
                            }}
                        >
                            <Avatar
                                src={post.author.avatar}
                                alt=''
                                sx={{ width: 46, height: 46, borderRadius: '50%' }}
                            />
                        </Box>
                        <div>
                            <div style={{ fontSize: 14 }}>{post.author.name}</div>
                            <div style={{ fontSize: 14, opacity: '0.6' }}>
                                {post.createdAt}
                            </div>
                        </div>

                    </Link>

                    <p>{post.content}</p>
                    <IconButton aria-label="delete" onClick={() => removePostHandler(post.postId)}>
                        <DeleteIcon/>
                    </IconButton>

                    {post?.images?.length && (
                        <ImageList variant='masonry' cols={3} gap={8}>
                            {post.images.map(image => (
                                <ImageListItem key={image}>
                                    <img src={image} alt={''} loading='lazy' />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    )}
                </Card>
            ))}
        </>
    )
}

export default Posts;