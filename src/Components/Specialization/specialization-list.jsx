import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/TreatmentAction";
import { getSearchUrlFromState } from '../../util/functions'
import * as qs from 'query-string';
import List from './list';
import SearchPages from '../Search/search_pages';
import {Helmet} from "react-helmet";
import Pagination from "react-js-pagination";
class SpecializatoinList extends Component{
    state = {
		isLoading	: true,
		current_page: 0,
		last_page	: 0,
		per_page	: 0,
		treatments	:'',
		treatment_data:'',
		activePage	:0,
		
    };
    componentDidMount() {
		window.scrollTo(0, 0);
		let search	 = this.props.location.search;
        const params = qs.parse(search);
        for (let key in params) {
            this.setState({
                [key]: params[key]
            });
        }
        this.getTreatments(search);
	  }
	  
      getTreatments = (search) => {

        this.setState({
            isLoading: true
        });

        let { getTreatments, dispatch, errorHandler, alertify } = this.props;
            getTreatments(search).then(res => {
            this.setState({
				current_page: res.data.meta.current_page,
                last_page	: res.data.meta.last_page,
                to			: res.data.meta.to,
                per_page	: res.data.meta.per_page,
                total		: res.data.meta.total,
                treatment_data: res.data.data
			});
			if(res.data.meta.total == 0){
				alertify.error("There is no Specialization");
			}
			window.scrollTo(0, 0);
            dispatch({
                type: actions.GET_ALL_TREATMENTS,
                payload: res.data.data
            }); 
        }).catch(errorHandler).finally(() => {
            this.setState({
                isLoading: false
            });
        });
	};
	
	ListOftreatments = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { treatment_data } = this.state;
		return	<List {...this.props} treatment_data={treatment_data} />		
	};

	SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};

	handlePageChange = (pageNumber) => {
		this.setState({activePage: pageNumber});
		let search = getSearchUrlFromState(this.state);
		this.getTreatments(search + "page=" + 	pageNumber , actions.GET_ALL_TREATMENTS);
	}
	renderRefreshPage = (e)=>{
		this.props.history.push(e.target.name);
            window.location.reload();
    }
    render(){

		let { to,total ,treatment_data} = this.state;
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
        return(
            <>
				<Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="keywords" content={treatment_data.map(m=>m.name)}></meta>
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    				<meta name="description" content="Top Specialization - Book an appointment according to specializations - Book an appointment with our best doctors" />
    				<meta name="author" content="Hospitall Care" />
					<title>Top Specialization - Book an appointment according to specializations - Book an appointment with our best doctors </title>
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
															<li><Link to="/doctor-list">Find a Doctor</Link></li>
															<li>Top Specializations</li>
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
										<Link to="specialization-list" className="filter-button-style-label-active " name="/specialization-list" onClick={this.renderRefreshPage}>
										 	Specialization
										</Link>
										<Link to="clinic-list" className="filter-button-style-label ml-1"	 name="/clinic-list" >
											Clinics
										</Link>
										<Link to="doctor-list" className=" filter-button-style-label ml-1" name="/doctor-list">
											Doctors
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

							{this.ListOftreatments()}
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
				</main>
	
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch,
        getTreatments: (search) => actions.getAllTreatments(search),
    };
};

export default connect(mapDispatchToProps)(SpecializatoinList);