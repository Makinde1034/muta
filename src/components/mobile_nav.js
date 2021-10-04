import React from 'react'
import style from '../styles/mobile_nav.module.css'
import cancel from '../assets/cancel.svg'
import {useSelector,useDispatch} from 'react-redux'
import { closeNav } from '../store/mobile/actions'
import {Link} from 'react-router-dom'


function MobileNav() {

    const dispatch = useDispatch();
    const isNavOpen = useSelector((state)=>state.mobileReducer.isNavOpen);
    const token = localStorage.getItem("token");

    // close mobile nav
    function closeMobileNav(){
        dispatch(closeNav());
    }

     function logOut(){
        localStorage.clear()
        window.location.reload(false)
    }

    return (
        <div>
            <div className={ isNavOpen ? `${style.mobileNav} ${style.mobileNav__active}` : `${style.mobileNav}` }>
                <div className={style.header}>
                    <div className={style.logo}>
                        <h3>Muta{isNavOpen}</h3>
                    </div>
                    <img onClick={closeMobileNav} src={cancel} alt="" />
                </div>
                <ul>
                    <Link onClick={()=>dispatch(closeNav())} className={style.link} to='/signin'>Sign in</Link>
                    <Link onClick={()=>dispatch(closeNav())} className={style.link} to='/signup'>Sign up</Link>
                    <Link onClick={()=>dispatch(closeNav())} className={style.link} to='/'>Home</Link>      
                </ul>
                { token ? <button onClick={logOut} className={style.button}>Logout</button> : '' }
            </div>
        </div>
    )
}

export default MobileNav
