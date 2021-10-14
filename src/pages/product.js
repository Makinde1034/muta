import React,{useEffect,useState } from 'react'
import axios from 'axios'
import style from '../styles/product.module.css'
import {Link} from 'react-router-dom'


function Product({match}) {

    const [isLoading,setIsLoading] = useState(true);
    const [product,setProduct] = useState([])

    
    useEffect(() => {
      getProduct()
        
    }, [])
   
    const getProduct = async () =>{

        axios.get(`https://kpk-ecommerce.herokuapp.com/product/?id=${match.params.id}`)
            .then((res)=>{
                setIsLoading(false);
               const {data:{data}} = res
               
               setProduct(...product,[data]);
               console.log(data);console.log([product])
               
            })
    }

    const loader = <div className={style.loader}></div>

   if(isLoading){
       return (
           <div className={style.product__loading}>
               {loader}
           </div>
       )
   }
   return (
       <div>
          {
              product.map((i)=>(
                  <div className={style.product} >
                      <img src={i.image} alt="" />
                      <h3>{i.name}</h3>
                      <p>{i.description}</p>
                      <Link to="/">
                           <button>Continue Shopping</button>
                      </Link>
                     
                  </div>
              ))
          }
       </div>
   )
}

export default Product
