import React from 'react'
import style from '../styles/cart.module.css'
import { useSelector,useDispatch } from  'react-redux';
import del from '../assets/cancel.svg'
import storage from '../utils/storage';
import emptyCrt from '../assets/empty.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backArrow from '../assets/left-arrow (1).png'
import { deleteItemFromCart,increament,removeFromCart } from '../store/cart/cartActions';  
import { Link } from 'react-router-dom';    

function Cart() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) =>state.cartReducer.authCart);
    const savedCartItems = useSelector((state)=>state.cartReducer.savedCartItems) || []
    const totalPrice = useSelector((state)=>state.cartReducer.price);
    console.log(totalPrice,'total price here')
    const token = storage.getToken()


    const deleteItem = (id) =>{
        const data = {
            product_id : id
        }
        dispatch(deleteItemFromCart(data))                          
    }

    const increaseQuty = (id) =>{
        const data = {
            product_id : id
        }
        dispatch(increament(data))
    }

    const decrease = (id) =>{
        const data = {
            product_id : id 
        }
        dispatch(removeFromCart(data))
    }
    

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
                                                    <button onClick={()=>increaseQuty(i.id)} className={style.increase}>+</button>
                                                    <div>{i.quantity}</div>
                                                    <button onClick={()=>decrease(i.id)} className={style.decrease}>-</button>
                                                </div>
                                                <div className={style.delete}>
                                                    <img onClick={()=>deleteItem(i.id)} src={del} alt="" />
                                                </div>
                                                <div className={style.price}>&#163;{Math.round(i.price)}</div>
                                            </div>
                                        ))

                                    }
                                </div>
                                : 
                                <div className={style.empty}>
                                    <img src={emptyCrt} alt="" />
                                    <h3>Your cart is empty.</h3>
                                </div>
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
                                                    <button onClick={()=>{toast("you have to be logged in to peform more cart oprations")}} className={style.increase}>+</button>
                                                    <div>{i.quantity}</div>
                                                    <button  onClick={()=>{toast("you have to be logged in to peform more cart oprations")}} className={style.decrease}>-</button>
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
                    <div className={style.cartBottom}>

                        <div className={style.cartBottom__img}>
                            <img src={backArrow} alt="" />
                            <p>Go back to shop</p>  
                        </div>
                        <div className={style.cartBottom__price}>
                            <p>&#163;{ Math.ceil(totalPrice) }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
