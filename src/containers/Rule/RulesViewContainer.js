import {connect} from "react-redux";
import RuleView from "../../views/RuleView";
import {toggleAuth} from "../../actions";

const mapStateToProps = state => ({
  rules: state.rules,
});

const mapDispatchToProps = dispatch => ({
  toggleAuth:  action => dispatch(toggleAuth(action))
});

export default connect(mapStateToProps, mapDispatchToProps)(RuleView);
