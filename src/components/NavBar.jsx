import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = ({ auth, location }) => (
    <nav className="navbar sticky-top navbar-dark bg-dark mb-2">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link to="/" className="navbar-brand" href="#">FORUM</Link>
      </nav>
      { location.pathname != '/login' && <div className="justify-content-end" id="navbarNav">
        <Link to="/login" className="btn btn-dark">{!auth.authenticated ? 'Войти' : 'Выйти'}</Link>
      </div> }
    </nav>
)

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  logout: role => dispatch(login(role)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
)