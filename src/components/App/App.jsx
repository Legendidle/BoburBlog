import React, { useEffect, useState } from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./App.module.scss";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import Single from "../Single/Single";
import useFetching from "../../hooks/useFetching";
import { categoryData } from "../../redux/reducer";

const App = () => {
  const [categoryId] = useState(localStorage.getItem("categoryId") ? localStorage.getItem("categoryId") : "1")
  const {auth} = useSelector(state => state)
  const {fetchingData} = useFetching()
  const dispatch = useDispatch()

  useEffect(() => {
    fetchingData(categoryId).then(data => dispatch(categoryData(data.data)))
  },[])


  return (
    <div className={styles.app}>

      {
        !auth
        ?
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login"/>} />
        </Routes>
        :
        <>
          <Header />

          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/:category" element={<Main/>} />
            <Route path="/:category/:id" element={<Single/>}/>
            <Route path="login" element={<Navigate to="/"/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="logout" element={<Navigate to="/login"/>} />
          </Routes>  

          <Footer />
        </>
        }
    </div>
  );
};

export default App;
