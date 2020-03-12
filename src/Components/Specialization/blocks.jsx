import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/TreatmentAction";

class Blocks extends Component {
    state = {
        isLoading       : true,
        specializations : '',
        treatments      : '',
    };
    componentDidMount() {
        window.scrollTo(0, 0);
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
    Blocks = () => {

		var slugify         = require('slugify');
        const { specializations } = this.state;
        if (!specializations) {
            return true;
        }
        return specializations.map(m => {
            return (
                <div className="col-lg-3 col-md-6">
                    <Link to={{pathname:`/treatment-detail/${slugify(m.name)}/${m.id}`}}>
                        <a href="#0" className="box_cat_home">
                            <i className="icon-info-4"></i>
                            <img src={m.picture_path} width="60" height="60" alt={m.name} />
                            <h3>{m.name}</h3>
                            <ul className="clearfix">
                                <li><strong>{m.doctors}</strong>Doctors</li>
                                <li><strong>{m.centers}</strong>Clinics</li>
                            </ul>
                        </a>
                    </Link>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="container margin_120_95">
                <div className="main_title">
                    <h2>Find by specialization</h2>
                    <p>Here is our few of the Top Specializations.</p>
                </div>
                <div className="row">
                    {this.Blocks()}
                </div>
                <div>
                    <p className="text-center"><Link to="/specialization-list" className="btn_1 medium">See More</Link></p>
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

export default connect(mapStateToProps,mapDispatchToProps)(Blocks);