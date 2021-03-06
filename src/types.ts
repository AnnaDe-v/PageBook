import { Dispatch, SetStateAction } from 'react'
import {SvgIconTypeMap} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>


export type UserType = {
    _id?: string
    avatar?: string
    name: string
    isInNetwork?: boolean
}

export type PostType = {
    postId: string
    author: UserType
    createdAt: string
    content: string
    images?: string[]
}

export type MenuItemType = {
    title: string
    link: string
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
}

export type MessageType = {
    user: UserType
    message: string
    createdAt: string
}


export type UserLoginType = {
    email: string
    password: string
    name: string
}
