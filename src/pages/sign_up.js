import React from 'react'
import style from '../styles/sign_up.module.css'

function SignUp() {
    return (
        <div>
            <div className={style.signup}>
                <div className={style.signup__inside}>
                    <form>
                        <header>
                            <h3>Sign Up</h3>
                        </header>
                        <div className={style.box}>
                            <input placeholder="Firstname" type="text" />
                            <input placeholder="Lastname" type="Lastname" />
                        </div>
                        <div className={style.box}>
                            <input placeholder="Email" type="text" />
                            <input placeholder="phonenumber" type="text" />
                        </div>
                        <div className={style.address}>
                            <input placeholder="Street" type="text" />
                            <input placeholder="LGA" type="text" />
                            <input placeholder="State" type="text" />
                        </div>
                        <div className={style.box}>
                            <input placeholder="Password" type="text" />
                            <input placeholder="Confirm password" type="Lastname" />
                        </div>
                        <div className={style.button}>
                            <button>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
