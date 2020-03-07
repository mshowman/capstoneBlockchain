import { connect } from "react-redux";
import {
  validateCredentials,
  toggleAuth,
  ValidationStatuses
} from "../actions/index";
import Login from "../components/Login";

const mapStateToProps = state => ({
  status: state.login.response.status,
  errors: state.login.response.errors,
  role: state.login.response.role
});

const mapDispatchToProps = dispatch => ({
  validate: (username, password, privateKey) =>
    dispatch(validateCredentials(username, password, privateKey)),
  clearErrors: () => dispatch(toggleAuth(ValidationStatuses.SIGNED_OUT)),
  toggleAuth: action => dispatch(toggleAuth(action))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
