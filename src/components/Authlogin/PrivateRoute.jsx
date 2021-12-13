import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import {useAuthContext } from '../../context/AuthContext';

export const PrivateRoute = ({component: Component, ...rest}) => {
    const {user} = useAuthContext () 

    return (
        <Route {...rest} render={props => {
            return user ? <Component {...props} /> :
            <Redirect to='/iniciarSesion'/> 
        }}>
            
        </Route>
    )
}
