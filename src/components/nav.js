import React from 'react'
import style from '../styles/nav.module.css'
import cart from '../assets/trolley.d9c304ca.d9c304ca.svg'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

function Nav() {

    const test = useSelector((state) => state.productReducer.products);

    return (
        <nav className={style.nav}>
            <div className={style.nav__logo}>
                <Link to='/'>
                    <h3>MUTA </h3>
                </Link>
            </div>
            <ul>
                <Link to="/signin">Sign in</Link>
                <Link to='/signup'>Sign up</Link>
                <li className={style.cart}>
                    <p>Cart</p>
                    <img src={cart} alt="" />
                </li>
            </ul>
        </nav>
    )
}

export default Nav
