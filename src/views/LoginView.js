import {connect} from 'react-redux';
import {validateCredentials, toggleAuth} from '../actions/index';
import Login from '../components/Login';

const mapStateToProps = state => ({
   status: state.login.response.status,
});

const mapDispatchToProps = dispatch => ({
    validate: (username, password, privateKey) => dispatch(validateCredentials(username, password, privateKey)),
    toggleAuth:  action => dispatch(toggleAuth(action))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
