import React,{useState} from 'react'
import style from '../styles/sign_in.module.css'
import Loader from '../components/loader';
import { useDispatch,useSelector } from 'react-redux'
import { signInUser } from '../store/auth/authAction';
import { addItemToCart } from '../store/cart/cartActions';



function SignIn() {

    const [email,setEmail] = useState("");
    const [ password,setPassword ] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authReducer.loading)

    
    function addLocallyStoredProductsToCart(){
        const addSavedProductsToCart = JSON.parse(localStorage.getItem("savedProducts")).
        map((product)=>{
            dispatch(addItemToCart(product));
        })
    }


    function signIn(e){
        e.preventDefault();
        const data = {
            email : email,
            password : password
        }
        dispatch(signInUser(data))
        const localCartItems = JSON.parse(localStorage.getItem("savedProducts"))
        setTimeout(() => {
            if(localCartItems){
                addLocallyStoredProductsToCart();
            }
            
        }, 5000);
        
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
                            <input onChange={(e)=>setEmail(e.target.value)} required value={email} placeholder="Email" type="email" />
                            <input onChange={(e)=>setPassword(e.target.value)} required value={password} placeholder="Password" type="password" />
                        </div>
                        <div className={style.button}>
                            <button> { loading ? <Loader /> : <p>Sign in</p> }  </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
