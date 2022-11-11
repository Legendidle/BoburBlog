import React, { useEffect, useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import styles from "./Header.module.scss";
import Logo from "../../assets/Logo.png";
import Search from "../../assets/search.png";
import Menu from "../../assets/Menu.png";
import Close from "../../assets/Close.png";
import useFetching from "../../hooks/useFetching";
import { categoryData } from "../../redux/reducer";

function Header() {
    const [categories,setCategories] = useState([])
    const {fetchingData,fetchingCategory} = useFetching()
    const [value,setValue] = useState("")
    const [searchPosts, setSearchPosts] = useState([])
    const [addClass, setAddClass] = useState(false)
    const [addMenu, setAddMenu] = useState(false)
    

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {posts} = useSelector(state => state)

    const searchPostsHandler = () => {
        setAddClass(current => !current) 
        const filterPosts = posts.filter(post => post.title.toLowerCase().includes(value.toLowerCase().trim()))
        setSearchPosts(filterPosts)
        setValue("")
    }

    const menuHandler = () =>{
        setAddMenu(current => !current) 
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

        <button 
        className={styles.menuBtn}
        onClick={menuHandler}
        >
          <img src={addMenu ? Close : Menu} alt="menu" width={32} height={32} />
        </button>

      </div>
      
      <div 
      className={`${addMenu ? styles.responsiveMenu : styles.none}`}
      onClick={menuHandler}
      >
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
        <ul
        onClick={searchPostsHandler} 
        className={`${styles.resultsList} ${addClass ? styles.block : styles.none}`}
        >
          <h2 className={styles.results}>Natijalar</h2>
          {searchPosts.map(post => (
              <li className={styles.resultsItem} key={post.id}>
                <div className={styles.resultsTimeBox}>
                  <h3 className={styles.postTitle}>Post title</h3>
                  <p className={styles.resultTime}>
                    {post.createdAt.slice(0,10)}
                  </p>
                </div>
                <h4 className={styles.resultTitle}>
                  {post.title}
                </h4>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Header;
