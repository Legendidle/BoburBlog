import {useState} from 'react'
import { useDispatch } from "react-redux"
import styles from './Login.module.scss'
import Logo from '../../assets/Logo.png'
import useFetching from '../../hooks/useFetching';
import { authAction } from '../../redux/reducer';

function Login() { 
    const [user, setUser] = useState({
        email:"",
        password:"",
    }); 
    const {fetchingLogin} = useFetching()
    const dispatch = useDispatch()
    
    const handleFormSubmit = (e) => {
        e.preventDefault()

        fetchingLogin(user).then(data => dispatch(authAction(data.data.token)))
    }

  return (
    <div className={styles.container}>
        <img className={styles.loginLogo} src={Logo} alt="logo" height={59} width={210}/>

        <div className={styles.titleBox}>
            <h1 className={styles.loginText}>Sahifamga xush kelibsiz! Pulli kontentni o’qish uchun tizimga kiring.</h1>
        </div>

        <form className={styles.loginForm} onSubmit={handleFormSubmit}>
            <h2 className={styles.loginFormName} >Login</h2>
            <input 
            className={styles.loginInput} 
            type="text" 
            placeholder='Login'
            value={user.email}
            onChange={e => setUser({...user, email: e.target.value})}
            />
            <input 
            className={styles.loginInput} 
            type="password" 
            placeholder='Password'
            value={user.password}
            onChange={e => setUser({...user, password: e.target.value})}
            />
            <button className={styles.loginButton} type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login