import React, {Component} from "react";
import { Link,Redirect } from "react-router-dom";
import * as actions from "../../Store/Actions/DoctorAuthAction";
import PhoneModal from "./forget-password";
import alertify from "alertifyjs";
import { connect } from "react-redux";
import SweetAlert from 'react-bootstrap-sweetalert';
import {Helmet} from "react-helmet";
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
alertify.set('notifier', 'position', 'top-center');

class DoctorSignIn extends Component{
	initState = {
        phone			: 	'',
        password		: 	'',
		processing		: 	false,
        showLoginAlert	:	false,
        showSignUpAlert	:	false,
        show        	: 	false
	};
	state = {
		...this.initState,

		
	};
	onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
	};

	signIn = () => {

        this.setState({
            processing: true
        });
        const {signIn,errorHandler } = this.props;

        const { phone, password } 	=	this.state;
        let params = { phone, password};
        signIn(params).then(res => {


			if(res.data.doctor_signUp){
				this.setState({
					showSignUpAlert:true,
				});
				// this.props.history.push('/join-doctor');
			} else if(res.data.doctor_panel){
				this.setState({
					showLoginAlert:true,
				});
				// window.location.assign('https://support.hospitallcare.com/login');
			} else if(res.data.create_doctor_password){
				this.setState({
					show:true,
				});

			}else if(res.data.invalid_data){
				alertify.success("Please Enter a Valid Number");
				
			}
        }).catch(errorHandler).finally(() => {
            this.setState({
                processing: false
            });
        });

	};

	renderForgetPasswordModal = () => {
		return <PhoneModal {...this.props}/>;
    };
    render(){
		const {phone , processing} = this.state;
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
    				<meta name="description" content="Login as a Doctor | Get Onboard | Get Doctor Dashboard | Get our DoctorALL app" />
    				<meta name="author" content="Hospitall Care" />
					<title>Login as a Doctor | Get Onboard | Get Doctor Dashboard | Get our DoctorALL app</title>
					<link rel="canonical" href="https://hospitallcare.com" />
            	</Helmet>
				<main>
					<div className="bg_color_2">
						<div className="container margin_60_35">
							<div id="login-2">
								<h1>Login as a Doctor</h1>
									<div className="box_form clearfix">
										<div className="row">
											<div className="col-2"></div>
											<div className="col-8">
											<div className="form-group">
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
											{/* <div className="form-group">
												<label>Password</label>
												<input type="password" className="form-control" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.onChange}required/>
											</div> */}
											<div className="form-group">
												<div className="row">
													<div className="col-12 col-sm-6 text-center mb-1">
														<button color="primary" className='btn_1' onClick={this.signIn}>{(processing) ? "Updating..." : " Continue"}</button>{' '}
													</div>
													<div className="col-12 col-sm-6 text-center">
														{this.renderForgetPasswordModal()}
													</div>
												</div>
											</div>
										</div>
										<div className="col-2"></div>
									</div>						
								</div>
								<p className="text-center link_bright">Do not have an account yet? <Link to="/join-doctor"><strong>Register now!</strong></Link></p>
							</div>
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
                    We have sent a URL on your Phone for Password Creation. Please follow that URL.
                </SweetAlert>
				<SweetAlert
					warning
					show={this.state.showLoginAlert}
					confirmBtnBsStyle="info"
					title="Your Phone number is in our System"
					onConfirm={() => this.setState({ ...this.initState })}
					onCancel={() => this.setState({ showLoginAlert: false })}
					>
						Please follow the <a href="https://support.hospitallcare.com/admin">link</a> to Sign In. Thanks
				</SweetAlert>
				<SweetAlert
					warning
					show={this.state.showSignUpAlert}
					confirmBtnBsStyle="info"
					title="Phone Number is not in our System"
					onConfirm={() => this.setState({ ...this.initState })}
					onCancel={() => this.setState({ showSignUpAlert: false })}
					>
						Please recheck your phone number or go to our <Link to="/join-doctor">Sign Up page</Link> to Join Us.
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
        signIn: (params) => actions.doctorSignIn(params),

	};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DoctorSignIn);