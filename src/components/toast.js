import React from 'react'
import style from '../styles/toast.module.css'
import { useDispatch, useSelector } from 'react-redux'

function Toast() {

    const toastMsg = useSelector((state)=>state.cartReducer.toastMsg)
    console.log(toastMsg,'toastMsg')

    return (
        <div>
            <div  className={ toastMsg==='' ? `${style.toastOff} ${style.toastOn}` : `${style.toastOn}` }>
                <p>{toastMsg}</p>
            </div>
        </div>
    )
}

export default Toast
