import {PostType, UserType} from "../../../types";
import {Dispatch} from "redux";
import {setLoadingStatus, setLoadingStatusAC} from "../../layout/layout-reducer";
import {collection, doc, onSnapshot, deleteDoc, setDoc, Firestore} from "firebase/firestore";


const defaultState: PostType[] = []


export const postsReducer = (state = defaultState, action: ActionsType): PostType[] => {
    switch (action.type) {
        case "POSTS/SET-POSTS":
            console.log(action.arrNew)
            return action.arrNew
        case "POSTS/REMOVE-POST":
            debugger
            return state.filter(p => p.postId !== action.postId)

        case "POSTS/ADD-POSTS":
            // @ts-ignore
            return [action.dataForPosts, ...state]
        default:
            return state
    }
};

export const removePostAC = (postId: string) =>
    ({type: "POSTS/REMOVE-POST", postId} as const);

export const setPostsAC = (arrNew: PostType[]) =>
    ({type: "POSTS/SET-POSTS", arrNew} as const);

export const addPostsAC = (dataForPosts: addPostsType) =>
    ({type: "POSTS/ADD-POSTS", dataForPosts} as const);


type addPostsType = {
    postId: string
    author: UserType | null
    content: string
    createdAt: string
}
export type ActionsType = ReturnType<typeof removePostAC> | setLoadingStatus | ReturnType<typeof setPostsAC> | ReturnType<typeof addPostsAC>;


export const fetchPostsTC = (db: any) => {
    return (dispatch: Dispatch<ActionsType>) => {
        const arrayForNewPosts: PostType[] = []
        dispatch(setLoadingStatusAC('loading'))
        try {
            onSnapshot(collection(db, 'posts'), doc => {
                doc.forEach((d: any) => {
                    arrayForNewPosts.push(d.data())
                })
                arrayForNewPosts.sort ( (a, b) => {
                    return Date.parse(a.createdAt) - Date.parse(b.createdAt);
                });
                let arrNew = arrayForNewPosts.reduce((arr: any[], el:PostType) =>
                        ((arr.find(({postId}) => el.postId == postId) || arr.push(el)), arr)
                    , [])
                console.log(arrNew)

                dispatch(setPostsAC(arrNew))
                dispatch(setLoadingStatusAC('succeeded'))
            })
        } catch {
            console.log('error')
        }

    }
}


export const removePostTC = (postId: string, db: any) => {
    return (dispatch: Dispatch<ActionsType>) => {
        debugger
        dispatch(setLoadingStatusAC('loading'))
        try {
            deleteDoc(doc(db, `posts/`, postId));
            dispatch(removePostAC(postId))
        } catch (e: any) {
            console.log(e)
        } finally {
            dispatch(setLoadingStatusAC('succeeded'))
        }
    }
}


export const addPostsTC = (content: string, user: UserType, db: any) => {
    return (dispatch: Dispatch<ActionsType>) => {
        debugger
        const current = new Date();
        const date = `${current.toLocaleString()}`;
        const newPost = doc(collection(db, 'posts'))
        const dataForPosts = {
            postId: newPost.id,
            author: user,
            content,
            createdAt: date,
        }
        setDoc(newPost, dataForPosts);
        console.log(dataForPosts)
        addPostsAC(dataForPosts)
    }
}