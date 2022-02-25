import React, { useEffect, useState } from 'react';
import {PostType} from "../../../../../fk/src/types";
import {Avatar, Box, Card, IconButton, ImageList, ImageListItem} from "@mui/material";
import {Link} from "react-router-dom";
import { useAuth } from '../../../../../fk/src/components/providers/useAuth';
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import {setLoadingStatusAC} from "../../../../../fk/src/components/layout/layout-reducer";
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch, useSelector} from "react-redux";
import { fetchPostsTC } from './posts-reducer';
import { AppRootStateType } from '../../../app/store';


const Posts = () => {
    const { db } = useAuth()
    // const [posts, setPosts] = useState<PostType[]>(initialPosts)
    const [error, setError] = useState('')
    const posts = useSelector<AppRootStateType, PostType[]>(state => state.posts);
    const dispatch = useDispatch()



    // useEffect(() => {
    //     debugger
    //      dispatch(fetchPostsTC(db))
    //
    // }, [])

    dispatch(fetchPostsTC(db))


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
                    <IconButton aria-label="delete" >
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