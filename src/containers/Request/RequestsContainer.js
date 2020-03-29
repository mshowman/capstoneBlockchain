import { connect } from "react-redux";
import Requests from "../../components/Admin/Requests";

const mapStateToProps = state => ({
  requestList: state.requests
});

export default connect(mapStateToProps)(Requests);
