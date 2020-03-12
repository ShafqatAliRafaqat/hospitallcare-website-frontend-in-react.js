import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import List from './../Doctor/list';
import * as actions from "../../Store/Actions/CenterAction";
import { getSearchUrlFromState } from '../../util/functions'
import * as qs from 'query-string';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import SearchPages from '../Search/search_pages';
import BottomFaq from './../FAQ/bottom-faq';
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

class Detail extends Component{
	initState = {
		nearest_doctor	: '',
		male			: false,
		female			: false,
		consultation_fee: '',
		available		: '',
        available_today	: false,		
        available_any_day:false,
        available_on_weekend:false,
	}
    state = {
		...this.initState,
		isLoading		: true,
		center_data		: '',
		current_page	: 0,
		last_page		: 0,
		per_page		: 0,
		treatment_data	:'',
		center_treatments	:'',
		nearest_clinics	: '',
		activePage		:0,
		treatments		: '',
		centerId		:'',
		center_doctor	:'',
		latitude		:'',
		longitude		:'',
		isOpenDoctor	: false,
		isOpenCenter	: false,
	};
	componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
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
        	this.fetchCenter(search);
        }
    }
	componentWillMount() {
		let search = this.props.location.search;
		window.scrollTo(0, 0);
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
        this.fetchCenter(search);
	}
	filterChecked =e =>{
		
        this.setState({
            [e.target.name]: e.target.checked
        }, () => {
            this.fetchCenter();
        });
	};
	onChange =e =>{
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.fetchCenter();
        });
	};
	fetchCenter = (search) => {

		this.setState({
			isLoading: true
		});
		let { fetchCenter, dispatch, errorHandler, alertify} = this.props;
		let centerId = this.props.match.params.centerId;
		const {male, female, available_today, available_any_day, available_on_weekend, consultation_fee, nearest_doctor, available, latitude ,longitude} =	this.state;  
        let data = {male, female,centerId, available_today, available_any_day, available_on_weekend, consultation_fee, nearest_doctor, available, latitude,longitude }; 

		fetchCenter(search,data).then(res => {
			this.setState({
				center_data			: res.data.meta.center,
				center_treatments	: res.data.meta.center_treatments,
				nearest_clinics		: res.data.meta.nearest_clinics,
				center_doctor 		: res.data.data,
				current_page 		: res.data.meta.current_page,
                last_page			: res.data.meta.last_page,
                to					: res.data.meta.to,
                per_page			: res.data.meta.per_page,
                total				: res.data.meta.total,
			});
			if(res.data.data.length == 0){
				alertify.error("There is no doctor");
			}
			window.scrollTo(0, 0);
			if(res.data.meta.total == 0){
				alertify.error("There is no doctor");
			}
			dispatch({
				type: actions.FETCH_CENTERS,
				payload: res.data.data
			});
		}).catch(errorHandler).finally(() => {
			this.setState({
				isLoading: false
			});
		});
	};

	handlePageChange = (pageNumber) => {
		this.setState({activePage: pageNumber});
		let search = getSearchUrlFromState(this.state);
		this.fetchCenter(search + "page=" + 	pageNumber , actions.FETCH_CENTERS);
	}
	SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};

    ListOfDoctors = () => {
        if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { center_doctor } = this.state;
		return	<List {...this.props} doctor_data={center_doctor} />
	}
	renderPagination =()=>{
		const { total } = this.state;
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		return(
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
		);
	}

	toggleDoctors = () => {
		this.setState({ isOpenDoctor: !this.state.isOpenDoctor });
	}
	  
	getRenderedDoctors() {
		const MAX_ITEMS = 40;
		const { center_treatments } 	=	this.state;

		if (this.state.isOpenDoctor) {
			return center_treatments;
		}
		return center_treatments.slice(0, MAX_ITEMS);
	}
	  
	centerTreatments = () => {
		var slugify = require('slugify');
		const { center_treatments,center_data } 	=	this.state;
		if (center_treatments.length < 1) {
			return(
				<div className="pb-5"></div>
			);
		} else {
			return(
				<div className="container margin_25">
				<h6 className="h6-brief-intro">Treatments done in {center_data.name} </h6>
				<div className="row pb-2">
					<div className="col">
					{(center_treatments)?
						this.getRenderedDoctors().map(m =><Link to={{ pathname:`/treatment-detail/${slugify(m.name)}/${m.id}`, state: { center_id : center_data.id }}} className="m-1 text-sm btn btn-outline-midgray btn-sm mb-1 mr-1 white-space-normal">{m.name}</Link>)
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
	}

	toggleCenters = () => {
		this.setState({ isOpenCenter: !this.state.isOpenCenter });
	  }
	  
	getRenderedCenters() {
	const MAX_CENTERS = 40;
	const { nearest_clinics } 	=	this.state;

	if (this.state.isOpenCenter) {
		return nearest_clinics;
	}
	return nearest_clinics.slice(0, MAX_CENTERS);
	}

	nearestClinics = () => {
		var slugify = require('slugify');
		const { nearest_clinics,center_data } 	=	this.state;
		if (nearest_clinics.length < 1) {
			return(
				<div className="pb-5"></div>
			);
		} else {
			return(
				<div className="container margin_25">
				<h6 className="h6-brief-intro">Clinics/Centers near {center_data.name}</h6>
				<div className="row pb-2">
					<div className="col">
					{(nearest_clinics)?
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
	}
    CenterProfile = () => {
		// if (this.state.isLoading) {
        //     return (<div data-loader="circle-side"></div>);
        // }
		const { center_data,total } = this.state;
		return (
            <aside className="col-xl-3 col-lg-4" id="sidebar">
				<div className="box_profile">
					<figure>
						{ (center_data.picture) ? <img src={center_data.picture} alt={center_data.name} className="img-fluid" /> : <img src="http://via..com/565x565.jpg" alt={center_data.name} className="img-fluid" />}
					</figure>
					<small>{center_data.focus_area}</small>
					<h1>{center_data.name}</h1>
					<span className="rating">
						<i className="icon_star voted"></i>
						<i className="icon_star voted"></i>
						<i className="icon_star voted"></i>
						<i className="icon_star voted"></i>
						<i className="icon_star"></i>
						<small>(145)</small>
						<a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"> 
                            <img src="img/badges/badge_1.svg" width="15" height="15" alt="" />
                        </a>
					</span>
					<ul className="statistic">
						<li>{total} Doctor</li>
						<li>{(center_data)?center_data.treatments.length:""} Treatment</li>
					</ul>
					<ul className="contacts">
						<li><h6>Address</h6>{center_data.address}</li>
						<li><h6>Phone</h6>{center_data.assistant_phone}</li>
					</ul>
					<div className="text-center">
						<a href={center_data.map}  className="btn_1 outline" target="_blank">
							<i className="icon_pin"></i> View on map
						</a>
					</div>
				</div>
				<div className="box_profile">
				 		<div className="row">
						 	<div className="col-12 mt-3 pt-2 text-left css-col-bottom">
								 <h1 style={{color:"#fff"}}>
									Filters
								 </h1>
							</div>
							<div className="col-12 mt-3 text-left">
								<div className="custom-control custom-checkbox custom-control-inline bg-white  pr-3">					
									<input type="checkbox" id="maledoc" name="male" onChange={ this.filterChecked } className="custom-control-input"/>
									<label className="custom-control-label" for="maledoc">Male doctor</label>
								</div>
							</div>
							<div className="col-12 mt-3 mb-2 text-left">
								<div className="custom-control custom-checkbox custom-control-inline bg-white pr-3  mr-0">
									<input type="checkbox" id="femaledoc" name="female" onChange={ this.filterChecked } className="custom-control-input" />
									<label className="custom-control-label" for="femaledoc">Female doctor</label>
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
        );
	};
	render(){
		const { page,totalPages,total,to,center_data,center_treatments } = this.state;
		var slugify = require('slugify');
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
		}
		const {name} = center_data;
		var meta_description = "Book an Appointment with our Best doctors in "+name+" | List of top doctors in "+name+" - Book an appointment with top doctors";
		
			return(
                <>
					<Helmet>
						<meta charSet="utf-8" />
						<meta http-equiv="X-UA-Compatible" content="IE=edge" />
						<meta name="keywords" content={center_treatments.map(m=>m.name)}></meta>
						<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
						<meta name="description" content= {meta_description}/>
						<meta name="author" content="Hospitall Care" />
						<title>Book an Appointment with our Best doctors in {center_data.name} | Top Doctors In {center_data.name} - Book an appointment with top doctors of {center_data.name}</title>
						<Link to={{pathname:`/center-detail/${slugify(center_data.name)}/${center_data.id}`}}></Link>
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
												<li><Link to="/clinic-list">Hospitals</Link></li>
												 	{(center_data.city_name)?<li><Link to="#">Hospitals in {center_data.city_name}</Link></li>:''}												
												<li><Link>Top Doctors Of {center_data.name}</Link></li>
											</ul>
										</div>
									</div>
								</div>
									{this.SearchPages()}
								</div>
							</div>
						</div>
						<div className="container pagination_details text-right"><span><strong>Showing {to}</strong> of {total} results</span></div>
						<div className="container margin_25">
							<div className="row">
								{this.CenterProfile()}
								<div className="col-xl-9 col-lg-8">
									<div className="row">
										{this.ListOfDoctors()}
									</div>
									{this.renderPagination()}
									
								</div>
							</div>
						</div>
						{this.centerTreatments()}
						{/* <BottomFaq/> */}
						{this.nearestClinics()}
					</main>
                </>
			);
		}
	}

const mapStateToProps = state => {
	return {
		centers: state.CenterReducers.centers,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		dispatch: dispatch,
		fetchCenter: (search,data) => actions.fetchCenter(search,data),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);