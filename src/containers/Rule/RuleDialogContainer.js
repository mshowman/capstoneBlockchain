import { connect } from "react-redux";
import { addRule, editRule } from "../../actions";
import RuleDialog from "../../components/Rule/RuleDialog";

const mapDispatchToProps = dispatch => ({
  addRule: rule => dispatch(addRule(rule)),
  editRule: (id, rule) => dispatch(editRule(id, rule))
});

export default connect(null, mapDispatchToProps)(RuleDialog);
