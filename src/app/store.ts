import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { layoutReducer } from '../components/layout/layout-reducer'
import {postsReducer} from "../components/pages/home/posts-reducer";


const rootReducer = combineReducers({
    layout: layoutReducer,
    posts: postsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;

//token    93F50783-B5F5-4270-9A8B-37DC54E97313