import { connect } from "react-redux";
import RuleView from "../../views/RuleView";

const mapStateToProps = state => ({
  rules: state.rules
});

export default connect(mapStateToProps)(RuleView);
