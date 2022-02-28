import {initialPosts} from "./initialPosts";
import {PostType, UserType} from "../../../types";
import {Dispatch} from "redux";
import {setLoadingStatus, setLoadingStatusAC} from "../../layout/layout-reducer";
import {collection, doc, onSnapshot, deleteDoc, setDoc, Firestore} from "firebase/firestore";
import {useAuth} from "../../providers/useAuth";

const defaultState: PostType[] = []


export const postsReducer = (state = defaultState, action: ActionsType): PostType[] => {
    switch (action.type) {
        case "POSTS/SET-POSTS":
            debugger
            console.log(action.dataFromFb)
            return action.dataFromFb.map(p => ({...p}))

        case "POSTS/REMOVE-POST":
            debugger
            return state.filter(p => p.postId !== action.postId)
        case "POSTS/ADD-POSTS":
            return state
        default:
            return state
    }
};

export const removePostAC = (postId: string) =>
    ({type: "POSTS/REMOVE-POST", postId} as const);

export const setPostsAC = (dataFromFb: PostType[]) =>
    ({type: "POSTS/SET-POSTS", dataFromFb} as const);

export const addPostsAC = () =>
    ({type: "POSTS/ADD-POSTS"} as const);


export type ActionsType = ReturnType<typeof removePostAC> | setLoadingStatus | ReturnType<typeof setPostsAC> | ReturnType<typeof addPostsAC>;


export const fetchPostsTC = (db: any) => {
    return (dispatch: Dispatch<ActionsType>) => {
        const arrayForNewPosts: PostType[] = []
        dispatch(setLoadingStatusAC(true))
        try {

            onSnapshot(collection(db, 'posts'), doc => {
                doc.forEach((d: any) => {
                    arrayForNewPosts.push(d.data())
                    debugger

                    console.log(arrayForNewPosts)
                })
                dispatch(setPostsAC(arrayForNewPosts))
                dispatch(setLoadingStatusAC(false))
            })
        } catch {
            console.log('error')
        }

    }
}

export const addPostTC = (db: any, user: any, content: string) => {
    return async (dispatch: Dispatch<ActionsType>) => {

        const current = new Date();
        const date = `${current.toLocaleString()}`;

        const newPost = doc(collection(db, 'posts'))
        await setDoc(newPost, {
            postId: newPost.id,
            author: user,
            content,
            createdAt: date,
        });
        dispatch(addPostsAC())

    }
}


export const removePostTC = (db: any, postIDID: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setLoadingStatusAC(true))
        try {
            deleteDoc(doc(db, `posts/`, postIDID));
            console.log(postIDID)
        } catch (e: any) {

        }
    }
}





//
// {...action.dataFromFb.map(p => ({
//     author: {_id: p.author._id, avatar: p.author.avatar, name: p.author.name},
//     content: p.content,
//     createdAt: p.createdAt,
//     postId: p.postId
// }))}