import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/DoctorAction";
import SimplePagination from "../Common/SimplePagination";
import { getSearchUrlFromState } from '../../util/functions'
import * as qs from 'query-string';
import List from './list';
import ReactDOM from "react-dom";
import alertify from 'alertifyjs';

class DoctorFilter extends Component{
    initState = {
        ...this.props,
		male			: false,
		female			: false,
		consultation_fee: '',
		nearest_doctor	: '',
        available_today	: false,		
        available_any_day:false,
        available_on_weekend:false,
	}
	state = {
		...this.initState,
		male			: false,
		female			: false,
		isLoading		: true,
		page			: 0,
		totalPages		: 0,
		activePage		: 15,
        doctor_data		: '',
        
    };
    filterChecked =e =>{
		
        this.setState({
            [e.target.name]: e.target.checked
        }, () => {
            this.filter();
        });
    };
    
    filter = () => {

        const {filter,dispatch,errorHandler} = this.props;
  
        const {male, female, available_today, available_any_day, available_on_weekend } =	this.state;
        
        let params = {male, female, available_today, available_any_day, available_on_weekend }; 
    };

    render(){
        let { doctor_data, page, totalPages,to,total,male,female, available_any_day, available_today, available_on_weekend } = this.state;
        return(
            <>
                <div className="sect-filters_and_sort bg-light pb-2 pt-2 text-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row align-items-center d-lg-flex">
                                    <div className="col-6 col-lg-2 col-md-4 mb-3 col-sm-4 col-xs-6 mb-lg-0">
                                        <div className="custom-control custom-checkbox custom-control-inline bg-white  pr-3">            
                                            <input type="checkbox" id="maledoc1" name="male" onChange={ this.filterChecked } className="custom-control-input"/>
                                            <label className="custom-control-label" for="maledoc1">Male doctor</label>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-2 col-md-4 mb-3 col-sm-4 col-xs-6 mb-lg-0">
                                        <div className="custom-control custom-checkbox custom-control-inline bg-white pr-3  mr-0">
                                            <input type="checkbox" id="femaledoc1" name="female" onChange={ this.filterChecked } className="custom-control-input" />
                                            <label className="custom-control-label" for="femaledoc1">Female doctor</label>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-2  col-md-4 mb-3 col-sm-4 col-xs-6 mb-lg-0">
                                        <div className="custom-control custom-checkbox custom-control-inline bg-white pr-3 ">
                                            <input type="checkbox" id="nextthreedays1" onChange={ this.filterChecked} name="available_any_day" className="custom-control-input" />
                                            <label className="custom-control-label" for="nextthreedays1">Available any day</label>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-2 col-md-4 mb-3 col-sm-4 col-xs-6 mb-lg-0">
                                        <div className="custom-control custom-checkbox custom-control-inline bg-white  pr-3  mr-0">
                                            <input type="checkbox" id="today1" name="available_today" onChange={ this.filterChecked } className="custom-control-input" />
                                            <label className="custom-control-label" for="today1">Available today</label>	
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-2 col-md-4 mb-3 col-sm-4 col-xs-6 mb-lg-0">
                                        <div className="custom-control custom-checkbox custom-control-inline bg-white  pr-3 mr-0">
                                            <input type="checkbox" id="Weekends" name="available_on_weekend" onChange={ this.filterChecked } className="custom-control-input" />
                                            <label className="custom-control-label" for="Weekends">Available on Weekends</label>	
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-2 col-md-4 col-sm-4 col-xs-6 mb-3 mb-lg-0">
                                        <div className="custom-control custom-checkbox custom-control-inline bg-white  pr-3 ">
                                            <ul style={{margin:0}}> 
                                                <li>
                                                    <h6 style={{fontSize:"0.75rem", color:"#999",marginBottom:"5px"}}>Consultation Fee</h6>
                                                        <select name="orderby" className="selectbox" onChange={ this.onChange } name="consultation_fee">
                                                            <option value="Closest">300-500</option>
                                                            <option value="Best rated">500-1000</option>
                                                            <option value="Men">1000-2000</option>
                                                            <option value="Women">2000-5000</option>
                                                            <option value="Women">5000+</option>
                                                        </select>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch,
        filter: (search) => actions.filterDoctors(search),
    };
};

export default connect(mapDispatchToProps)(DoctorFilter);