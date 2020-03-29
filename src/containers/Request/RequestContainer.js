import { connect } from "react-redux";
import { updateRequests } from "../../actions";
import Request from "../../components/Admin/Request";

const mapDispatchToProps = dispatch => ({
  updateRequestList: index => dispatch(updateRequests(index))
});

export default connect(null, mapDispatchToProps)(Request);
