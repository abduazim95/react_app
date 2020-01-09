import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { login, logout } from '../actions';
import Login from '../pages/Login'
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ login, logout }, dispatch)
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)