import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/TreatmentAction";

class BottomTopSpecializations extends Component{
    state = {
        isLoading       : true,
        specializations : '',
        treatments      : '',
    }
    componentDidMount(){
        this.getTreatments();
    }

    getTreatments = () => {
        this.setState({
            isLoading: true,
        });
        let { getTreatments, dispatch, errorHandler } = this.props;
    
        getTreatments().then(res => {
            this.setState({
                specializations: res.data.top_Specializations_names,
            });
            dispatch({
                type: actions.FETCH_SPECIALIZATION,
                payload: res.data
            });
        }).catch(errorHandler).finally(() => {
            this.setState({
                isLoading: false
            });
        });
    };

    render(){
		var slugify         = require('slugify');
        const {specializations } = this.state;
		if (specializations.length < 1) {
			return(
				<div className="pb-5"></div>
			);
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
}
const mapStateToProps = state => {
    return {
        treatment: state.TreatmentReducers.treatments,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch,
        getTreatments: () => actions.getSpecialization(),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(BottomTopSpecializations);