import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ component: Component, auth, ...other }) => (
  <Route {...other} render={(props) => (
    auth.authenticated
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

ProtectedRoute.propTypes = {
  component: PropTypes.elementType,
  auth: PropTypes.object
}

export default ProtectedRoute;