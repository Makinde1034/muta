import React from 'react';
import { Route, Redirect } from  'react-router-dom';
import { useSelector } from 'react-redux'

export const  ProtectedRoute = ({component : Component,...rest }) => {
   
    const token = localStorage.getItem("token")

    return (
        <Route {...rest}
            render={
                props => {
                    if(token === ''){
                        return <Component {...props} />
                    }
                    else{
                        return <Redirect to={
                            {
                                pathname:'/',
                                state:{
                                    from : props.location
                                }
                            }
                        } />
                    }
                }
        } />
    )
}

export default ProtectedRoute
