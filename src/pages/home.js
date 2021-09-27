import React from 'react'
import style from '../styles/home.module.css'
import Landing from '../components/landing.js'
import Featured from '../components/featured.js'

function Home() {
    return (
        <div>
            <Landing />
            <Featured />
        </div>
    )
}

export default Home
