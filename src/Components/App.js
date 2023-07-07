import { connect } from "react-redux"
import Main from "./Main";
import { bindActionCreators } from "redux"
import * as actions from "../redux/actions"
import withRouter from "./withRouter";



const mapStateToProps = function mapStateToProps(state){
    return {
       posts: state.postReducer,
       comments: state.comments
    };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch);
    
};

const App = (connect(mapStateToProps, mapDispatchToProps)(Main));

export default withRouter(App)
