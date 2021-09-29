import React,{ useEffect } from 'react'
import style from '../styles/nav.module.css'
import cart from '../assets/trolley.d9c304ca.d9c304ca.svg'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import storage from '../utils/storage'

function Nav() {

    const test = useSelector((state) => state.productReducer.products);
    const user = useSelector((state)=> state.authReducer.user);
    const status = useSelector((state)=>state.authReducer.status);

    
    useEffect(()=>{

    });

    return (
        <nav className={style.nav}>
            <div className={style.nav__logo}>
                <Link to='/'>
                    <h3>MUTA </h3>
                </Link>
            </div>
            <ul>
                { user !== '' ? '' : <Link to="/signin">Sign in</Link> }
                { user !== '' ? '' : <Link to="/signup">Sign up</Link> }
                <li className={style.cart}>
                    <img src={cart} alt="" />
                    <div className={style.cart__counter}>0</div>
                </li>
                <div className={style.email}>
                    { user !=='' ? <p>{ JSON.parse(user).email }</p> : '' }
                </div>
                <p style={{color:"white",fontWeight:"bold"}}>Log out</p>
            </ul>
            
        </nav>
    )
}

export default Nav
