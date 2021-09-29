import React,{useState} from 'react'
import style from '../styles/sign_in.module.css'
import Loader from '../components/loader';
import { useDispatch } from 'react-redux'
import { signInUser } from '../store/auth/authAction';



function SignIn() {

    const [email,setEmail] = useState("");
    const [ password,setPassword ] = useState("");

    const dispatch = useDispatch();

    const data = {
        email : email,
        password : password
    }

    function signIn(e) {
        e.preventDefault()
        dispatch(signInUser(data));
    }

    return (
        <div>
            <div className={style.signin}>
               <div className={style.signin__inside}>
                    <form onSubmit={signIn} >
                        <header>
                            <h3>Sign in</h3>
                        </header>
                        <div className={style.box}>
                            <input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Email" type="text" />
                            <input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" type="Lastname" />
                        </div>
                        <div className={style.button}>
                            <button>
                                <p>Sign in</p>
                                <Loader />
                            </button>
                        </div>
                    </form>
               </div>
            </div>
        </div>
    )
}

export default SignIn
