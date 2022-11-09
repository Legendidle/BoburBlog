import React, { useEffect, useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import styles from "./Header.module.scss";
import Logo from "../../assets/Logo.png";
import Search from "../../assets/search.png";
import Menu from "../../assets/Menu.png";
import useFetching from "../../hooks/useFetching";
import { categoryData } from "../../redux/reducer";

function Header() {
    const [categories,setCategories] = useState([])
    const {fetchingData,fetchingCategory} = useFetching()
    const [value,setValue] = useState("")
    const [searchPosts, setSearchPosts] = useState([])
    

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {posts,loading} = useSelector(state => state)

    const searchPostsHandler = () => {
        const filterPosts = posts.filter(post => post.title.toLowerCase().includes(value.toLowerCase().trim()))
        setSearchPosts(filterPosts)
    }

    useEffect(() => {
        fetchingCategory().then(data => setCategories(data.data))
        navigate("/tenetur");
    },[])

    const fetchCategoryHandler = (id) => {
        
        fetchingData(id)
        .then(data => dispatch(categoryData(data.data))

        )
        localStorage.setItem("categoryId", id)
    }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <a href="/header">
          <img
            className={styles.logo}
            src={Logo}
            alt="logo"
            height={59}
            width={210}
          />
        </a>

        <nav>
          {
            categories.slice(0,4).map(category => (
                <NavLink 
                key={category.id}
                to={`/${category.name}`} 
                className={styles.link}
                onClick={() => fetchCategoryHandler(category.id)}
                >
                    {category.name}
                </NavLink>
            ))
          }
         
        </nav>

        <button className={styles.menuBtn}>
          <img src={Menu} alt="menu" width={32} height={32} />
        </button>
      </div>

      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button 
        onClick={searchPostsHandler}  
        className={styles.searchBtn}>
          <img src={Search} alt="searchLogo" width={16} height={16} />
        </button>
            {/* {
            searchPosts.map(post => (
                <div>{post.title}</div>
            ))
            } */}
      </div>
    </div>
  );
}

export default Header;
