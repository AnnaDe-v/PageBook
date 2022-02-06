import React, {FC} from 'react';
import {PostType} from "../../../types";
import {Avatar, Box, Card, ImageList, ImageListItem} from "@mui/material";
import {Link} from "react-router-dom";

interface IPosts {
    posts: PostType[]
}

const Posts: FC<IPosts> = ({posts}) => {


    return (
        <>
            {posts.map(post => (
                <Card key={post.author._id}>
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
    );
};

export default Posts;