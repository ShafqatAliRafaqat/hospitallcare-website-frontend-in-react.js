import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/CenterAction";
import { getSearchUrlFromState } from '../../util/functions'
import * as qs from 'query-string';
import List from './list';
import SearchPages from '../Search/search_pages';
import Pagination from "react-js-pagination";
import {Helmet} from "react-helmet";

class CenterList extends Component{
    state = {
		isLoading	: true,
		page		: 0,
		totalPages	: 0,
		current_page: 0,
		last_page	: 0,
		per_page	: 0,
        center_data	: '',
    };
    componentDidMount() {
		let search = this.props.location.search;
		window.scrollTo(0, 0);
        const params = qs.parse(search);
        for (let key in params) {
            this.setState({
                [key]: params[key]
            });
        }

        this.getCenters(search);
      }
      getCenters = (search) => {

        this.setState({
            isLoading: true
        });

        let { getCenters, dispatch, errorHandler, alertify } = this.props;
            getCenters(search).then(res => {
            this.setState({
				current_page: res.data.meta.current_page,
                last_page	: res.data.meta.last_page,
                to			: res.data.meta.to,
                per_page	: res.data.meta.per_page,
                total		: res.data.meta.total,
                center_data	: res.data.data
			});
			window.scrollTo(0, 0);
			if(res.data.meta.total == 0){
				alertify.error("There is no Clinic");
			}
            dispatch({
                type: actions.GET_ALL_CENTERS,
                payload: res.data.data
            }); 
        }).catch(errorHandler).finally(() => {
            this.setState({
                isLoading: false
            });
        });
    };

	ListOfCenters = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { center_data } = this.state;
		return	<List {...this.props} center_data={center_data} />		
	};

	SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};

	handlePageChange = (pageNumber) => {
		this.setState({activePage: pageNumber});
		let search = getSearchUrlFromState(this.state);
		this.getCenters(search + "page=" + 	pageNumber , actions.GET_ALL_CENTERS);
	}
	renderRefreshPage = (e)=>{

		this.props.history.push(e.target.name);
            window.location.reload();
    }	
    render(){
		let { to,total,center_data } = this.state;
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
        return(
            <>
				<Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="keywords" content={center_data.map(m=>m.name)}></meta>
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    				<meta name="description" content="List of top hospitals and clinics in pakistan- Book an appointment with top doctors - Download our CareALL APP to book an appointment with our Best doctors" />
    				<meta name="author" content="Hospitall Care" />
					<title>Top Hospitals | Clinics In Pakistan - Book an appointment with top doctors of hospitals - Download our CareALL APP to book an appointment with our Best doctors</title>
					<Link to='/specialization-list'></Link>
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
												<li>Hospitals</li>
												<li>Top Hospitals in Lahore</li>
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
										<Link to="clinic-list" className="filter-button-style-label-active" name="/clinic-list" onClick={this.renderRefreshPage}>
											Clinics
										</Link>
										<Link to="doctor-list" className=" filter-button-style-label ml-1" name="/doctor-list" >
											Doctors
										</Link>
										<Link to="specialization-list" className="filter-button-style-label ml-1" name="/specialization-list" >
										 	Specialization
										</Link>
									</div>
								</li>	
								<li className="pt-3">
								<span><strong>Showing {to}</strong> of {total} results</span>
								</li>
							</ul>
						</div>
					</div>
					
					
					<div className="container margin_0_35 ">
						<div className="row">
							{this.ListOfCenters()}
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
const mapStateToProps = state => {
    return {
        centers: state.CenterReducers.centers,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch,
        getCenters: (search) => actions.getAllCenters(search),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CenterList);