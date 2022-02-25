import {initialPosts} from "./initialPosts";
import {PostType} from "../../../types";
import {Dispatch} from "redux";
import {setLoadingStatus, setLoadingStatusAC} from "../../layout/layout-reducer";
import {collection, onSnapshot} from "firebase/firestore";


export const postsReducer = (state: PostType[] = initialPosts, action: ActionsType): PostType[] => {
    switch (action.type) {
        case "POSTS/SET-POSTS":
            debugger
            return action.dataFromFb
        default:
            return {...state};
    }
};

export const removePostAC = (postId: string) =>
    ({type: "POSTS/REMOVE-POST", postId} as const);

export const setPostsAC = (dataFromFb: PostType[]) =>
    ({type: "POSTS/SET-POSTS", dataFromFb} as const);

type ActionsType = ReturnType<typeof removePostAC> | setLoadingStatus | ReturnType<typeof setPostsAC>;


export const fetchPostsTC = (db: any) => {
    return (dispatch: Dispatch<ActionsType>) => {
        const arrayForNewPosts: PostType[] = []
        dispatch(setLoadingStatusAC(true))
        onSnapshot(collection(db, 'posts'), doc => {
            doc.forEach((d: any) => {
                arrayForNewPosts.unshift(d.data())
                debugger
                dispatch(setPostsAC(arrayForNewPosts))
            })
        })
    }
}

// export const removePostTC = () => {
//     return (dispatch: Dispatch<ActionsType>) => {
//         dispatch(setLoadingStatusAC(true))
//         try {
//             let postIDID
//             onSnapshot(collection(db, 'posts'), doc => {
//                 doc.forEach((d: any) => {
//                     postIDID = d.id
//
//                 })
//             })
//             // @ts-ignore
//             deleteDoc(doc(db, `posts/`, postIDID));
//             console.log(postIDID)
//         } catch (e: any) {
//
//         }
//     }
// }