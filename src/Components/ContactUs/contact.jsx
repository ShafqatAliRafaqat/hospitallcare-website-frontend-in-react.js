import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/AuthAction";
import {Helmet} from "react-helmet";

class ContactUs extends Component {
	initState = {
		processing:false,
		name:'',
		phone:'',
		email:'',
		message:'',
	};
	state = {
		...this.initState,
	};
    componentDidMount(){
        window.scrollTo(0, 0);
    }
	onChange = e => {
		this.setState({
			[e.target.name] 	:	e.target.value
		});
	}
	create = () => {
		this.setState({
			processing: true,
		});
        const {create,errorHandler,alertify} 		= 	this.props;

        const {name,email,phone,message} 	=	this.state;
		if (name == '') {
			alertify.error('Please fill out Name field');
		} else if( phone == ''){
			alertify.error('Please fill out Phone fields');
		} else if( email == ''){
			alertify.error('Please fill out Email fields');
		} else if( message == ''){
			alertify.error('Please fill out Message fields');
		} else if(!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)){
			alertify.error('Please enter a Valid Email');
		} else {
			let params = { name,email,phone,message};
			create(params).then(res=>{
			alertify.success(res.data.message);
			this.setState({
				...this.initState,
			});

			}).catch(errorHandler).finally(() => {
				this.setState({
					processing: false
				});
			});	
		}
	}

	render() {
		const {name,email,phone,message} 	=	this.state;
			if(window.location.href == "https://www.hospitallcare.com/contacts") {
				window.location = window.location.href + '/';
				window.location.reload();
			}
		return (
			<>
				<Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="keywords" content="contact us,about us,hospitall,careALL, privacy policy, terms and conditions"></meta>
					
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    				<meta name="description" content="Contact us : +92-3222555600 Monday to Friday 9am - 6pm | Address: NETSOL Avenue, Main Ghazi Rd, Khuda Buksh Colony, Lahore, Pakistan | Contact info- Book an appointment with top doctors Book an Appointment| Call us now +92-322-2555600 +92-322-2555400" />
    				<meta name="author" content="Hospitall Care" />
					<title>Contact us : +92-3222555600 Monday to Friday 9am - 6pm | Address: NETSOL Avenue, Main Ghazi Rd, Khuda Buksh Colony, Lahore, Pakistan | Contact info- Book an appointment with top doctors Book an Appointment| Call us now +92-322-2555600 +92-322-2555400</title>
					<link rel="canonical" href="https://hospitallcare.com" />
            	</Helmet>
				<main>

					<div className="container margin_60_35">
						<div className="row">
							<aside className="col-lg-3 col-md-4">
								<div id="contact_info">
									<h3>Contact info</h3>
									<p>
										NETSOL Avenue, Main Ghazi Rd, Khuda Buksh Colony, Lahore, Pakistan
										{/* <br /> + 61 (2) 8093 3400<br /> */}
										<br></br>
										<a href="mailto:hello@hospitall.com">hello@hospitallcare.com</a>
									</p>
									<ul>
										<li><strong>Book an Appointment</strong>
											<a href="tel://+923222555600">+92-322-2555600</a><br />
											<a href="tel://+923222555400">+92-322-2555400</a><br />
											<small>24/7</small>
										</li>
										<li><strong>General questions</strong>
											<a href="tel://+923222555600">+92-322-2555600</a><br />
											{/* <Link to="tel://003823932342">questions@findoctor.com</Link> */}
											{/* <br /> */}
											<p><small>Monday to Friday 9am - 6pm</small></p>
										</li>
									</ul>
								</div>
							</aside>
							<div className=" col-lg-8 col-md-8 ml-auto">
								<div className="box_general">
									<h3>Contact us</h3>
									<p>
										We appreciate your Feedbacks. Drop it here.
									</p>
									<div>
										<div id="message-contact"></div>
											<div className="row">
												<div className="col-md-6 col-sm-6">
													<div className="form-group">
														<input 
															type="text" 
															className="form-control" 
															id="name" 
															name="name" 
															placeholder="Name" 
															onChange={ this.onChange}
															value={name}
														/>
													</div>
												</div>
												<div className="col-md-6 col-sm-6">
													<div className="form-group">
														<input 
															type="number" 
															id="phone" 
															name="phone" 
															className="form-control" 
															placeholder="Phone number" 
															onChange={ this.onChange}
															value={phone}
														/>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-12 col-sm-6">
													<div className="form-group">
														<input 
															type="email" 
															id="email" 
															name="email" 
															className="form-control" 
															placeholder="Email" 
															onChange={ this.onChange}
															value={email}required
														/>
													</div>
												</div>

											</div>
											<div className="row">
												<div className="col-md-12">
													<div className="form-group">
														<textarea 
															rows="5" 
															id="message"
															name="message" 
															className="form-control" 
															style={{ height: "100px" }} 
															placeholder="Message"
															onChange={ this.onChange}
															value={message}
															>
														</textarea>
													</div>
												</div>
											</div>
											<input type="submit" value="Submit" onClick={this.create} className="btn_1 add_top_20" id="submit-contact" />
									</div>
									{/* <!-- /col --> */}
								</div>
							</div>
							{/* <!-- /col --> */}
						</div>
						{/* <!-- End row --> */}
					</div>
					{/* <!-- /container --> */}
					<div id="map_contact">
						<div className="pac-card display-none" id="pac-card">
							<div>
								<div id="title">
									Autocomplete search
			</div>
								<div id="type-selector" className="pac-controls">
									<input type="radio" name="type" id="changetype-all" checked="checked" />
									<label for="changetype-all">All</label>

									<input type="radio" name="type" id="changetype-establishment" />
									<label for="changetype-establishment">Establishments</label>

									<input type="radio" name="type" id="changetype-address" />
									<label for="changetype-address">Addresses</label>

									<input type="radio" name="type" id="changetype-geocode" />
									<label for="changetype-geocode">Geocodes</label>
								</div>
								<div id="strict-bounds-selector" className="pac-controls">
									<input type="checkbox" id="use-strict-bounds" value="" />
									<label for="use-strict-bounds">Strict Bounds</label>
								</div>
							</div>
							<div id="pac-container">
								<input id="pac-input" type="text" placeholder="Enter a location" />
							</div>
						</div>
						<div id="map"></div>
						<div id="infowindow-content">
							<img src="" width="16" height="16" id="place-icon" />
							<span id="place-name" className="title">Netsol Technologies</span><br />
							<span id="place-address"></span>
						</div>
					</div>
					{/* <!-- /map --> */}
				</main>
				{/* <!-- /main --> */}
			</>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		dispatch: dispatch,
        create: (params) => actions.sendFeedback(params),
	};
};
export default connect(mapDispatchToProps)(ContactUs);