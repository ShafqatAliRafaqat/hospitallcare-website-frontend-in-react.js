import React, {Component} from "react";
import { Link,Redirect } from "react-router-dom";
import * as actions from "../../Store/Actions/DoctorAuthAction";
import alertify from "alertifyjs";
import { connect } from "react-redux";
import SweetAlert from 'react-bootstrap-sweetalert';
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import {
    ModalFooter,
    ModalBody,
    ModalHeader,
    Modal,
} from 'reactstrap';
import clsx from 'clsx';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

alertify.set('notifier', 'position', 'top-center');
const useStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
  });
  
function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }
  
class JoinDoctor extends Component{
	initState = {

        first_name:'',
        last_name:'',
        email:'',
        pmdc:'',
        gender:'1',
        location:'',
        phone:'',
        password:'',
        confirmPassword:'',
        code:'',
        doctor_id:'',
        processing: false,
        showLoginAlert:false,
        showSignUpCfm:false,
        show:false,

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
        const { first_name,last_name,email,pmdc,gender,location,phone,password} 	=	this.state;
		let params = { first_name,last_name,email,pmdc,gender,location,phone,password};

        create(params).then(res => {
           
                if(res.data.code_sent){
                    this.setState({
                        SendCodeModal:true,
                        doctor_id:res.data.code_sent,
                    });
                } else if(res.data.doctor_panel){
                    this.setState({
                        showLoginAlert:true,
                    });
                    // window.location.assign('https://support.hospitallcare.com/login');
                }
                 else if(res.data.create_doctor_password){
                    this.setState({
                        show:true,
                    });
                }
                else if(res.data.invalid_data){
                    alertify.success("Please Enter a Valid Number");
                }
			
            dispatch({
                type: actions.DOCTOR_SIGN_UP,
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

		const {code, doctor_id} 	=	this.state;
        let codeSended = this.state.phone;
		let params = { code,codeSended, doctor_id};
        sendCode(params).then(res => {

            this.setState({
                SendCodeModal:false,
				codeVarified: res.data.varified,
			});  
			if(res.data.varified){
				this.signUp();
			}
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
    signUp = () => {
        this.setState({
            processing: true,
            showSignUpCfm:true,
        });
    };
    checkPassword = () => {
        const {password, confirmPassword,name,phone,email} = this.state;

        if(name != '' && phone != '' && email != '' && password != '' && confirmPassword != ''){
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
                                We are about to confirm your phone number. We have sent a 6 digit number at your given phone number. Please provide that number to complete the booking.
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
                            <button color="primary" className='btn_1' onClick={this.sendCode}>{(processing) ? "Signing you Up..." : " Sign Up"}</button>{' '}
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
    				<meta name="description" content="SignUp as a Doctor| Join Our Best Doctor's Team | Get Onboard | Get Doctor Dashboard | Get our DoctorALL app" />
    				<meta name="author" content="Hospitall Care" />
					<title>SignUp as a Doctor| Join Our Best Doctor's Team | Get Onboard | Get Doctor Dashboard | Get our DoctorALL app</title>
					<link rel="canonical" href="https://hospitallcare.com" />
            	</Helmet>
	<main>
		<div className="bg_color_2">
			<div className="container margin_60_35">
				<div id="register">
					<h1>Join Our Best Doctor's Team</h1>
					<div className="row justify-content-center">
						<div className="col-md-8">
								<div className="box_form box-media">
									<div className="form-group row">
                                        <div className="col-md-6">
										<label>First name</label>
										<input type="text" className="form-control" placeholder="First name" name="first_name" value ={this.state.name} onChange={this.onChange}/>
                                        </div>
                                        <div className="col-md-6">

                                        <label>Last name</label>
										<input type="text" className="form-control" placeholder="Last name" name="last_name" value ={this.state.name} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-6">
										<label>Email</label>
										<input type="email" className="form-control" placeholder="Email" name="email" value ={this.state.name} onChange={this.onChange}/>
                                        </div>
                                        <div className="col-md-6">
                                        <label>PMDC</label>
										<input type="text" className="form-control" placeholder="PMDC" name="pmdc" value ={this.state.name} onChange={this.onChange}/>
                                        </div>
                                    </div>
									<div className="form-group row">
                                        <div className="col-md-6">
                                            <label>Phone Number</label>
                                            <PhoneInput
                                                country = "PK"
                                                className="form-control"
                                                name = "phone"
                                                placeholder = "Enter Phone Number"
                                                value={this.state.phone}
                                                onChange={ phone => this.setState({ phone }) }
                                                error={ phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required' }
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                        <label>Gender</label>        
                                                <RadioGroup defaultValue={this.state.gender} aria-label="gender" onChange={this.onChange} name="gender">
                                                    <FormControlLabel value="1" control={<StyledRadio />} label="Male" />
                                                    <FormControlLabel value="0" control={<StyledRadio />} label="Female" />
                                                </RadioGroup>
                                        </div>
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
                                <p className="text-center link_bright">Already have an Account <Link to="/doctor-signin" style={{ color:"#7ecaff", }}><strong>Login now!</strong></Link></p>
						</div>
					</div>
					{/* <!-- /row --> */}
				</div>
				{/* <!-- /register --> */}
			</div>
		</div>
	</main>
            <SweetAlert
                warning
                show={this.state.show}
                confirmBtnBsStyle="info"
                title="Password Creation"
                onConfirm={() => this.setState({ ...this.initState })}
                onCancel={() => this.setState({ show: false })}
                >
                    Your Details are already in our Database. We have sent a URL on your Phone. Please Follow that link to Create your Password.
            </SweetAlert>

            <SweetAlert
                warning
                show={this.state.showSignUpCfm}
                confirmBtnBsStyle="success"
                title="Sign Up Successfully!"
                onConfirm={() => this.setState({ ...this.initState })}
                onCancel={() => this.setState({ showSignUpCfm: false })}
                >
                    You're Registered Successfully. Please Follow the  <a href="https://support.hospitallcare.com/admin">Link</a>to Login.
            </SweetAlert>

            <SweetAlert
                warning
                show={this.state.showLoginAlert}
                confirmBtnBsStyle="info"
                title="Phone Number is Used already."
                onConfirm={() => this.setState({ ...this.initState })}
                onCancel={() => this.setState({ showLoginAlert: false })}
                >
                    Your Number is already used. Please change your number or go to our <a href="https://support.hospitallcare.com/admin">Login page</a> to Sign In
            </SweetAlert>
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
        signUp: (params) => actions.doctorSignUp(params),
        create: (params) => actions.doctorSignUp(params),
        sendCode: (params) => actions.codeVarification(params)

	};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JoinDoctor);