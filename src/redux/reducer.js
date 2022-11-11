import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    auth: localStorage.getItem("auth") ? localStorage.getItem("auth") : "",
    posts:[],
    post:{},
    loading: true
}

const postReducer = createSlice({
    name:"post",
    initialState,
    reducers: {
       authAction: (state,action) => {
            state.auth = action.payload 
            localStorage.setItem("auth", action.payload)
       },
       categoryData: (state,action) => {
            state.posts = action.payload
        },
        postDetails: (state,action) => {
            state.post = state.posts.find(post => post.id === action.payload)
        },
        isLoading:(state,action) => {
            state.loading = action.payload
        }
    }
})

export const { categoryData,authAction,postDetails,isLoading } = postReducer.actions
export const reducer = postReducer.reducer