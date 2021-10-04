import React from 'react'
import style from '../styles/mobile_nav.module.css'
import cancel from '../assets/cancel.svg'
import {useSelector,useDispatch} from 'react-redux'
import { closeNav } from '../store/mobile/actions'


function MobileNav() {

    const dispatch = useDispatch();
    const isNavOpen = useSelector((state)=>state.mobileReducer.isNavOpen);

    // close mobile nav
    function closeMobileNav(){
        dispatch(closeNav());
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
                    <li>Home</li>
                    <li>Sign up</li>
                    <li>Sign in</li>
                        
                </ul>
                <button className={style.button}>Logout</button>
            </div>
        </div>
    )
}

export default MobileNav
