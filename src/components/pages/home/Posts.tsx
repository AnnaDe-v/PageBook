import React, {useEffect, useState} from 'react';
import {PostType} from "../../../../../fk/src/types";
import {Avatar, Box, Card, IconButton, ImageList, ImageListItem} from "@mui/material";
import {Link} from "react-router-dom";
import {useAuth} from '../../../components/providers/useAuth';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsTC,  setPostsAC} from './posts-reducer';
import {AppRootStateType} from '../../../app/store';
import {RequestStatusType} from "../../layout/layout-reducer";
import {deleteDoc, doc} from "firebase/firestore";


const Posts = () => {
    const [error, setError] = useState('')
    debugger
    const posts = useSelector<AppRootStateType, PostType[]>(state => state.posts);
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.layout.status);
    const dispatch = useDispatch()
    const {db} = useAuth()


    useEffect(() => {  dispatch(fetchPostsTC(db)
    )
    },[])



    const removePostHandler = async (postId: string) => {
        try {
            await deleteDoc(doc(db, `posts`, postId));
            let filteredPosts = posts.filter(p => p.postId !== postId)
            dispatch(setPostsAC(filteredPosts))
        } catch (e: any) {
            setError(error)
        } finally {

        }
    }


    let mappedPosts = posts.map((post, idx) => (
        <Card key={`Post-${idx}`}>
            <Link
                key={post.author._id}
                to={`/Pagebook/profile/${post.author._id}`}
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
                        sx={{width: 46, height: 46, borderRadius: '50%'}}
                    />
                </Box>
                <div>
                    <div style={{fontSize: 14}}>{post.author.name}</div>
                    <div style={{fontSize: 14, opacity: '0.6'}}>
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
                            <img src={image} alt={''} loading='lazy'/>
                        </ImageListItem>
                    ))}
                </ImageList>
            )}
        </Card>
    ))

    return (
        <>
            {mappedPosts}
            {/*{posts.map(p => {*/}
            {/*    <li>{p.postId}</li>*/}
            {/*})}*/}
        </>
    )
}

export default Posts;
