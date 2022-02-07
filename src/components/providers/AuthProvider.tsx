import { createContext, FC, useEffect, useMemo, useState } from 'react'
import {TypeSetState, UserType} from '../../types'
import { onAuthStateChanged, getAuth, Auth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'
import { users } from '../layout/sidebar/dataUsers'
import {useNavigate} from "react-router-dom";

interface IContext {
    user: UserType | null
    setUser: TypeSetState<UserType | null>
    ga: Auth
    db: Firestore
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: FC = ({ children }) => {
    const [user, setUser] = useState<UserType | null>(null)

    const ga = getAuth()
    const db = getFirestore()

    useEffect(() => {
        const unListen = onAuthStateChanged(ga, authUser => {
            if (authUser)
                setUser({
                    _id: authUser.uid,
                    avatar: users[1].avatar,
                    name: authUser.displayName || '',
                })
            else {
                setUser(null)

            }
        })
        return () => {
            unListen()
        }
        // eslint-disable-next-line
    }, [])

    const values = useMemo(
        () => ({
            user,
            setUser,
            ga,
            db,
        }),
        [user, ga, db]
    )

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
