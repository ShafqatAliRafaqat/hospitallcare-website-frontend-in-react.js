import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/DoctorAction";
import * as appointmentactions from "../../Store/Actions/AppointmentAction";
import AppointmentForm from "../Booking/appointment-form";
import DoctorFaq from './../FAQ/doctor-faq';
import SearchPages from '../Search/search_pages';
import {Helmet} from "react-helmet";

class GeneralInfo extends Component {

	initState = {
        name	: "",
	};
	
	state = {
		// ...this.props.match.params.doctorId,
		isLoading		: true,
		isOpenDoctor	: false,
		isOpenCenter	: false,
		callNowStyle	: 'none',
		callNowButtoneStyle	: '',
		doctor_data		: '',
		qualification	: '',
		certification	: '',
		schedules		: '',
		specialization	: '',
		specialization_id: '',
		related_doctors	: '',
		related_centers : '',
		doctorId		: '',
		all_treatments	: '',
		...this.initState,
	};
	componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
        	this.getData();
        }
    }
	componentDidMount() {
		window.scrollTo(0, 0);
		this.getData()
	}
	getData = () => {

		this.setState({
			isLoading: true
		});
		let { fetchDoctor, dispatch, errorHandler,user } = this.props;
		var id = (user)? user.customer.id:'';
		let data = {id};
		let doctorId = this.props.match.params.doctorId;
		fetchDoctor(doctorId,data).then(res => {
			this.setState({
				doctor_data		: res.data.data,
				qualification	: res.data.meta.doctor_qualification,
				certification	: res.data.meta.doctor_certification,
				schedules		: res.data.meta.doctor_schedules,
				specialization_id: res.data.meta.specialization_id,
				specialization	: res.data.meta.specialization,
				all_treatments	: res.data.meta.all_treatments,
				related_doctors	: res.data.meta.related_doctors,
				related_centers	: res.data.meta.related_centers,
			});
			dispatch({
				type: actions.FETCH_DOCTOR,
				payload: res.data.data
			});
		}).catch(errorHandler).finally(() => {
			this.setState({
				isLoading: false
			});
		});
	};
	SearchPages = () => {
		return	<SearchPages {...this.props  } />		
	};

	DoctorFaq = () => {
		return <DoctorFaq {...this.props  } doctor_data = {this.state.doctor_data} schedules = {this.state.schedules} />
	}	
	DoctorProfile = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { doctor_data, callNowStyle, callNowButtoneStyle } = this.state;
		return (
			<div className="profile">
				<div className="row">
					<div className="col-lg-5 col-md-4">
						<figure>
							{(doctor_data.picture) ? <img src={doctor_data.picture} alt={doctor_data.first_name} className="img-fluid doctor_profile_img" /> 
							:
							(doctor_data.gender == "Male")?
                            <img src="web_imgs/Male.png" alt={doctor_data.first_name} className="img-fluid" />
                            :
                            <img src="web_imgs/Female.png" alt={doctor_data.first_name} className="img-fluid" /> 
							}
						</figure>
					</div>
					<div className="col-lg-7 col-md-8">
						<small>{doctor_data.focus_area}</small>
						<div className="doctor-name-ok">
						<h1 >{doctor_data.first_name} {doctor_data.last_name} 
						{(doctor_data.partnership == 1)?<span data-tooltip="Verified and Onboard" data-tooltip-location="right"><i className="icon-ok-circled text-success" style={{fontSize: '18px'}}></i></span>:''}</h1>
						</div>
						<span className="rating">
							<i className="icon_star voted"></i>
							<i className="icon_star voted"></i>
							<i className="icon_star voted"></i>
							<i className="icon_star voted"></i>
							<i className="icon_star"></i>
							<small>(145)</small>
							<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1">
								<img src="img/badges/badge_1.svg" width="15" height="15" alt="" />
							</a>
						</span>
						<ul className="statistic">
							<li>854 Views</li>
							<li>124 Patients</li>
						</ul>
						<ul className="col pl-0 font-weight-bold mb-0 text-sm">
							<li><span style={{color: "#21a747"}}>{(doctor_data.gender == 'Male')? <i className="icon-male"></i> : <i className="icon-female"></i>}{doctor_data.gender}</span></li>
						</ul>
						<ul className="contacts">
							<li>
								<h6 style={{color: "#21a747"}}><i className="icon-clock-6"></i> Experience</h6>
								<span className="ml-4">{doctor_data.experience}</span>
							</li>
							<li>
								<h6 style={{color: "#21a747"}}><i className="icon-address"></i> Address</h6>
								<span className="ml-4">{doctor_data.address}</span>
								<br/>
								<a href={doctor_data.map} target="_blank" ><strong className="mt-2"><i className="icon-direction"></i> View on map</strong></a>
							</li>
							<li>
								<button className="btn_1 CallNowButtonClass" onClick={ () => this.setState({ callNowButtoneStyle:"none", callNowStyle:""})} style={{display:callNowButtoneStyle}}> 
									Call Now
								</button>
								<a href="tel://+923222555600" style={{display:callNowStyle}}><i className="icon-phone-squared"></i> +92-322-2555600</a><br />
								<a href="tel://+923222555400" style={{display:callNowStyle}}><i className="icon-phone-squared"></i>+92-322-2555400</a><br />
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	};
	DoctorSpecialization = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
		}
		var slugify = require('slugify');
		const { specialization,specialization_id } = this.state;
		const counts = specialization.length;
		if (counts > 0) {
			return specialization.map((m,i) => {
				return (
					<div className="col-lg-6">
						<ul className="bullets">
							<li className="inline"><Link to={{ pathname: `/treatment-detail/${slugify(m)}/${specialization_id[i]}`}}><h6>{m}</h6></Link></li>
						</ul>
					</div>
				);
			});
		} else {
			return (
				<div className="col-lg-6">
					<ul className="list_edu">
						<li>Not Updated Yet</li>
					</ul>
				</div>
			);
		}
	}
	DoctorTreatments = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { all_treatments } = this.state;
		const counts = all_treatments.length;
		if (counts > 0) {
			return all_treatments.map(m => {
				return (
					<div className="col-lg-6">
						<ul className="bullets">
							<li className="text-xs text-truncate">{m}</li>
						</ul>
					</div>
				);
			});
		} else {
			return (
				<div className="col-lg-6">
					<ul className="list_edu">
						<li>Not Updated Yet</li>
					</ul>
				</div>
			);
		}
	}
	Curriculum = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { qualification } = this.state;
		const count = qualification.length;
		if (count > 0) {
			return qualification.map(m => {
				return (
					<ul className="list_edu">
						<li>
							<strong>{m.university}</strong> - {m.degree}
						</li>
					</ul>
				);
			});
		} else {
			return (
				<ul className="list_edu">
					<li>Not Updated Yet</li>
				</ul>
			);
		}
	}

	renderBookingCard = () => {
		if (this.state.isLoading ) {
            return (<div data-loader="circle-side"></div>);
        }
		const { all_treatments, doctor_data, schedules } 	= this.state;
		return<AppointmentForm {...this.props} doctor_data = {doctor_data} all_treatments={all_treatments} schedules ={schedules}/>;
	}
	toggleDoctors = () => {
		this.setState({ isOpenDoctor: !this.state.isOpenDoctor });
	  }
	  
	  getRenderedDoctors() {
		const MAX_ITEMS = 40;
		const {related_doctors} =	this.state;

		if (this.state.isOpenDoctor) {
		  return related_doctors;
		}
		return related_doctors.slice(0, MAX_ITEMS);
	  }
	
	relatedDoctors = () => {
		const {related_doctors} =	this.state;
		var slugify = require('slugify');

		if(related_doctors){
			if (related_doctors.length < 1) {
				return(
					<div className="pb-5"></div>
				);
			}
		}
		
		return(
			<div className="container margin_25_padding_0">
			<h6 className="h6-brief-intro">Nearest &amp; Related Doctors</h6>
			<div className="row pb-2">
				<div className="col">
				{(related_doctors)?
					this.getRenderedDoctors().map(m =><Link to={{ pathname:`/doctor-detail/${slugify(m.name)}/${m.id}` }} className="m-1 text-sm btn btn-outline-midgray btn-sm mb-1 mr-1 white-space-normal">{m.name}</Link>)
				:
				''
				}
				</div>
			</div>
			<div className="row text-right">
				<div className="col">
					<a className="a-see-more" onClick={this.toggleDoctors}>
						{this.state.isOpenDoctor ? 'Show Less. . .' : 'Show More. . .'}
					</a>
				</div>
			</div>
		</div>
		);
	}
	toggleCenters = () => {
		this.setState({ isOpenCenter: !this.state.isOpenCenter });
	  }
	  
	getRenderedCenters() {
	const MAX_CENTERS = 40;
	const {related_centers} =	this.state;

	if (this.state.isOpenCenter) {
		return related_centers;
	}
	return related_centers.slice(0, MAX_CENTERS);
	}
	relatedCenters = () => {
		var slugify = require('slugify');
		const {related_centers} =	this.state;
		if(related_centers){
			if (related_centers.length < 1) {
				return(
					<div className="pb-5"></div>
				);
			}
		}
		
		return(
			<div className="container margin_25">
			<h6 className="h6-brief-intro">Nearest Centers</h6>
			<div className="row pb-2">
				<div className="col">
				{(related_centers)?
					this.getRenderedCenters().map(m =><Link to={{ pathname:`/center-detail/${slugify(m.name)}/${m.id}` }} className="m-1 text-sm btn btn-outline-midgray btn-sm mb-1 mr-1 white-space-normal">{m.name}</Link>)
				:
				''
				}
				</div>
			</div>
			<div className="row text-right">
				<div className="col">
					<a className="a-see-more" onClick={this.toggleCenters}>
						{this.state.isOpenCenter ? 'Show Less. . .' : 'Show More. . .'}
					</a>
				</div>
			</div>
		</div>
		);
	}
	render() {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		var slugify = require('slugify');
		const { doctor_data,all_treatments } 		= this.state;
		const {history } 			=	this.props;
		const {first_name} 			=	doctor_data;
		const {focus_area} 			=	doctor_data;
		const {city_name} 			=	doctor_data;
		var meta_description = "Book an appointment with "+first_name+" | "+first_name+" is one of best doctor of "+focus_area+" | "+first_name+" practicing in "+city_name;
		return (
			<>
				<Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="keywords" content={all_treatments.map(m=>m)}></meta>
					
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    				<meta name="description" content={meta_description} />
    				<meta name="author" content="Hospitall Care" />
					<title>{doctor_data.first_name} one of best doctor - Book an appointment with {doctor_data.first_name}</title>
					<Link to={{pathname:`/doctor-detail/${slugify(doctor_data.first_name)}/${doctor_data.id}`}}></Link>
            	</Helmet>
				<main>
				<div id="results">
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<div id="breadcrumb">
										<div className="container">
											<ul>
												<li><Link to="/">Home</Link></li>
												<li><Link to="/doctor-list">Find a Doctor</Link></li>
												{(doctor_data.city_name)?<li><Link to="#">{doctor_data.city_name}</Link></li>:''}
												{(doctor_data.speciality)?<li><Link to={{ pathname: `/treatment-detail/${slugify(doctor_data.speciality)}/${doctor_data.speciality}`}}>{doctor_data.speciality}</Link></li>:''}
												
												<li>{doctor_data.first_name}</li>
											</ul>
										</div>
									</div>
								</div>
								{this.SearchPages()}
							</div>
						</div>
					</div>

					<div className="container margin_60">
						<div className="row">
							<div className="col-xl-7 col-lg-7">
								<nav id="secondary_nav">
									<div className="container">
										<ul className="clearfix" style={{color:'#fff'}}>
											<li>
												General info
											</li>
											<li>
												Booking
											</li>
										</ul>
									</div>
								</nav>
								<div id="section_1">
									<div className="box_general_3">
										{this.DoctorProfile()}
										<hr />
										<div className="indent_title_in">
											<i className="pe-7s-user"></i>
											<h3>Professional statement</h3>
											<p>{doctor_data.focus_area}</p>
										</div>
										<div className="wrapper_indent text-justify">
											<p>{doctor_data.about}</p>
										</div>
										<div className="wrapper_indent">
											<h6>Specializations</h6>
											<div className="row">
												{this.DoctorSpecialization()}
											</div>
										</div>
										<div className="wrapper_indent mt-2">
											<h6>Treatments</h6>
											<div className="row">
												{this.DoctorTreatments()}
											</div>
										</div>
										<hr />
										<div className="indent_title_in">
											<i className="pe-7s-news-paper"></i>
											<h3>Education</h3>
											<p>Highly Educated and Skilled.</p>
										</div>
										<div className="wrapper_indent">
											<h6>Curriculum</h6>
											{this.Curriculum()}
										</div>
									</div>
								</div>
							</div>
							{this.renderBookingCard()}
						</div>
					</div>
					{this.relatedDoctors()}
					{/* {this.DoctorFaq()} */}
					{this.relatedCenters()}

				</main>
			</>
		);
	}
}
const mapStateToProps = state => {
	return {
		doctors: state.DoctorReducer.doctors,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		dispatch: dispatch,
		fetchDoctor: (id,data) => actions.fetchDoctor(id,data),
        create: (params) => appointmentactions.postLeadCrm(params),

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInfo);