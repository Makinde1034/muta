import React from 'react'
import style from '../styles/home.module.css'
import Landing from '../components/landing.js'
import Featured from '../components/featured.js'
import TopSelling from '../components/top_selling'

function Home() {
    return (
        <div>
            <Landing />
            <Featured />
            <TopSelling />
        </div>
    )
}

export default Home
