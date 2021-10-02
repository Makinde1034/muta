import React,{ useState, useEffect, } from 'react'
import style from '../styles/sign_up.module.css'
import { useDispatch,useSelector } from 'react-redux'
import { signUpUser } from '../store/auth/authAction';
import Loader from '../components/loader';
import { useHistory } from 'react-router-dom'


function SignUp() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [lga, setLga] = useState("");
    const [state, setState] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory()

    const dispatch = useDispatch();

    const loading = useSelector((state)=>state.authReducer.loading);
    const status = useSelector((state)=>state.authReducer.status)

    const userDetails = {
        first_name : firstName,
        last_name : lastName,
        email : email,
        address : {
            street : street,
            lga : lga,
            state : state
        },
        phone_number : phoneNumber,
        password : password
    }

    function signUp(e){
        e.preventDefault()
        dispatch(signUpUser(userDetails))
    }

    useEffect(() => {
        if(status == 'success'){
            history.push('/');
        }
        
    }, [status])


    return (
        <div>
            <div className={style.signup}>
                <div className={style.signup__inside}>              
                    <form onSubmit={signUp}>
                        <header>
                            <h3>Sign Up {userDetails.lastname}</h3>
                        </header>
                        <div className={style.box}>
                            <input onChange={(e)=>setFirstName(e.target.value)} value={firstName} placeholder="Firstname" type="text" />
                            <input onChange={(e)=>setLastName(e.target.value)} value={lastName} placeholder="Lastname" type="Lastname" />
                        </div>
                        <div className={style.box}>
                            <input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Email" type="email" />
                            <input onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} placeholder="phonenumber" type="number" />
                        </div>
                        <div className={style.address}>
                            <input  onChange={(e)=>setStreet(e.target.value)} value={street} placeholder="Street" type="text" />
                            <input  onChange={(e)=>setLga(e.target.value)} value={lga} placeholder="LGA" type="text" />
                            <input  onChange={(e)=>setState(e.target.value)} value={state} placeholder="State" type="text" />
                        </div>
                        <div className={style.box}>
                            <input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" type="password" />
                            <input  onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="Confirm password" type="password" />
                        </div>
                        <div className={style.button}>
                            <button> { loading ? <Loader /> : 'Sign up' }</button>
                        </div>
                        <div className={style.error}>
                            { status=='error' ? <p>An error occured while trying to sign up. Please try again.</p> : '' }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
