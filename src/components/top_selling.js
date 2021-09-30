import React,{useState} from 'react'
import style from '../styles/top_selling.module.css'
import { useSelector,useDispatch } from 'react-redux'
import storage from '../utils/storage';
import { addItemToCart,addToCart } from '../store/cart/cartActions';




function TopSelling() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products);
    const loading = useSelector(state => state.productReducer.loading);
    const token = storage.getToken();

    
    const adddToCart = (id) =>{
        if(!token){
            const presentItemsStored = JSON.parse(localStorage.getItem("savedProducts")) || []
            storage.storeProductIdBeforeAuth([...presentItemsStored,{id:id}]); 
            dispatch(addToCart())
        }else{
            const payload = {
                product_id : id
            }  
            dispatch(addItemToCart(payload))
        
        }
                             

    }

    

    const top = products.map((i)=>(
        <div className={style.featured__products__box}>
            { loading ?
                <div>loading</div>
                 :
                <div>
                    <div className={style.featured__products__box__img}>
                    <img src={i.image} alt="product image" /> 
                    </div>
                    <p>{i.name}</p>
                    <h2>&#163;{i.price}</h2>
                    <button onClick={()=>adddToCart(i.id)}>Add to cart</button>
                </div> 
            }
            
        </div>
    ))


    const loader = <div>loading</div>


    return (
        <div>
            <div className={style.topselling} >
                <div className={style.topselling__inside}>
                    <div className={style.products}>
                        {top}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSelling
