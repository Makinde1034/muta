import React from 'react'
import style from '../styles/featured.module.css'
import test from '../assets/model.png'
import { useSelector } from 'react-redux' 



function Featured() {

    const products = useSelector((state)=>state.productReducer.products)
    const loading = useSelector((state)=>state.productReducer.loading)

    const featured = products.slice(3,5).map((i)=>(
        <div className={style.featured__products__box}>
            <div className={style.featured__products__box__img}>
                <img src={i.image} alt="" />
            </div>
            <h2>{i.name}</h2>
        </div>
    ))


    return (
        <div>
            <div className={style.featured}>
                <div className={style.featured__inside}>
                    <div className={style.featured__inside__left}>
                        <div className={style.featured__products}>
                            {featured}
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
