import  { createContext, useContext, useEffect, useState } from 'react'

export const AuthContextPost  = createContext()

const AuthContext = ({children}) => {
    const [auth,setAuth] = useState(localStorage.getItem("auth") ? localStorage.getItem("auth") : "")

    useEffect(() => {
        localStorage.setItem("auth", auth)
    }, [auth]);

    return (
        <AuthContextPost.Provider value={{auth,setAuth}}>
            {children}
        </AuthContextPost.Provider>
    )
}

export default AuthContext