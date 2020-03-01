import SideNav from "../components/SideNav";
import { connect } from "react-redux";
import {toggleAuth} from "../actions";

const mapStateToProps = state => ({
  status: state.login.status
});

const mapDispatchToProps = dispatch => ({
  toggleAuth: action => dispatch(toggleAuth(action)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
