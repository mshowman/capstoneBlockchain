import SideNav from "../components/SideNav";
import { connect } from "react-redux";
import {toggleAuth} from "../actions";

const mapDispatchToProps = dispatch => ({
  toggleAuth: action => dispatch(toggleAuth(action)),
});

export default connect(null, mapDispatchToProps)(SideNav);
