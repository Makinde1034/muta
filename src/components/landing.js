import React,{useEffect} from 'react'
import style from '../styles/landing.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProducts } from '../store/product/productAction'

function Landing() {



    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(fetchProducts())
        
    }, [])

   
    return (
        <div className={style.landing}>
            <div className={style.landing__inside}>
                <h3>Awesome clothing collection</h3>
                <h3>Handmade cottons.</h3>
                <button>Shop Now</button>
            </div>

        </div>
    )
}

export default Landing
