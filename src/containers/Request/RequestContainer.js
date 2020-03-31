import { connect } from "react-redux";
import { updateRequests } from "../../actions";
import Request from "../../components/Admin/Request";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
  updateRequestList: index => dispatch(updateRequests(index))
});

export default withRouter(connect(null, mapDispatchToProps)(Request));
