import React from 'react'
import style from '../styles/landing.module.css'

function Landing() {
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
