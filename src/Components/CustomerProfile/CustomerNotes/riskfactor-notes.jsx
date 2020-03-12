import React, {Component} from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Button, FormGroup, Label, Input } from 'reactstrap';

import * as actions from "../../../Store/Actions/CustomerAction";
  
class RiskFactorNotes extends Component{
    constructor(props) {
        super(props);
        this.defaultOption = { "notes": "" };
        this.state = {
            riskfactor: "",
            options: [this.defaultOption]
        }
    }
    state = {
        isLoading : true,
        riskfactor: [],
    };
    componentDidMount (){
        if(!this.props.user){
			return <Redirect to='/404-not-found' />;
        };
        this.getRiskFactor();
    }

    getRiskFactor = () => {

		this.setState({
			isLoading: true
		});
		let { getRiskFactor,alertify, errorHandler } = this.props;

        let customerId = this.props.user.customer.id;
        let token = this.props.user.access_token;
        getRiskFactor(customerId, token).then(res => {
            this.setState({
				options	: res.data.data,
            });
            if(res.data.nodata){
                this.setState({
                    options	: [{ "notes": "" }],
                }); 
                alertify.error('There is no Risk Factor');
            }
		}).catch(errorHandler).finally(() => {
			this.setState({
				isLoading: false
			});
		});
    };
    handleChange = (index, event) => {
        var riskfactor = this.state.options.slice(); // Make a copy of the emails first.
        riskfactor[index] = event.target.value; // Update it with the modified email.
        this.setState({options: riskfactor,}); // Update the state.
    
    }
    checkUpdateRiskFactor =()=>{
        const {options} = this.state;
        let { alertify } = this.props;
        if(options[0] !=""){
            this.updateRiskFactor();
        }else{
            alertify.error('Enter Risk factor first');
        }
    }
    updateRiskFactor = () => {

		this.setState({
            processing: true
		});
        let { updateRiskFactor, errorHandler,alertify } = this.props;
       
        const {options} = this.state;
        
        let id = this.props.user.customer.id;
        let token = this.props.user.access_token;
        let params ={id,options};
        updateRiskFactor(params, token).then(res => {
			this.setState({
				options	: res.data.data,
            });
            if(res.data.data){
                alertify.success('Data Updated Successfully');
            }
            if(res.data.nodata){
                this.setState({
                    options	: [{ "notes": "" }],
                }); 
               
            }
            // setTimeout(window.location.reload(),100000);
		}).catch(errorHandler).finally(() => {
			this.setState({
                processing: false
			});
		});
    };
 
    handleDelete = (index, e) => {
        var riskfactor = this.state.options.slice(); // Make a copy of the emails first.
        riskfactor[index] = e.target.value; // Update it with the modified email.
        this.setState({options: riskfactor,}); // Update the state.
        let stateClone = JSON.parse(JSON.stringify(this.state.options));
        stateClone.splice(index, 1);
        this.setState({ options: stateClone });
        e.preventDefault();
    }
    handleClick = (e) => {
        let stateClone = JSON.parse(JSON.stringify(this.state));
        stateClone.options.push(this.defaultOption);
        this.setState({ options: stateClone.options });
        e.preventDefault();
    }
 
    customRow = (options) => {
        
        const listItems = options.map((cusRow, index) =>
            <FormGroup row id={index} key={index}>
                <Label for="Risk Factor" sm={3} className="text-right">Risk Factor {index + 1}</Label>
                <Col sm={7}>
                 <Input type="text" name="options"  placeholder="Enter Risk Factor" value={cusRow.notes}  onChange={this.handleChange.bind(this, index)} />
                </Col>
                {(index == 0)? '': 
                <Col sm={1}>
                    <Button color="danger" onClick={(e) => this.handleDelete(index, e)}>X</Button>
                </Col>
                }
            </FormGroup>
        );
        return (
                listItems
            )  
    }
    render(){

        if(!this.props.user){
			return <Redirect to='/404-not-found' />;
        };
        if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
        let { options } = this.state;
        if(!options){
            options =[{ "notes": "" }];
        }
        return(
            <>
                <main>
                    <div id="breadcrumb">
                        <div className="container">
                            <ul>
                            <li><Link to="/">Home</Link></li>
                                <li><Link to="#">My Notes</Link></li>
                                <li>Risk Factors</li>
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
                                                    <li className="pl-3"><Link to="#" className="active" >Risk Factor</Link></li>
                                                    <li className="pl-3"><Link to="/doctor-notes" >Doctor Notes</Link></li>
                                                </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                            </aside> 
                            <div className="col-lg-9 ml-auto" >
                                <div className="box_form">
                                    {this.customRow(options)}
                                    <FormGroup row>
                                        <Col sm={{ size: 10 }}>
                                            <Button color="success" className="float-right" onClick={this.handleClick} >Add more</Button>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row className="text-center">
                                        <Col sm={12}>
                                            <Button color="success" onClick={this.checkUpdateRiskFactor}> Save</Button>
                                        </Col>
                                    </FormGroup>
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
		getRiskFactor: (id, token)     => actions.getRiskFactor(id, token),
        updateRiskFactor: (params, token) => actions.updateRiskFactor(params, token),

	};
};

export default connect( mapStateToProps, mapDispatchToProps )(RiskFactorNotes);