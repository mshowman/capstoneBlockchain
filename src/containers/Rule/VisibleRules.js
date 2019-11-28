import { connect } from "react-redux";
import RuleView from "../../views/RuleView";

const mapStateToProps = state => ({
  rules: state.ruleReducer.rules
});

export default connect(mapStateToProps)(RuleView);
