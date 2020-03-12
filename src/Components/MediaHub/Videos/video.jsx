import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../Store/Actions/MediaHubAction";
import { getSearchUrlFromState } from '../../../util/functions'
import * as qs from 'query-string';
import SearchPages from '../../Search/search_pages';
import {Helmet} from "react-helmet";
import moment from 'moment';
import Pagination from "react-js-pagination";

class Video extends Component{

	state = {
		isLoading	: true,
		current_page: 0,
		last_page	: 0,
		per_page	: 0,
		total		: 0,
		video_data	:'',
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
        this.getAllVideos(search);
	  }
	  
      getAllVideos = (search) => {

        this.setState({
            isLoading: true
        });

        let { getAllVideos, dispatch, errorHandler, alertify } = this.props;
		getAllVideos(search).then(res => {
            this.setState({
				current_page: res.data.meta.current_page,
                last_page	: res.data.meta.last_page,
                to			: res.data.meta.to,
                per_page	: res.data.meta.per_page,
                total		: res.data.meta.total,
                video_data	: res.data.data,
			});
			if(res.data.meta.total == 0){
				alertify.error("There is no Videos Right now");
			}
			window.scrollTo(0, 0);
            dispatch({
                type: actions.GET_VIDEOS,
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
	handlePageChange = (pageNumber) => {
		this.setState({activePage: pageNumber});
		let search = getSearchUrlFromState(this.state);
		this.getAllVideos(search + "page=" + 	pageNumber , actions.GET_VIDEOS);
	}
	renderVlogs = () =>{
		var slugify         = require('slugify');
		const { video_data } = this.state;
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		return video_data.map(m => {
			var description = m.description.substr(0, 110)
			return(
				<>
				<div className="col-lg-4">
					<div className="box_list wow fadeIn">
						<figure>
						<Link to={{pathname:`/video-detail/${slugify(m.title)}/${m.id}`}}>
							<div className="embed-responsive embed-responsive-16by9">
  								<iframe className="embed-responsive-item"  src={m.link} allowfullscreen></iframe>
							</div>
							<div className="preview"><span>Read more</span></div>
						</Link>
						</figure>
						<div className="wrapper">
							<Link to={{pathname:`/video-detail/${slugify(m.title)}/${m.id}`}}>
								<h3>{m.title}</h3>
							</Link>
							<span  dangerouslySetInnerHTML={{__html: description}} />
						</div>
						<ul>
							<li><Link to={{pathname:`/video-detail/${slugify(m.title)}/${m.id}`}}><i className="icon_pencil-edit"></i>{m.updated_by}</Link></li>
							<li><Link to={{pathname:`/video-detail/${slugify(m.title)}/${m.id}`}}></Link></li>
							<li><i className="icon_clock_alt"></i> { moment(m.updated_at).format('LL')}</li>

						</ul>
					</div>
				</div> 
				</>
			);
		});
	}
    render(){
		let {total,to} = this.state;
        return(
            <>
				<Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    				<meta name="description" content="Top blog of health | get latast News regarting health | HospitALL Health Care" />
    				<meta name="author" content="Hospitall Care" />
					<title>Top blog of health | get latast News regarting health | HospitALL Health Care</title>
					<Link to='/videos'></Link>
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
												<li><Link to="/Videos">Videos</Link></li>
												<li>List of Videos</li>
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
										<Link to="specialization-list" className="filter-button-style-label ml-1" name="/specialization-list" onClick={this.renderRefreshPage}>
										 	Specialization
										</Link>
										<Link to="clinic-list" className="filter-button-style-label ml-1" name="/clinic-list" >
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
							{this.renderVlogs()}
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
        getAllVideos: (search) => actions.getAllVideos(search),
    };
};

export default connect(mapDispatchToProps)(Video);