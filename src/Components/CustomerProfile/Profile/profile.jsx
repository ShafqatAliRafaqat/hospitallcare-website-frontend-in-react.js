import React, {Component} from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import * as actions from "../../../Store/Actions/CustomerAction";
  
class Profile extends Component{
    initState = {
        processing	: false,
    };
    
	state = {
        ...this.initState,
		isLoading       : true,
        customer_data   : '',
        blood_group_id	: '',
        marital_status	: '',
        gender	        : '',        
    };
    
    componentDidMount (){
        if(!this.props.user){
			return <Redirect to='/404-not-found' />;
        };
        this.fetchCustomer();
    }

    fetchCustomer = () => {

		this.setState({
			isLoading: true
		});
		let { fetchCustomer, dispatch, errorHandler } = this.props;

        let customerId = this.props.user.customer.id;
        let token = this.props.user.access_token;
        fetchCustomer(customerId, token).then(res => {
			this.setState({
				customer_data	: res.data.data,
				gender	        : res.data.data.gender,
				blood_group_id	: res.data.data.blood_group_id,
                marital_status	: res.data.data.marital_status,
                name	        : res.data.data.name,
                phone	        : res.data.data.phone,
                email	        : res.data.data.email,
                address	        : res.data.data.address,
                height	        : res.data.data.height,
                weight	        : res.data.data.weight,
                
			});
			dispatch({
				type: actions.FETCH_CUSTOMER,
				payload: res.data.data,
				access_token: token,
			});
		}).catch(errorHandler).finally(() => {
			this.setState({
				isLoading: false
			});
		});
    };
    
    updateCustomer = () => {

		this.setState({
            processing: true
		});
        let { updateCustomer, dispatch, errorHandler,alertify } = this.props;
       
        const {blood_group_id, marital_status, gender, name, phone,email,address,height,weight,} = this.state;
        
        let id = this.props.user.customer.id;
        let token = this.props.user.access_token;

        let params ={blood_group_id, marital_status, gender, name, phone,email,address,height,weight, id};

        updateCustomer(params, token).then(res => {
			this.setState({
				customer_data	: res.data.data,
				gender	        : res.data.data.gender,
				blood_group_id	: res.data.data.blood_group_id,
                marital_status	: res.data.data.marital_status,
                name	        : res.data.data.name,
                phone	        : res.data.data.phone,
                email	        : res.data.data.email,
                address	        : res.data.data.address,
                height	        : res.data.data.height,
                weight	        : res.data.data.weight,
            });
			dispatch({
				type: actions.UPDATE_CUSTOMER,
				payload: res.data.data,
				access_token: token,
            });
            if(res.data.data){
                // this.props.history.push('/approved-appointments');
                alertify.success("Your profile has been updated!");
                setTimeout(window.location.reload(false),100000);
            }
		}).catch(errorHandler).finally(() => {
			this.setState({
                processing: false
			});
		});
    };
    
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    render(){

        if(!this.props.user){
			return <Redirect to='/404-not-found' />;
        };
        if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
        const {processing, blood_group_id, marital_status, gender, name, phone,email,address,height,weight} =this.state;
        return(
            <>
                <main>
                    <div id="breadcrumb">
                        <div className="container">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="#">My Profile</Link></li>
                                {/* <li>History</li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="container margin_60">
                        <div className="row">
                            <aside className="col-lg-3" id="sidebar">
                                    <div className="box_style_cat" id="faq_box">
                                        <ul id="cat_nav">
                                            <li><Link to="#" className="active"><i className="icon_document_alt"></i>My Profile</Link></li>
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
                                                <div id="details" class="collapse ">
                                                <ul class="sidebar-menu">
                                                    <li className="pl-3" style={{borderTop:"1px solid #e1e8ed"}}><Link to="/allergy-notes" >Allergy Notes</Link></li>
                                                    <li className="pl-3"><Link to="/riskfactor-notes" >Risk Factor</Link></li>
                                                    <li className="pl-3"><Link to="/doctor-notes" >Doctor Notes</Link></li>
                                                </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                            </aside> 
                            <div className="col-lg-9 ml-auto" >
                                <div className="box_form">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <div className="form-group">
                                                <TextField  id="standard-basic"  defaultValue = {name} onChange={this.onChange}  name="name" className="form-control" label="Name" margin="normal" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <TextField  id="standard-basic" defaultValue = {phone} onChange={this.onChange} InputProps={{ readOnly: true}} name="phone" className="form-control" label="Phone Number" margin="normal" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <div className="form-group">
                                            <TextField  id="standard-basic" defaultValue = {email} onChange={this.onChange}  name="email" className="form-control" label="Email Address" margin="normal" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <TextField   type="number" defaultValue = {weight} onChange={this.onChange}  step="0.01" name="weight"  className="form-control" label="Weight (KG)" margin="normal" />                                      
                                            </div>
                                        </div>
                                      
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-6">
                                            <div className="form-group">
                                                <FormControl className="form-control">
                                                    <InputLabel htmlFor="grouped-select">Marital Status </InputLabel>
                                                    <Select  name="marital_status" onChange={this.onChange}  value = {marital_status}>
                                                        <MenuItem value={0}>Unmarried</MenuItem>
                                                        <MenuItem value={1}>Married</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-6">
                                            <div className="form-group">
                                            <FormControl className="form-control">
                                                    <InputLabel  htmlFor="grouped-select">Gender</InputLabel>
                                                    <Select  name="gender" onChange={this.onChange}  value = { gender }>
                                                        <MenuItem value={0}>Male</MenuItem>
                                                        <MenuItem value={1}>Female</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-6">
                                            <div className="form-group">    
                                                <TextField   type="number" defaultValue = {height} onChange={this.onChange}  step="0.01" name="height"  className="form-control" label="Height (Feet)" margin="normal" />                                      
                                            </div>
                                        </div>
                                    
                                        <div className="col-md-6 col-6">
                                            <div className="form-group">
                                            <FormControl className="form-control">
                                                    <InputLabel  htmlFor="grouped-select">Blood Group</InputLabel>
                                                    <Select  name="blood_group_id" onChange={this.onChange} value = {blood_group_id} style={{paddingTop:"16px"}}>
                                                        <MenuItem value={1}>A+</MenuItem>
                                                        <MenuItem value={2}>A-</MenuItem>
                                                        <MenuItem value={3}>B+</MenuItem>
                                                        <MenuItem value={4}>B-</MenuItem>
                                                        <MenuItem value={5}>AB+</MenuItem>
                                                        <MenuItem value={6}>AB-</MenuItem>
                                                        <MenuItem value={7}>O+</MenuItem>
                                                        <MenuItem value={8}>O-</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <TextField  id="standard-basic" defaultValue = {address} onChange={this.onChange}  name="address" className="form-control" label="Address" margin="normal" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center add_top_30">
                                        <button color="primary" className='btn_1' onClick={ this.updateCustomer}>{(processing) ? "Updating..." : " Update Profile"}</button>{' '}
                                    </p>
                                    <div className="text-center">
                                        {/* <small>Ut nam graece accumsan cotidieque. Has voluptua vivendum accusamus cu. Ut per assueverit temporibus dissentiet.</small> */}
                                    </div>
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
		fetchCustomer: (id, token)     => actions.fetchCustomer(id, token),
        updateCustomer: (params, token) => actions.updateCustomer(params, token),

	};
};

export default connect( mapStateToProps, mapDispatchToProps )(Profile);