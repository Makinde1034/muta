import React from 'react'
import style from '../styles/cart.module.css'
import { useSelector } from  'react-redux';
import del from '../assets/cancel.svg'
import storage from '../utils/storage';
import emptyCrt from '../assets/empty.svg'

function Cart() {

    const cartItems = useSelector((state) =>state.cartReducer.authCart);
    const savedCartItems = useSelector((state)=>state.cartReducer.savedCartItems) || []
    const token = storage.getToken()
    console.log(token,'checking token here');
    

    return (
        <div>
            <div className={style.cart}>
                <div className={style.cart__wrap}>
                    {   token ? 
                        <div>
                            {   cartItems.length > 0 ?
                                <div>
                                    {
                                        cartItems.map((i)=>(
                                            <div key={i.id} className={style.cart__wrap__item}>
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
                                : 
                                <div>Emty cart</div>
                            }
                        </div>
                        : ''
                    }

{/* This second section is for unauthenticated cart */}



                    {   !token ?
                        <div>
                            {   savedCartItems.length > 0 ?
                                <div>
                                    {
                                        savedCartItems.map((i)=>(
                                            <div key={i.id} className={style.cart__wrap__item}>
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
                                </div>:
                                <div className={style.empty}>
                                    <img src={emptyCrt} alt="" />
                                    <h3>Your cart is empty.</h3>
                                </div>

                            }
                        </div>
                        : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart
