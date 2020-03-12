import React, { Component } from "react";
import { connect } from "react-redux";
import alertify from "alertifyjs";
import PasswordForget from "../Login/forget-password";
import {
    ModalFooter,
    ModalBody,
    ModalHeader,
    Modal,
} from 'reactstrap';
import * as actions from "../../Store/Actions/AuthAction";
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
alertify.set('notifier', 'position', 'top-center');

class PhoneModal extends Component {

    initState = {
        ...this.props,
        name        : '',
        password    : '',
        processing  : false,
        isOpen      : false,
        CloseSignInModal: false,
    };

    state = {
        ...this.initState,
        codeSended      : '',
        phone           : '',
        sendCode        : '',
        codeVarified    : '',
        customer        : '',
        SendCodeModal   : false,
        isLoading       : false,
        SignUpModal     : false,
        SignInModal     : false,
        customeruser    : '',
        customerName    :'',
        customertable   : '',
        doctor_name     : this.initState.doctor_data.first_name,
    };

    toggle = () => {
        if(!this.props.treatment_id || !this.props.time){
            alertify.error('Select all fields !');
        }else{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    };

    toggleSendCode = () => {
        this.setState({
            SendCodeModal: !this.state.SendCodeModal
        })
    };

    toggleSignUp = () => {
        this.setState({
            SignUpModal: !this.state.SignUpModal
        })
    };

    toggleSignIn = () => {
        this.setState({
            SignInModal: !this.state.SignInModal
        })
    };

    toggleSignUpClose = () => {
        this.setState({
            SignUpModal: false,
        })
    };

    toggleSignInClose = () => {
        this.setState({
            SignInModal: false,
        })
    };

    toggleSendCodeClose = () => {
        window.location.reload();
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

        const {phone , customeruser} 	=	this.state;
        let params = { phone};
        
        create(params).then(res => {
            
            this.setState({
                ...this.initState,
				codeSended      : res.data.codeSended,
                customeruser    : res.data.customeruser,       
                customertable   : res.data.customertable,       
                customerName    : res.data.customerName,       
            });  
            if(customeruser){
                alertify.error('error');
            }

            dispatch({
                type: actions.PHONE_VARIFICATOIN,
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
                SendCodeModal   : false,
                SignUpModal     : true,
				codeVarified    : res.data.codeVarified,
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
    signIn = () => {

        this.setState({
            processing: true
        });
        const {signIn,dispatch,errorHandler, center_id,date,time, doctor_id,treatment_id} = this.props;

        const { phone, password, } 	=	this.state;
        let params = { phone, password, treatment_id, date,time, center_id, doctor_id};
        
        signIn(params).then(res => {

            this.setState({
                ...this.initState,
                SignInModal:false,
                customer:res.data.customer,
            });  
            dispatch({
                type: actions.SIGN_IN,
                payload: res.data
            });
            
            alertify.alert('Confirmation Alert', "Thank you for requesting an appointment! We'll contact you shortly to confirm. ", function(){ 
                window.location.assign("https://www.hospitallcare.com/pending-appointments")
                setTimeout(window.location.reload(),100000);
              
            });
            // alertify.success('Your appointment has been booked. Thank you for contacting us.')
        }).catch(errorHandler).finally(() => {
            this.setState({
                processing: false
            });
        });

    };
    signUp = () => {

        this.setState({
            processing: true,
        });
        const {signUp,dispatch,errorHandler, center_id,date, time,doctor_id,treatment_id} = this.props;

        const {code,codeSended ,name,password,customerName,customertable} 	=	this.state;
        if(!name){
            if(customerName){
            var  customer_name = customerName;
            }
        }else{
            const {name} =this.state
            var customer_name = name;
        }   
        let status_id = 11;

        let params = { code,codeSended,name:customer_name,password,time, treatment_id, date, center_id, doctor_id,customertable,status_id};
        
        signUp(params).then(res => {

            this.setState({
                ...this.initState,
                SignUpModal:false,
            }); 
            dispatch({
                type: actions.SIGN_UP,
                payload: res.data
            });
            
            alertify.alert('Confirmation Alert', "Thank you for requesting an appointment! We'll contact you shortly to confirm. ", function(){ 
                window.location.assign("https://www.hospitallcare.com/pending-appointments")
                setTimeout(window.location.reload(),100000);
              
            });
        
        }).catch(errorHandler).finally(() => {
            this.setState({
                processing: false
            });
        });
    };
    renderForgetPasswordModal = () => {
		return <PasswordForget {...this.props} doctor_data = {""} doctor_id={"19"} treatment_id={"123"} booking_date={"12"} center_id={"12"}/>;
    };
    renderSignInModal = () => {
        const { SignInModal ,processing ,phone ,customer, customeruser} 	= this.state;
        if (customeruser) {
            this.state.SignInModal =true
        }
        return (
            <>
                 <Modal isOpen={(customer)? false :SignInModal} toggle={this.toggleSignIn} className="modal-primary modal-center">
                   <ModalHeader onClose={this.toggleSignIn}><i className="fa fa-edit" />Sign In</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-control" style={{borderColor: "#D30F00", color:"#D30F00"}}>
                                        Your phone number is already in our system. Please Sign In to continue.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <lable>Phone</lable>
                                    <PhoneInput
                                    country     = "PK"
                                    className   = "form-control"
                                    name        = "phone"
                                    placeholder = "Enter Phone Number"
                                    value       = {this.state.phone}
                                    onChange    = {phone => this.setState({ phone }) }
                                    error       = { phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required' }required/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <lable>Password</lable>                            
                                    <input type="password" className="form-control" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.onChange}required/>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                            <div className="forgetbutton" >
                                {this.renderForgetPasswordModal()}                    
                            </div>
                                <button color="primary" className='btn_1 BookAppointmentClass' autoFocus onClick={this.signIn}>{(processing) ? "Updating..." : " Continue"}</button>{' '}
                                <button color="primary" className='btn_danger' onClick={this.toggleSignInClose}>Close</button>
                    </ModalFooter>
                </Modal>
            </>
        );
    };
    renderSignUpModal = () => {
        const { SignUpModal ,processing ,customerName} 	= this.state;
        return (
            <>
                 <Modal isOpen={SignUpModal} toggle={this.toggleSignUp} className="modal-primary modal-center">
                   <ModalHeader toggle={this.toggleSignUp}><i className="fa fa-edit" />Sign Up</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                <label>Name</label>
                                {(customerName)? 
                                    <textarea type="text" className="form-control" cols="1" rows="1"   placeholder="Enter User Name" name="name" onChange={this.onChange}>{customerName}</textarea>
                                : 
                                    <input type="text" className="form-control"  placeholder="Enter User Name" name="name" onChange={this.onChange}required/>
                                }
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter User Password"  name="password" onChange={this.onChange}/>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button color="primary" className='btn_danger' onClick={this.toggleSignUpClose}>Close</button>
                        <button color="primary" className='btn_1 BookAppointmentClass' onClick={this.signUp}>{(processing) ? "Updating..." : " Continue"}</button>{' '}
                    </ModalFooter>
                </Modal>
            </>
        );
    };
    codeChecker = () =>{
        const {code} = this.state;

        if(code != null ){
            this.sendCode();
        }else{
            alertify.error('Enter code first');
        }
    }
    renderCodeSendedModal = () => {
        const { SendCodeModal ,processing ,codeVarified} 	= this.state;
        if(codeVarified){
            return this.renderSignUpModal();
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
                                        We are about to confirm your phone number. We send 6 digit number at your given phone number. Please provide that number to complete the booking.
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
                        <button color="primary" className='btn_1' onClick={this.codeChecker}>{(processing) ? "Updating..." : " Continue"}</button>{' '}
                    </ModalFooter>
                </Modal>
            </>
        );
    };
    render() {
        const { phone,isOpen,processing,customeruser,codeSended,customertable} = this.state;
        if(customeruser){
            return this.renderSignInModal();
        }
        
        if( codeSended || customertable){
            this.state.SendCodeModal = true;
            return this.renderCodeSendedModal();
        }
      
        const { first_name }= this.props.doctor_data;
        return (
            <>
                <div style={{ position:"relative" }}>
                    <button onClick={this.toggle} autoFocus  className='btn_1 full-width'>
                        Book Appointment
                    </button>
                </div>
                <Modal isOpen={isOpen} toggle={this.toggle} className="modal-primary modal-center">
                    <ModalHeader toggle={this.toggle}><i className="fa fa-edit" /> Login/Register</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>
                                        We are about to confirm your booking with {first_name}. Please provide your mobile number to complete the booking.
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
                        <button color="primary" className='btn_1' autoFocus onClick={(phone)? this.create: ""}>{(processing) ? "Updating..." : " Continue"}</button>{' '}
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
        signIn: (params) => actions.signIn(params),
        signUp: (params) => actions.signUp(params),
        create: (params) => actions.phoneVarification(params),
        sendCode: (params) => actions.codeVarification(params),

	};
};
export default connect(mapStateToProps,mapDispatchToProps)(PhoneModal);
