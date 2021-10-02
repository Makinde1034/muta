import React,{ useEffect, useState } from 'react'
import style from '../styles/nav.module.css'
import cart from '../assets/trolley.d9c304ca.d9c304ca.svg'               
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import storage from '../utils/storage'
import api from '../adapters/api'
import { getRecentCart, getRecentCartFromLocalStorage } from '../store/cart/cartActions'

function Nav() {

    const dispatch = useDispatch()
    const test = useSelector((state) => state.productReducer.products);
    const user = useSelector((state)=> state.authReducer.user);
    const status = useSelector((state)=>state.authReducer.status);
    const savedCartItems = useSelector((state)=>state.cartReducer.savedCartItems) || []
    const authCart = useSelector((state) => state.cartReducer.authCart) || []

    // function getCart(){
    //     return savedCartItems
    // }

    useEffect(() => {
        dispatch(getRecentCart())
        dispatch(getRecentCartFromLocalStorage())
        
    }, [])

    function logOut(){
        localStorage.clear()
        window.location.reload(false)
    }

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
                <Link to='/cart'>
                    <li className={style.cart}>
                        <img src={cart} alt="" />
                        <div className={style.cart__counter}>{ user !== '' ?  authCart.length : savedCartItems.length }</div>
                    </li> 
                </Link>
               
                <div className={style.email}>
                    { user !=='' ? <p>{ JSON.parse(user).email }</p> : '' }
                </div>
                { user !== '' && <p style={{color:"white",fontWeight:"bold",cursor:"pointer"}} onClick={logOut} >Log out</p>}
            </ul>
            
        </nav>
    )
}

export default Nav
