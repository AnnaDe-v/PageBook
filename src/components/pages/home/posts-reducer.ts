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
            console.log(action.arrNew)
            return action.arrNew


        case "POSTS/REMOVE-POST":
            debugger
            return state.filter(p => p.postId !== action.postId)
        case "POSTS/ADD-POSTS":
            // @ts-ignore
            // return action.dataForPosts.map(p => ({postId: p.postId, author: {_id: 'ajljkl', name: 'Ivan'}, content: p.content, createdAt: 'llkk'}))
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


// export const removePostTC = async (postId: string, db: any) => {
//     return (dispatch: Dispatch<ActionsType>) => {
//         debugger
//         dispatch(setLoadingStatusAC('loading'))
//         try {
//             const {db} = useAuth()
//             deleteDoc(doc(db, `posts/`, postId));
//             console.log(postId)
//             dispatch(removePostAC(postId))
//             dispatch(setLoadingStatusAC('succeeded'))
//         } catch (e: any) {
//             console.log(e)
//         }
//     }
// }


export const addPostsTC = (content: string, user: UserType, db: any) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setLoadingStatusAC('loading'))
        const {user, db} = useAuth()
        const current = new Date();
        const date = `${current.toLocaleString()}`;
        const newPost = doc(collection(db, 'posts'))
        debugger
        const dataForPosts = {
            postId: newPost.id,
            author: user,
            content,
            createdAt: date,
        }
        debugger
         setDoc(newPost, dataForPosts);
        console.log(dataForPosts)
        debugger
        addPostsAC(dataForPosts)
    }
}




















// {...action.dataFromFb.map(p => ({
//     author: {_id: p.author._id, avatar: p.author.avatar, name: p.author.name},
//     content: p.content,
//     createdAt: p.createdAt,
//     postId: p.postId
// }))}