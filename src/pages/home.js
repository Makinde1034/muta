import React from 'react'
import style from '../styles/home.module.css'
import Landing from '../components/landing.js'
import Featured from '../components/featured.js'
import TopSelling from '../components/top_selling'
import Toast from '../components/toast'
import { useSelector,useDispatch } from 'react-redux'
import Loader from '../components/loader'

function Home() {

    const loading = useSelector((state)=>state.productReducer.loading);

    return (
        <div>
            <Landing />
            {   loading ? 
                <div className={style.loading}>
                    <Loader  />
                </div>
                :
                <div >
                    <Featured />
                    <TopSelling />
                </div>
            }
            <Toast />
        </div>
    )
}

export default Home
