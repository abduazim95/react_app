import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, auth, ...other }) => (
  <Route {...other} render={(props) => (
    auth.authenticated
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default ProtectedRoute;