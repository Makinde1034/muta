import React,{useState} from 'react'
import style from '../styles/top_selling.module.css'
import { useSelector,useDispatch } from 'react-redux'
import storage from '../utils/storage';
import { addItemToCart,addToCart } from '../store/cart/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function TopSelling() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products);
    const loading = useSelector(state => state.productReducer.loading);
    const token = storage.getToken();

    
    const adddToCart = (product) =>{
        if(!token){
            const presentItemsStored = JSON.parse(localStorage.getItem("savedProducts")) || []

            const productIsPresent = presentItemsStored.find(i=>i.id===product.id);
            if(!productIsPresent){
                storage.storeProductIdBeforeAuth([...presentItemsStored,{id:product.id,price:product.price,name:product.name,image:product.image}]); 
                dispatch(addToCart())
                // dispatch(showToast(product.name));
                toast(`you added ${product.name} to cart`)
                
            }else{
                toast("product is already in cart")
            }
            
        }else{  
            dispatch(addItemToCart(product));
        
        }
                             

    }

   

    

    const top = products.map((i)=>(
        <div key={i.id} className={style.featured__products__box}>
            { loading ?
                <div>loading</div>
                 :
                <div>
                    <div className={style.featured__products__box__img}>
                    <img  src={i.image} alt="product image" /> 
                    </div>
                    <p>{i.name}</p>
                    <h2>&#163;{i.price}</h2>
                    <button onClick={()=>adddToCart(i)}>Add to cart</button>
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
                        <ToastContainer
                        autoClose={3000}
                        hideProgressBar
                        pauseOnFocusLoss={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSelling
