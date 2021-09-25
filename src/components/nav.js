import React from 'react'
import style from '../styles/nav.module.css'
import cart from '../assets/trolley.d9c304ca.d9c304ca.svg'

function Nav() {
    return (
        <nav className={style.nav}>
            <div className={style.nav__logo}>
                <h3>MUTA</h3>
            </div>
            <ul>
                <li>Sign in</li>
                <li>Sign up</li>
                <li className={style.cart}>
                    <p>Cart</p>
                    <img src={cart} alt="" />
                </li>
            </ul>
        </nav>
    )
}

export default Nav
