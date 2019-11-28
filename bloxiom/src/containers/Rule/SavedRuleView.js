import { connect } from "react-redux";
import SavedRule from "../../components/Rule/SavedRule";
import { deleteRule } from "../../actions";

const mapDispatchToProps = dispatch => ({
  deleteRule: id => dispatch(deleteRule(id))
});

export default connect(null, mapDispatchToProps)(SavedRule);
