import React, {Component} from "react";
import { Link ,Redirect} from "react-router-dom";
import * as actions from "../../Store/Actions/AuthAction";
import alertify from "alertifyjs";
import { connect } from "react-redux";
import 'react-phone-number-input/style.css';
import {Helmet} from "react-helmet";
import {
    ModalFooter,
    ModalBody,
    ModalHeader,
    Modal,
} from 'reactstrap';
import PhoneInput, { isValidPhoneNumber} from 'react-phone-number-input';
alertify.set('notifier', 'position', 'top-center');

class Register extends Component{
	initState = {
        phone:'',
        password:'',
        confirmPassword:'',
        name:'',
        code:'',
        processing: false,
	};
	state = {
		...this.initState,
        SendCodeModal: false,
		codeVarified:'',
		codeSended:'',
		customertable:'',
		customeruser:'',
	};
	onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
	};
	toggleSendCode = () => {
        this.setState({
            SendCodeModal: !this.state.SendCodeModal
        })
	};
	toggleSendCodeClose = () => {
        this.setState({
            SendCodeModal: false,
        })
    };
	create = () => {

        this.setState({
			processing: true,
        });
        const {create,dispatch,errorHandler} = this.props;
        const {phone} 	=	this.state;
		let params = { phone};

        create(params).then(res => {
            if(res.data.customeruser){
				alertify.alert("Your phone number is already in our system. Please login using your phone number and password to continue");
				this.props.history.push('/login');
			}
          
            this.setState({
				// ...this.initState,
				SendCodeModal: true,			
				codeSended: res.data.codeSended,      
                customertable: res.data.customertable,       
			});  
			
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

		const {code} 	=	this.state;
		let codeSended = this.state.phone;
		let params = { code,codeSended};
        sendCode(params).then(res => {

            this.setState({
                SendCodeModal:false,
				codeVarified: res.data.codeVarified,
			});  
			if(res.data.codeVarified){
				this.signUp();
			}
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
    signUp = () => {

        this.setState({
            processing: true,
        });
        const {signUp,dispatch,errorHandler} = this.props;

        const {code, name, password,customertable} 	=	this.state;
        let codeSended = this.state.phone;
        let status_id =12;
		let params = { code, codeSended, name, password, customertable, status_id}; 
            
        signUp(params).then(res => {

            this.setState({
                ...this.initState,
                SendCodeModal:false,
            });  
            this.props.history.push('/');
            alertify.success("Login Successfully");
            setTimeout(window.location.reload(),100000);
            dispatch({
                type: actions.SIGN_UP,
                payload: res.data
            });


        }).catch(errorHandler).finally(() => {
            this.setState({
                processing: false
            });
        });

    };
    checkPassword = () => {
        const {password, confirmPassword,name,phone} = this.state;

        if(name != '' && phone != '' && password != '' && confirmPassword != ''){
            if(password == confirmPassword ){
                this.create();
            }else{
                alertify.error("The passwords don't match")
            }
        }else{
            alertify.error("Enter all fields")
        }
    }
	renderCodeSendedModal = () => {
        const { SendCodeModal ,processing, phone} 	= this.state;
		
        return (
            <>
					<div className="form-group text-center add_top_30">
						<button color="primary" className='btn_1' onClick={this.checkPassword}>{(processing) ? "Updating..." : " Continue"}</button>{' '}
					</div>
                 <Modal isOpen={SendCodeModal} toggle={this.toggleSendCode} className="modal-primary">

                   <ModalHeader toggle={this.toggleSendCode}><i className="fa fa-edit" />Enter 6-Digite Code</ModalHeader>

                    <ModalBody>
                    <div className="row">
						<div className="col-md-12">
							<div className="form-group">
                            <label>
                                We are about to confirm your phone number. We sended 6 digit number at your given phone number. Please provide that number to complete the booking.
                            </label>
                            </div>
						</div>
					</div>
                    <div className="row">
						<div className="col-md-12">
							<div className="form-group">
                            <input type="text" className="form-control"  placeholder="Enter 6-Digits Code" name="code" maxLength="6" minLength="6" onChange={this.onChange}required/>
                            <input type="hidden" className="form-control"  name="codeSended" value={phone} onChange={this.onChange}/>
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
    render(){
		const {phone,} = this.state;
        if(this.props.user){
			return <Redirect to='/404-not-found' />;
		};
        return(
            <>
                <Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="keywords" content="top Doctors,Hospitall,CareALL,Top clinics,top hospitals,top specializations"></meta>
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    				<meta name="description" content="Register to Findoctor | Get best doctors near you | Get CareALL APP for patient profiling" />
    				<meta name="author" content="Hospitall Care" />
					<title>Register to Findoctor | Get best doctors near you | Get CareALL APP for patient profiling</title>
					<Link to='/doctor-list'></Link>
            	</Helmet>
	<main>
		<div className="bg_color_2">
			<div className="container margin_60_35">
				<div id="register">
					<h1>Please register to Findoctor!</h1>
					<div className="row justify-content-center">
						<div className="col-md-5">
								<div className="box_form">
									<div className="form-group">
										<label>Name</label>
										<input type="text" className="form-control" placeholder="Your name" name="name" value ={this.state.name} onChange={this.onChange}/>
									</div>
									<div className="form-group">
										<label>Phone Number</label>
										<PhoneInput
											country = "PK"
											className="form-control"
											name = "phone"
											placeholder = "Enter Phone Number"
											value={this.state.phone}
											onChange={ phone => this.setState({ phone }) }
											error={ phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required' }required/>
                            
									</div>
									<div className="form-group">
										<label>Password</label>
										<input type="password" className="form-control" id="password1" name="password" value={this.state.password} onChange={this.onChange} placeholder="Your password" />
									</div>
									<div className="form-group">
										<label>Confirm password</label>
										<input type="password" className="form-control" id="password2" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange} placeholder="Confirm password" />
									</div>
									<div id="pass-info" className="clearfix"></div>
									<div className="checkbox-holder text-left">
										<div className="checkbox_2">
											<input type="checkbox" value="accept_2" id="check_2" name="check_2" checked />
											<label htmlFor="check_2"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>
										</div>
									</div>
									{this.renderCodeSendedModal()}
								</div>
                                <p className="text-center link_bright">Already have an Account <Link to="/login" style={{ color:"#7ecaff", }}><strong>Login now!</strong></Link></p>
						</div>
					</div>
					{/* <!-- /row --> */}
				</div>
				{/* <!-- /register --> */}
			</div>
		</div>
	</main>
	{/* <!-- /main --> */}
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
        signUp: (params) => actions.signUp(params),
        create: (params) => actions.phoneVarification(params),
        sendCode: (params) => actions.codeVarification(params)

	};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);