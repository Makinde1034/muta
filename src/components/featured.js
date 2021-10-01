import React from 'react'
import style from '../styles/featured.module.css'
import { useSelector,useDispatch } from 'react-redux' 
import storage from '../utils/storage'
import { addToCart,addItemToCart,showToast,closeToast } from '../store/cart/cartActions'



function Featured() {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.productReducer.products)
    const loading = useSelector((state)=>state.productReducer.loading)
     const token = storage.getToken();

    
    const addProductToCart = (product) =>{
        if(!token){
            const presentItemsStored = JSON.parse(localStorage.getItem("savedProducts")) || []
            storage.storeProductIdBeforeAuth([...presentItemsStored,{id:product.id,price:product.price,name:product.name,image:product.image}]); 
            dispatch(addToCart());
            dispatch(showToast(product.name))
            setTimeout(() => {
                dispatch(closeToast());
            }, 3000);
        }else{
             
            dispatch(addItemToCart(product));
        
        }
                             

    }

    const loader = <div className={style.loader}></div>

    const featured = products.slice(3,5).map((i)=>(
        <div key={i.id} className={style.featured__products__box}>
            <div className={style.featured__products__box__img}>
                <img src={i.image} alt="" /> 
            </div>
            <p>{i.name}</p>
            <h2>&#163;{i.price}</h2>
            <button onClick={()=>addProductToCart(i)} >Add to cart</button>
        </div>
    ))

   


    return (
        <div>
            <div className={style.featured}>
                <div className={style.featured__inside}>
                    <div className={style.featured__inside__left}>
                        <div className={ loading ? style.featured__products__loading : style.featured__products  }>
                            { loading ? loader : featured }
                        </div>
                    </div>
                    <div className={style.featured__inside__right}>
                        <h3>Bags & Wallets</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita possimus officiis soluta nam incidunt iure quisquam inventore ea sed.</p>
                        <button>Shop now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
