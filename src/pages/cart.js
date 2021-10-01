import React from 'react'
import style from '../styles/cart.module.css'
import { useSelector } from  'react-redux';
import del from '../assets/cancel.svg'

function Cart() {

    const cartItems = useSelector((state) =>state.cartReducer.authCart)
    

    return (
        <div>
            <div className={style.cart}>
                <div className={style.cart__wrap}>
                    {
                        cartItems.map((i)=>(
                             <div className={style.cart__wrap__item}>
                                <div className={style.image}>
                                    <img src={i.image} alt="" />
                                </div>
                                <div className={style.details}>
                                    <h3>{i.name}</h3>
                                </div>
                                <div className={style.quantity}>
                                    <button className={style.increase}>+</button>
                                    <div>{i.quantity}</div>
                                    <button className={style.decrease}>-</button>
                                </div>
                                <div className={style.delete}>
                                    <img src={del} alt="" />
                                </div>
                                <div className={style.price}>&#163;{i.price}</div>
                            </div>
                        ))
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default Cart
