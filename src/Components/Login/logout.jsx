import React, { Component } from "react";
import * as actions from "../../Store/Actions/AuthAction";
import { connect } from "react-redux";

class Logout extends Component {

  componentDidMount() {

    let token = this.props.user.accessToken;

    this.props.logout(token).then(res => {
      
      this.props.dispatch({
        type: actions.LOGOUT
      });

      this.props.history.push("/");
    }).catch(this.props.errorHandler);
    
  }

  render() {
    return <div data-loader="circle-side"></div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.AuthReducers.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
    logout: token => actions.logout(token)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
