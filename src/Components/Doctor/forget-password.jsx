import React, { Component } from "react";
import { connect } from "react-redux";
import alertify from "alertifyjs";

import {ModalFooter,ModalBody,ModalHeader,Modal,} from 'reactstrap';

import * as actions from "../../Store/Actions/DoctorAuthAction";
import 'react-phone-number-input/style.css'
import PhoneInput, {  isValidPhoneNumber } from 'react-phone-number-input'
alertify.set('notifier', 'position', 'top-center');

class PhoneModal extends Component {

    initState = {
        ...this.props,
        phone           : '',
        password        : '',
        confirmPassword : '',
        processing      : false,
        isOpen          : false,
    };

    state = {
        ...this.initState,
        codeSended      : '',
        sendCode        : '',
        codeVarified    : '',
        customer        : '',
        SendCodeModal   : false,
        isLoading       : false,
        NewPasswordModal: false,
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    toggleSendCode = () => {
        this.setState({
            SendCodeModal: !this.state.SendCodeModal
        })
    };

    togglePassword = () => {
        this.setState({
            PasswordModal: !this.state.PasswordModal
        })
    };

    togglePasswordClose = () => {
        this.setState({
            PasswordModal: false,
        })
    };
 
    toggleSendCodeClose = () => {
        this.setState({
            SendCodeModal: false,
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
                registor: res.data.registor,            
            });  
            if(res.data.registor){
                alertify.error("Pleasre register first to continue");
			    this.props.history.push('/register');
            }
            dispatch({
                type: actions.FORGET_PHONE_VARIFICATION,
                payload: res.data.data
            });
        }).catch(errorHandler).finally(() => {
            this.setState({
                processing: false
            });
        });

    };
    sendCode = () => {

        this.setState({
            processing: true
        });
        const {sendCode,dispatch,errorHandler} = this.props;

        const {code,codeSended} 	=	this.state;
        let params = { code,codeSended};

        sendCode(params).then(res => {

            this.setState({
                ...this.initState,
                SendCodeModal:false,
                PasswordModal:true,
				codeVarified: res.data.codeVarified,
            });  

            dispatch({
                type: actions.CODE_VARIFICATION,
                payload: res.data.data
            });
        }).catch(errorHandler).finally(() => {
            this.setState({
                processing: false
            });
        });
    };
   
    newPassword = () => {

        this.setState({
            processing: true,
        });
        const {newPassword,dispatch,errorHandler} = this.props;

        const {code,codeSended,password ,} 	=	this.state;
        
        let params = { code,codeSended,password};
        
        newPassword(params).then(res => {

            this.setState({
                ...this.initState,
                PasswordModal:false,
            });  
            alertify.success('Your Password has been updated. Thank you for contacting us.')
			this.props.history.push('/doctor-signin');
           
        }).catch(errorHandler).finally(() => {
            this.setState({
                processing: false
            });
        });
    };
    checkPassword = () => {
        const {password, confirmPassword} = this.state;
        if(password == confirmPassword){
            this.newPassword();
        }else{
            alertify.error("The passwords don't match")
        }
    }
    renderNewPasswordModal = () => {
        const { PasswordModal ,processing} 	= this.state;

        return (
            <>
                 <Modal isOpen={PasswordModal} toggle={this.togglePassword} className="modal-primary modal-center">
                   <ModalHeader toggle={this.togglePassword}><i className="fa fa-edit" />New Password</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                <input type="password" className="form-control" name="confirmPassword" id="password1"  placeholder="Enter User Password" onChange={this.onChange}required/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                <input type="password" className="form-control"  id="password2" placeholder="Confirm password"  name="password" onChange={this.onChange}/>
                                </div>
                            </div>
                        </div>
                        <div id="pass-info" className="clearfix"></div>
                    </ModalBody>
                    <ModalFooter>
                        <button color="primary" className='btn_danger' onClick={this.togglePasswordClose}>Close</button>
                        <button color="primary" className='btn_1' onClick={this.checkPassword}>{(processing) ? "Updating..." : " Continue"}</button>{' '}
                    </ModalFooter>
                </Modal>
            </>
        );
    };
    renderCodeSendedModal = () => {
        const { SendCodeModal ,processing ,codeVarified} 	= this.state;
        
        if(codeVarified){
            return this.renderNewPasswordModal();
        }
        return (
            <>
                 <Modal isOpen={SendCodeModal} toggle={this.toggleSendCode} className="modal-primary modal-center">
                   <ModalHeader toggle={this.toggleSendCode}><i className="fa fa-edit" />Enter 6-Digite Code</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                <label>
                                    We are about to confirm your phone number. We send 6 digit number at your given phone number. Please provide that number to verify your phone number.
                                </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                <input type="text" className="form-control"  placeholder="Enter 6-Digits Code" name="code" maxLength="6" minLength="6" onChange={this.onChange}required/>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button color="primary" className='btn_danger' onClick={this.toggleSendCodeClose}>Close</button>
                        <button color="primary" className='btn_1' onClick={this.sendCode}>{(processing) ? "Updating..." : " Continue"}</button>{' '}
                    </ModalFooter>
                </Modal>
            </>
        );
    };
    render() {

        const { phone, isOpen, processing, codeSended} = this.state;
        
        if( codeSended ){
            this.state.SendCodeModal = true;
            return this.renderCodeSendedModal();
        }
      
        return (
            <>
                <button onClick={this.toggle} className="btn_danger"><small>Forgot password?</small></button>
                <Modal isOpen={isOpen} toggle={this.toggle} className="modal-primary modal-center">
                    <ModalHeader toggle={this.toggle}><i className="fa fa-edit" /> Forget Password</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>
                                        Enter your phone number to create or reset your Password!
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
                        <button color="primary" className='btn_1' onClick={(phone)? this.create: ""}>{(processing) ? "Updating..." : " Continue"}</button>{' '}
                    </ModalFooter>
                </Modal>
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
        newPassword : (params) => actions.newPassword(params),
        create      : (params) => actions.forgetPhoneVarification(params),
        sendCode    : (params) => actions.doctorForgetCodeVarification(params),
	};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneModal);
