import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';


// Pages
import Home from './pages/Home';
import LoginContainer from './containers/LoginConainer';
import Messages from './pages/Messages';
import NavBar from './components/NavBar';

const Routes = ({ auth }) => (
  <div>
    <NavBar />
    <Switch>
      <ProtectedRoute path='/messages' auth={auth} component={Messages} />
      <Route path='/login' component={LoginContainer} />
      <Route exact path='/' component={Home} />
    </Switch>
  </div>
);


function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default withRouter(
  connect(mapStateToProps)(Routes)
);

