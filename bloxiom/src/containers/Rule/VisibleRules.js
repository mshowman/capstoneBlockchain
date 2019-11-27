import { connect } from "react-redux";
import RuleView from "../../views/RuleView";
import { getRules } from "../../actions";

const mapDispatchToProps = dispatch => ({
  getRules: () => dispatch(getRules(0))
});

export default connect(null, mapDispatchToProps)(RuleView);
