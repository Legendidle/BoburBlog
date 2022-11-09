import axios from "axios";
import {useDispatch} from "react-redux"
import { isLoading } from "../redux/reducer";


const useFetching = () => {
    
    const dispatch = useDispatch()
    const fetchingLogin = async (obj) => {
        try{
            const req = await  axios({
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: obj
              })
            return req
        }catch(e){
            console.log(e.message);
        }
    }

    const fetchingCategory = async () => {
        try{
            const req = await  axios({
                method: 'get',
                url: 'https://63566a79a2d1844a97742c99.mockapi.io/category',
              })
            return req
        }catch(e){
            console.log(e.message);
        }
    }

    const fetchingData = async (id) => {
        try{
            dispatch(isLoading(true))
            const req = await  axios({
                method: 'get',
                url: `https://63566a79a2d1844a97742c99.mockapi.io/category/${id}/posts`,
              })
            return req
        }catch(e){
            console.log(e.message);
        }finally{
            dispatch(isLoading(false))
        }
    }



    return {fetchingLogin,fetchingCategory,fetchingData}
}

export default useFetching

  