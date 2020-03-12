import React, { Component } from "react";
import { connect } from "react-redux";
import alertify from "alertifyjs";
import {
    Button,
    ModalFooter,
    ModalBody,
    ModalHeader,
    Modal,
    FormGroup, Input, Label,
} from 'reactstrap';

import * as actions from "../../Store/Actions/AuthAction";
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, isValidPhoneNumber,parsePhoneNumber } from 'react-phone-number-input'
alertify.set('notifier', 'position', 'top-center');

class CodeVarificationModal extends Component {

    initState = {
        ...this.props,
        phone       : '',
        processing  : false,
        isModalOpen : false,
    };

    state = {
        ...this.initState,
        codeSended          : '',
        alreadyindatabase   : '',
    };

    toggle = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    create = () => {

        this.setState({
            processing: true
        });
        const {create,dispatch,errorHandler} = this.props;
        const {phone} 	=	this.state;
        let params = { phone};
        
        create(params).then(res => {
            
            this.setState({
                ...this.initState,
				codeSended: res.data.codeSended,
				alreadyindatabase: res.data.alreadyindatabase,
            });  

            dispatch({
                type: actions.CODE_VARIFICATOIN,
                payload: res.data.data
            });
        }).catch(errorHandler).finally(() => {
            this.setState({
                processing: false
            });
        });
    };
    render() {

        const { phone,isModalOpen,processing} = this.state;
        return (
            <>
                <Modal isOpen={isModalOpen} toggle={this.toggle} className="modal-primary">
                    <ModalHeader toggle={this.toggle}><i className="fa fa-edit" /> Login/Register</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>
                                        We are about to confirm your booking with . Please provide your mobile number to complete the booking.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <PhoneInput
                                    country     = "PK"
                                    className   = "form-control"
                                    name        = "phone"
                                    placeholder = "Enter Phone Number"
                                    value       = {this.state.phone}
                                    onChange    = { phone => this.setState({ phone }) }
                                    error       = { phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required' }required/>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button color="primary" className='btn_1' onClick={this.create}>{(processing) ? "Updating..." : " Continue"}</button>{' '}
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch: dispatch,
        create: (params) => actions.codeVarification(params),

	};
};

export default connect(
    mapDispatchToProps
)(CodeVarificationModal);
