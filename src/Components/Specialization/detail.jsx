import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import List from './../Doctor/list';
import BottomFaq from './../FAQ/bottom-faq';
import * as actions from "../../Store/Actions/TreatmentAction";
import { getSearchUrlFromState } from '../../util/functions'
import * as qs from 'query-string';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import {Helmet} from "react-helmet";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import SearchPages from '../Search/search_pages';
import Pagination from "react-js-pagination";


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
		isLoading			: true,
		radio				: 2,
		treatment_data		: '',
		related_treatments	: '',
		related_centers		: '',
		current_page		: 0,
		last_page			: 0,
		per_page			: 0,
		treatments			: '',
		center_id 			: (this.props.location.state)? this.props.location.state : null,
		activePage			: 0,
		treatments			: '',
		centerId			: '',
		latitude			: '',
		longitude			: '',
		doctor_treatment	: '',
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
        	this.fetchTreatment(search);
        }
    }
	componentWillMount() {
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
        this.fetchTreatment(search);
	}
	filterChecked =e =>{
		
        this.setState({
            [e.target.name]: e.target.checked
        }, () => {
            this.fetchTreatment();
        });
	};
	onChange =e =>{
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.fetchTreatment();
        });
	};
	fetchTreatment = (search) => {

		this.setState({
			isLoading: true
		});

		let { fetchTreatment, dispatch, errorHandler, alertify } = this.props;
		
		let treatmentId = this.props.match.params.treatmentId;
		const {male, female, available_today, available_any_day, available_on_weekend, consultation_fee,center_id, nearest_doctor, available, latitude ,longitude} =	this.state;  
        let data = {center_id, male, female,treatmentId, available_today, available_any_day, available_on_weekend, consultation_fee, nearest_doctor, available, latitude,longitude }; 
		
		fetchTreatment(search,data).then(res => {
			this.setState({
				treatment_data	: res.data.meta.treatment,
				related_treatments	: res.data.meta.related_treatments,
				related_centers: res.data.meta.related_centers,
				doctor_treatment:res.data.data,
				current_page: res.data.meta.current_page,
                last_page	: res.data.meta.last_page,
                to			: res.data.meta.to,
                per_page	: res.data.meta.per_page,
                total		: res.data.meta.total,
				});
			if(res.data.data.length == 0){
				alertify.error("There is no doctor");
			}
			window.scrollTo(0, 0);
			if (res.data.meta.total == 0){
				alertify.error('There is no doctor');
			}
			dispatch({
				type: actions.FETCH_TREATMENT,
				payload: res.data.data
			});
		}).catch(errorHandler).finally(() => {
			this.setState({
				isLoading: false
			});
		});
	};

	SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};

    ListOfDoctors = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { doctor_treatment } = this.state;
		return	<List {...this.props} doctor_data={doctor_treatment} />
	}

	RelatedTreatments = () => {
		var slugify         = require('slugify');
		const{ related_treatments } 	=	this.state;
		if (related_treatments.length < 1) {
			return(
				<div className="pb-5"></div>
			);
		}
		return(
			<div className="container margin_25">
			<h6 className="h6-brief-intro">Related Treatments</h6>
			<div className="row">
				<div className="col">
				{(related_treatments)?
					related_treatments.map(m =><Link to={{ pathname:`/treatment-detail/${slugify(m.name)}/${m.id}` }} className="m-1 text-sm btn btn-outline-midgray btn-sm mb-1 mr-1 white-space-normal">{m.name}</Link>)
				:
				''
				}
				</div>
			</div>
		</div>
		);
	}	
	TreatmentInCenters = () => {
		var slugify         = require('slugify');
		const{ related_centers, treatment_data } 	=	this.state;
		if (related_centers.length < 1) {
			return(
				<div className="pb-5"></div>
			);
		}
		return(
			<div className="container margin_25">
			<h6 className="h6-brief-intro"> {treatment_data.name} In Hospitals</h6>
			<div className="row">
				<div className="col">
				{(related_centers)?
					related_centers.map(m =><Link to={{ pathname:`/center-detail/${slugify(m.name)}/${m.id}` }} className="m-1 text-sm btn btn-outline-midgray btn-sm mb-1 mr-1 white-space-normal">{m.name}</Link>)
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
		this.fetchTreatment(search + "page=" + 	pageNumber , actions.FETCH_TREATMENT);
	}

    CenterProfile = () => {
		// const { treatment_data,total } = this.state;
		return (
            <aside className="col-xl-3 col-lg-4 pull-right" id="sidebar">
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
		const { total, to,treatment_data,related_treatments } = this.state;
		var name = treatment_data.name ; 
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
		}
		var meta_description = "Find best doctors of "+name+" | Top Doctors Of "+name+" - Book an appointment with top doctors of "+name;
			return(
                <>
					<Helmet>
						<meta charSet="utf-8" />
						<meta http-equiv="X-UA-Compatible" content="IE=edge" />
						<meta name="keywords" content={related_treatments.map(m=>m.name)}></meta>
						
						<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
						<meta name="description" content={ meta_description } />
						<meta name="author" content="Hospitall Care" />
						<title>Find best doctors of { name } | Best Doctors Of { name } - Book an appointment with top doctors of { name }</title>
						
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
												<li><Link to="/doctor-list">Find A Doctor</Link></li>
												<li><Link>Best {treatment_data.name} Doctors In Lahore</Link></li>
											</ul>
										</div>
									</div>
									</div>
									{this.SearchPages()}
								</div>
							</div>
						</div>
						<div className="container ">
							<div className=" row pagination_details ">
							<div className=" col-6 text-left ">
									<span className="span-treatmentName">{treatment_data.name}</span>
								</div>
								<div className=" col-6 text-right">
									{(to) ? <span><strong>Showing {to}</strong> of {total} results</span>
									 : 
									 <span><strong>No results found</strong></span>
									 }
									
								</div>
							</div>
						</div>

						<div className="container margin_25">
						
							<div className="row">
								
								{this.CenterProfile()}
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
						

						{(treatment_data.article) ? 						
						<div className="container margin_25_padding_0">
							<h6 className="h6-brief-intro">{(treatment_data.article_heading != "")? treatment_data.article_heading:treatment_data.name}</h6>
							<div className="row">
								<div className="col">
							<p className="p-brief-intro text-justify">{treatment_data.article}</p>
								</div>
							</div>
						</div> : ''}


						{/* <BottomFaq/> */}

						{this.RelatedTreatments()}
						{this.TreatmentInCenters()}

					</main>
                </>
			);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch: dispatch,
		fetchTreatment: (search,data) => actions.fetchTreatemnt(search,data),
	};
};

export default connect(mapDispatchToProps)(Detail);