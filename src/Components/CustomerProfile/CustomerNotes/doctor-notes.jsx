import React, {Component} from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../Store/Actions/CustomerAction";
  
class DoctorNotes extends Component{
    initState = {
        isLoading	: false,
    };
    
	state = {
        ...this.initState,
        doctor_notes   : '',
    };

    componentDidMount (){
        if(!this.props.user){
			return <Redirect to='/404-not-found' />;
        };
        this.getDoctorNotes();
    }

    getDoctorNotes = () => {

		this.setState({
			isLoading: true
		});
		let { getDoctorNotes, alertify, errorHandler } = this.props;

        let customerId = this.props.user.customer.id;
        let token = this.props.user.access_token;
        getDoctorNotes(customerId, token).then(res => {
			this.setState({
				doctor_notes : res.data.data,
            });
            if(res.data.nodata){ 
                alertify.error('There is no Risk Factor');
            }
		}).catch(errorHandler).finally(() => {
			this.setState({
				isLoading: false
			});
		});
    };
    
    render(){

        if(!this.props.user){
			return <Redirect to='/404-not-found' />;
        };
        if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
        const {doctor_notes} =this.state;
        return(
            <>
                <main>
                    <div id="breadcrumb">
                        <div className="container">
                            <ul>
                            <li><Link to="/">Home</Link></li>
                                <li><Link to="#">My Notes</Link></li>
                                <li>Doctor Notes</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container margin_60">
                        <div className="row">
                            <aside className="col-lg-3" id="sidebar">
                                    <div className="box_style_cat" id="faq_box">
                                        <ul id="cat_nav">
                                            <li><Link to="/customer-profile" ><i className="icon_document_alt"></i>My Profile</Link></li>
                                            <li>
                                                <a href="#" data-toggle="collapse" data-target="#appointment" aria-expanded="false" aria-controls="users">
                                                <i class="icon_document_alt"></i>Appointments</a>
                                                <div id="appointment" class="collapse ">
                                                <ul class="sidebar-menu">
                                                    <li className="pl-3" style={{borderTop:"1px solid #e1e8ed"}}><Link to="/pending-appointments" >Pending Appointments</Link></li>
                                                    <li className="pl-3"><Link to="/approved-appointments" >Approved Appointments</Link></li>
                                                    <li className="pl-3"><Link to="/appointment-history">Appointment History</Link></li>
                                                </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle="collapse" data-target="#labTest" aria-expanded="false" aria-controls="users">
                                                <i class="icon_document_alt"></i>Lab Test</a>
                                                <div id="labTest" class="collapse ">
                                                <ul class="sidebar-menu">
                                                    <li className="pl-3" style={{borderTop:"1px solid #e1e8ed"}}><Link to="/current-lab-test" >Current Test</Link></li>
                                                    <li className="pl-3"><Link to="/lab-test-history" >Test History</Link></li>
                                                </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle="collapse" data-target="#details" aria-expanded="false" aria-controls="users">
                                                <i class="icon_document_alt"></i>Additional Detail</a>
                                                <div id="details" class="collapse show">
                                                <ul class="sidebar-menu">
                                                    <li className="pl-3" style={{borderTop:"1px solid #e1e8ed"}}><Link to="/allergy-notes" >Allergy Notes</Link></li>
                                                    <li className="pl-3"><Link to="/riskfactor-notes" >Risk Factor</Link></li>
                                                    <li className="pl-3"><Link to="#" className="active">Doctor Notes</Link></li>
                                                </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                            </aside> 
                            <div className="col-lg-9 ml-auto" >
                                <div className="box_form">
                                    {(doctor_notes)? doctor_notes.map((values, index)=>
                                    <div className="row text-center"> 
                                        <div className="col-3">
                                            <div className="form-group">
                                               <label htmlFor="Doctor notes"> Doctor Notes # {index + 1}</label>
                                            </div>
                                        </div>  
                                        <div className="col-9">
                                            <p>{values.notes}</p>
                                        </div>  
                                    </div>
                                    ): <div className="row text-center">
                                            <div className="col-12">
                                               <p> There is no doctor notes</p>
                                            </div>
                                        </div> 
                                    }
                                </div>
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
        user: state.AuthReducers.user
    };
};

const mapDispatchToProps = dispatch => {
	return {
		dispatch: dispatch,
		getDoctorNotes: (id, token)     => actions.getDoctorNotes(id, token),

	};
};

export default connect( mapStateToProps, mapDispatchToProps )(DoctorNotes);