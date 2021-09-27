import React from 'react'
import style from '../styles/featured.module.css'
import test from '../assets/model.png'
import { useSelector } from 'react-redux' 



function Featured() {

    const products = useSelector((state)=>state.productReducer.products)
    const loading = useSelector((state)=>state.productReducer.loading)

     const loader = <div className={style.loader}></div>

    const featured = products.slice(3,5).map((i)=>(
        <div className={style.featured__products__box}>
            <div className={style.featured__products__box__img}>
                <img src={i.image} alt="product image" /> 
            </div>
            <p>{i.name}</p>
            <h2>&#163;{i.price}</h2>
            <button>Add to cart</button>
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
