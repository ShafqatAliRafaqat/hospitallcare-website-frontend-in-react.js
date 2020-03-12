import React, { Component } from "react";
import { connect } from "react-redux";
import alertify from "alertifyjs";
import * as actions from "../../../Store/Actions/AppointmentAction";
import SweetAlert from 'react-bootstrap-sweetalert';

alertify.set('notifier', 'position', 'top-center');

class CancelAppointment extends Component {

    initState = {
        ...this.props,
        processing      : false,
        isOpen          : false,
        show            : false
    };

    state = {
        ...this.initState,
        id              :this.initState.id,
        isLoading       : false,
        data            : '',
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
 
    cancelAppointment = () => {

        let { cancelAppointment, errorHandler } = this.props;

        let id  = this.state.id;
        let token       = this.props.user.access_token;
        cancelAppointment(id, token).then(res => {
            this.setState({
				show	: true,
				data	: res.data.data,
			});
			if(res.data.data){
                this.props.history.push('/pending-appointments');
                alertify.success("Your appointment has been canceled!");
                setTimeout(window.location.reload(false),100000);
            }
		}).catch(errorHandler).finally(() => {
			this.setState({
				show: false
			});
		});
    };
   
    render() {

        // const { isOpen, processing} = this.state;
        return (
            <>    
                <button onClick={() => this.setState({ show: true })} className="btn btn-block btn-warning text-white font-weight-bold d-none d-lg-block no-booking-btn">
                    Cancel Booking
                </button>
                <button onClick={() => this.setState({ show: true })} className="btn btn-block btn-warning text-white font-weight-bold m-0 d-lg-none no-booking-btn">
                    Cancel Booking
                </button>
                <SweetAlert
                    warning
                    showCancel
                    show={this.state.show}
                    confirmBtnText="Yes, Cancel!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={this.cancelAppointment}
                    onCancel={() => this.setState({ show: false })}
                    focusCancelBtn
                    >
                    You want to cancel the appointment!
                </SweetAlert>
            </>
        );
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
        cancelAppointment : (params,token) => actions.cancelAppointment(params, token),
	};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CancelAppointment);
