import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/DoctorAction";
import { getSearchUrlFromState } from '../../util/functions'
import * as qs from 'query-string';
import List from './list';
import BottomFaq from './../FAQ/bottom-faq';
// import BottomTopSpecialization from './../Specialization/bottom-top-specializations';
import alertify from 'alertifyjs';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import SearchPages from '../Search/search_pages';
import Pagination from "react-js-pagination";
import {Helmet} from "react-helmet";

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
class DoctorList extends Component{
	initState = {
		nearest_doctor		: '',
		specializations		: '',
		male				: false,
		female				: false,
		consultation_fee	: '',
		available			: '',
        available_today		: false,		
        available_any_day 	:false,
        available_on_weekend:false,
	}
	state = {
		...this.initState,
		isLoading		: true,
		radio			: 2,
		page			: 0,
		location		: null,
		totalPages		: 0,
		doctor_data		: '',
		latitude		: '',
		longitude		: '',
		current_page	: 0,
		last_page		: 0,
		per_page		: 0,
		activePage		:0,   
	};

    componentDidMount() {
		window.scrollTo(0, 0);
		let search = this.props.location.search;
        const params = qs.parse(search);
        for (let key in params) {
            this.setState({
                [key]: params[key]
            });
		}
		navigator.geolocation.getCurrentPosition(
			(position) => {
			  this.setState({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				error: null,
			  });
			},
			(error) => this.setState({ error: error.message }),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
		  );
		  navigator.geolocation.watchPosition(
			(position) => {
			  this.setState({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				error: null,
			  });
			}
		  );
        this.getDoctors(search);
	}

	SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};

	filterChecked =e =>{
		
        this.setState({
            [e.target.name]: e.target.checked
        }, () => {
            this.getDoctors();
        });
	};
	
	onChange =e =>{
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.getDoctors();
        });
	};
	
    getDoctors = (search) => {

        this.setState({
            isLoading: true,
		});
		let { getDoctors, dispatch, errorHandler } = this.props;

		const { male, female, available_today, available_any_day, available_on_weekend, consultation_fee, nearest_doctor, available, latitude ,longitude} =	this.state;  
        let data = { male, female, available_today, available_any_day, available_on_weekend, consultation_fee, nearest_doctor, available, latitude,longitude }; 
		
	    getDoctors(search,data).then(res => {
            this.setState({
				doctor_data	: res.data.data,
				specializations	: res.data.meta.specializations,
				current_page: res.data.meta.current_page,
                last_page	: res.data.meta.last_page,
                to			: res.data.meta.to,
                per_page	: res.data.meta.per_page,
                total		: res.data.meta.total,
			});
			if(res.data.meta.total ==0){
				alertify.error("There is no doctor");
			}
			window.scrollTo(0, 0);
            dispatch({
                type: actions.GET_ALL_DOCTORS,
                payload: res.data.data
            }); 
        }).catch(errorHandler).finally(() => {
            this.setState({
                isLoading: false
            });
        });
	};
	
	ListOfDoctors = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { doctor_data } = this.state;
		return	<List {...this.props} doctor_data={doctor_data} />
	};
	
	renderDoctorFilter = () => {
		return	(
			<>
				<aside className="col-xl-3 col-lg-4 doctor-filters" id="sidebar">
				 	<div className="box_profile">
				 		<div className="row">
						 	<div className="col-12 mt-3 pt-2 text-left css-col-bottom">
								 <h1 style={{color:"#fff"}}>
									Filters
								 </h1>
							</div>
							<div className="col-12 mt-3 text-left">
								<div className="custom-control custom-checkbox custom-control-inline bg-white  pr-3">					
									<input type="checkbox" id="maledoc1" name="male" onChange={ this.filterChecked } className="custom-control-input"/>
									<label className="custom-control-label" for="maledoc1">Male doctor</label>
								</div>
							</div>
							<div className="col-12 mt-3 mb-2 text-left">
								<div className="custom-control custom-checkbox custom-control-inline bg-white pr-3  mr-0">
									<input type="checkbox" id="femaledoc1" name="female" onChange={ this.filterChecked } className="custom-control-input" />
									<label className="custom-control-label" for="femaledoc1">Female doctor</label>
								</div>
							</div>
						</div>

						<div className="row css-col-top">
						 	<div className="col-12 pt-2 text-left css-col-bottom">
								 <h1 style={{color:"#fff"}}>
									Availability
								 </h1>
							</div>
							<div className="col-12 mt-3 mb-3 text-left">
								<div className="custom-checkbox custom-control-inline bg-white  pr-3 ">
									<FormControl component="fieldset" className="custom-control">
										<RadioGroup aria-label="consultation_fee" name="available" onChange={this.onChange}>
											<FormControlLabel value="0" control={<StyledRadio />} label="Any Day" />
											<FormControlLabel value="1" control={<StyledRadio />} label="Today" />
											<FormControlLabel value="2" control={<StyledRadio />} label="Weekends" />
										</RadioGroup>
									</FormControl>
								</div>
							</div>
						</div>
						<div className="row css-col-top">
						 	<div className="col-12 pt-2 text-left css-col-bottom">
								 <h1 style={{color:"#fff"}}>
								 	Consultation Fee
								 </h1>
							</div>
							<div className="col-12 mt-3 text-left">
								<div className="custom-checkbox custom-control-inline bg-white  pr-3 ">
									<FormControl component="fieldset" className="custom-control">
										<RadioGroup aria-label="consultation_fee" name="consultation_fee" onChange={this.onChange}>
											<FormControlLabel value="0-100000" control={<StyledRadio />} label="All" />
											<FormControlLabel value="0-1000" control={<StyledRadio />} label="1-1000" />
											<FormControlLabel value="1001-3000" control={<StyledRadio />} label="1000-3000" />
											<FormControlLabel value="3001-100000" control={<StyledRadio />} label="3000+" />
										</RadioGroup>
									</FormControl>
								</div>
							</div>
						</div>
						<div className="row css-col-top">
						 	<div className="col-12 pt-2 text-left css-col-bottom">
								 <h1 style={{color:"#fff"}}>
								 	Nearest Doctors
								 </h1>
							</div>
							<div className="col-12 mt-3 text-left">
								<div className="custom-checkbox custom-control-inline bg-white  pr-3 ">
									<FormControl component="fieldset" className="custom-control">
										<RadioGroup aria-label="nearest_doctor" name="nearest_doctor" onChange={this.onChange}>
											<FormControlLabel value="0-10000" control={<StyledRadio />} label="All" />
											<FormControlLabel value="1-10" control={<StyledRadio />} label="1-10 Km" />
											<FormControlLabel value="11-20" control={<StyledRadio />} label="11-20 Km" />
											<FormControlLabel value="21-10000" control={<StyledRadio />} label="20+" />
										</RadioGroup>
									</FormControl>
								</div>
							</div>
						</div>
					</div>
				</aside>	
			</>
		);
	};

	BottomSpecialization = () => {
		const {specializations } = this.state;
		var slugify = require('slugify');

		if(specializations){
			if (specializations.length < 1) {
				return(
					<div className="pb-5"></div>
				);
			}
		}
		return(
			<div className="container margin_25">
			<h6 className="h6-brief-intro">Top Specializations</h6>
			<div className="row">
				<div className="col">
				{(specializations)?
					specializations.map(m =><Link to={{ pathname:`/treatment-detail/${slugify(m.name)}/${m.id}` }} className="m-1 text-sm btn btn-outline-midgray btn-sm mb-1 mr-1 white-space-normal">{m.name}</Link>)
				:
				''
				}
				</div>
			</div>
		</div>
		);
	}
	handlePageChange = (pageNumber) => {
		this.setState({activePage: pageNumber});
		let search = getSearchUrlFromState(this.state);
		this.getDoctors(search + "page=" + 	pageNumber , actions.GET_ALL_DOCTORS);
	}
	renderRefreshPage = (e)=>{
		this.props.history.push(e.target.name);
            window.location.reload();
    }
    render(){
		let { to,total ,specializations} = this.state;
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
        return(
            <>
				<Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="keywords" content={specializations.map(m=>m.name)}></meta>
					
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    				<meta name="description" content="List of top doctors in pakistan- Book an appointment with top doctors - Get your digital records" />
    				<meta name="author" content="Hospitall Care" />
					<title>Top Doctors In Pakistan - Book an appointment with top doctors - Get your digital records</title>
					<Link to='/doctor-list'></Link>
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
												<li>Find a Doctor</li>
												<li>Best Doctors in Lahore</li>
											</ul>
										</div>
									</div>
								</div>
								{this.SearchPages()}
							</div>
						</div>
					</div>
					<div className="filters_listing">
						<div className="container">
							<ul className="clearfix">
								<li>
									<h6>Type</h6>
									<div className="switch-field">
										
										<Link to="doctor-list" className=" filter-button-style-label-active" name="/doctor-list" onClick={this.renderRefreshPage} >
											Doctors
										</Link>
										<Link to="specialization-list" className="filter-button-style-label ml-1" name="/specialization-list" >
										 	Specialization
										</Link>
										<Link to="clinic-list" className="filter-button-style-label ml-1" name="/clinic-list">
											Clinics
										</Link>
										
									</div>
								</li>
								<li className="pt-3">
								<span><strong>Showing {to}</strong> of {total} results</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="container margin_0_35">
						<div className="row">	
							{this.renderDoctorFilter()}
							<div className="col-xl-9 col-lg-8">
								<div className="row">
									{this.ListOfDoctors()}
								</div>
							</div>
						</div>
						<div className="row">
							<div className="text-center col-12">
								{(total != 0)?	<Pagination
									prevPageText='<'
									nextPageText='>'
									firstPageText='<<'
									lastPageText='>>'
									pageRangeDisplayed={4}
									activePage={this.state.current_page}
									itemsCountPerPage={this.state.per_page}
									totalItemsCount={this.state.total}
									onChange={this.handlePageChange}
									/>
									:<div className="text-center  col-12">There is no data</div>
								}
							</div>
						</div>
					</div>
					{/* <BottomFaq/> */}
					{this.BottomSpecialization()}
					<div className="pb-5"></div>
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
        getDoctors: (search,data) => actions.getAllDoctors(search,data),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(DoctorList);