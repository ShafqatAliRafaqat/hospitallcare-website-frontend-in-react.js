import React, {Component} from "react";
import 'react-phone-number-input/style.css'
import PhoneModal from "./PhoneModal"
import alertify from "alertifyjs";
import { connect } from "react-redux";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import * as actions from "../../Store/Actions/AuthAction";
import * as treatmentactions from "../../Store/Actions/TreatmentAction";
import { Link } from "react-router-dom";

alertify.set('notifier', 'position', 'top-center');

class AppointmentForm extends Component{
    initState = {
        ...this.props,
        name        : "",
        email       : '',
        phone       : '',
        center_id   : '',
        treatment_id: '',
        doctor_id   : '',
        time        : '',
        processing  : false,
        booking_date: new Date(),

    };
    state = {
        ...this.initState,
        nameError   : '',
		isLoading   : true,
        emailError  : '',
        TimeRange   : '',
        treatment_data: [],
        doctor_name : this.initState.doctor_data.first_name,
        doctor_id   : this.initState.doctor_data.id,
        showStyle   :{
            paddingBottom:"2px",
            // backgroundColor: "#74d1c6",
            // color:"white"
        },
        myStyle     : {
          color     : "white",
          background: "green",
        }
    };

    getCenterTreatments =()=>{
        this.setState({
			isLoading: true
        });
        let { getCenterTreatments, errorHandler } = this.props;
        const {doctor_id, center_id} = this.state;
        let params ={doctor_id, center_id};
        getCenterTreatments(params).then(res => {
            
            this.setState({
                treatment_data:res.data.data, 
                TimeRange:res.data.schedules, 
            });
		}).catch(errorHandler);
    }
    onChangeCenter = e =>{
		
        this.setState({
            [e.target.name]: e.target.value,
            treatment_data:[],
        }, () => {
            this.getCenterTreatments();
        });
	};
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleChange = date => {
        this.setState({
            booking_date: date
        });
    };
    bookAppointment = () => {

      this.setState({
          processing: true,
      });
      const {bookAppointment,dispatch,errorHandler} = this.props;

      const {treatment_id, booking_date, center_id, doctor_id, time} 	=	this.state;

      let user = this.props.user
      let customer_id = user.customer.id
      let date = moment(booking_date).format('YYYY-MM-DD');
    //   let date = moment(bdate_format + ' ' + time,'MMMM Do YYYY, h:mm:ss a');
      let params = { treatment_id, date, center_id, doctor_id,customer_id,time}; 
      bookAppointment(params).then(res => {

          this.setState({
              ...this.initState,
          });

          alertify.alert('Confirmation Alert', "Thank you for requesting an appointment! We'll contact you shortly to confirm. ", function(){ 
            window.location.assign("https://www.hospitallcare.com/pending-appointments")
            setTimeout(window.location.reload(),100000);
          
            });
          
          dispatch({
              type: actions.BOOK_APPOINTMENT,
              payload: res.data
          });

      }).catch(errorHandler).finally(() => {
          this.setState({
              processing: false
          });
      });

  };
 
    renderPhoneModal = () => {
        const { treatment_id, doctor_data, booking_date, center_id,time } 	= this.state;
        let doctor_id = doctor_data.id;
        let date = moment(booking_date).format('YYYY-MM-DD');
        
        return <PhoneModal {...this.props} doctor_data = {doctor_data} doctor_id={doctor_id} treatment_id={treatment_id} time={time} date={date} center_id={center_id}/>;
    };
    renderCheckFields =()=>{
        const { treatment_id, booking_date, center_id ,time} 	= this.state;
        if(treatment_id != '' && center_id != '' && booking_date != '' && time !=''){
            this.bookAppointment();
        }else{
            alertify.error('Select all fields!');
        }
    };
    renderCenterTreatment =()=>{
        const {  treatment_data, TimeRange, showStyle,time,myStyle} 	= this.state;
        let count = treatment_data.length;
        
        if(count > 0){
                return(
                    <>
                    <div className="row">
						<div className="col-lg-12">
							<div className="form-group">
								<select className="form-control" name="treatment_id"  onChange={this.onChange} id="booking_visit"required>
									<option value=''>Select Treatment</option>
								    {treatment_data.map(m => <option key={m.id} value={m.id}>{m.treatment_name}</option>)}
								</select>
							</div>
						</div>
					</div>
                     <div className="row">
						<div className="col-12">
							<div className="form-group">
                                <DatePicker
                                    className="form-control"
                                    name="booking_date"
                                    selected={this.state.booking_date}
                                    onChange={this.handleChange}
                                    // showTimeSelect
                                    // timeIntervals={15}      
                                    minDate={new Date()}
                                    // includeTimes={TimeRangeFormate.map( t => new Date(new Date().setHours(t[0],t[1])))}
                                    // dateFormat="MMMM d, yyyy h:mm aa"
                                    dateFormat="MMMM d, yyyy"
                                />
							</div>
						</div>
					</div>
                    <div className="row">
                        <div className="col pb-2">
                        {(TimeRange)?
                            TimeRange.map(( m, index )=>
                            <span id={index}>
                                <button className='m-1 text-sm btn btn-outline-midgray btn-sm mb-1 mr-1 white-space-normal' style={(time == m)? myStyle : showStyle} onClick={ () => this.setState({ time: m,})}>
                                    {moment(m, 'HH:mm').format('hh:mm A')}
                                </button>
                            </span>
                            )
                        :
                        ''
                        }
                        </div>
                    </div>
                    </>
                );
        }
    };
    renderWhenUserLogin = () => {
            return (
                <div style={{ position:"relative" }}>
                    <button onClick={this.renderCheckFields} autoFocus className='btn_1 full-width'>
                        Book Appointment
                    </button>
                </div>
            );
    };
    renderCenter  (center)  {
        if(!center){
            return true;
        }
        const { doctor_data } = this.state;
		var slugify = require('slugify');
        return center.map( c => {
            if(c.day_from == null || c.day_to == null || c.time_from == null || c.time_to == null){
                return true;
            }
            let day_from_str= c.day_from;
            var day_from    = new Array();
            day_from        = day_from_str.split(",");
            
            let day_to_str  = c.day_to;
            var day_to      = new Array();
            day_to          = day_to_str.split(",");
           
            let time_from_str= c.time_from;
            var time_from   = new Array();
            time_from       = time_from_str.split(",");
           
            let time_to_str = c.time_to;
            var time_to     = new Array();
            time_to         = time_to_str.split(",");

            return(
                
                <small  className="col pl-0  text-sm">
                    <Link to={{ pathname:`/center-detail/${slugify(c.center_name)}/${c.center_id}` }}><h6>{c.center_name}</h6></Link>
                    {(day_from)? day_from.map((d,index)=>
                    <>
                    <ul className="bullets mb-2">
                        <li>{d} to {day_to[index]} {moment(time_from[index],"hh").format('LT')} - { moment(time_to[index],"hh").format('LT')}</li>
                        
                    </ul>
                    </>
                    )
                    :""
                } 
                    {(doctor_data.partnership == 0)? 
                        <small  className="col pl-0  text-sm"><h6>{(c.assistant_phone)? 'Assistant Number' : ((c.phone)?'Call Helpline':'Call Our Customer Care')}: <a href="tel://{(c.assistant_phone)? c.assistant_phone : ((c.phone)?c.phone:+92-322-2555600)}"> {(c.assistant_phone)? c.assistant_phone : ((c.phone)?c.phone:'+92-322-2555600')}</a><br /></h6></small>     
                    :''}
                </small>
            );
        });
    }
    render(){

        const { isLoading, schedules,doctor_data } = this.state;
        const { user } = this.props;
        if(!isLoading){
            return true;
        }
        return(
            <aside className="col-xl-5 col-lg-5" id="sidebar">
			    <div className="box_general_3 booking">
				    <div className="title">
					    <h3>Book a Visit</h3>
				    </div>
                    {this.renderCenter(schedules)}
				    <div id="message-booking"></div>
					{(doctor_data.partnership == 1) ? 
					<>
                    <div className="row">
						<div className="col-lg-12">
							<div className="form-group">
								<select className="form-control" name="center_id"  onChange={this.onChangeCenter} required>
									<option value=''>Select Hospital</option>
								    {(schedules)?schedules.map(s => <option key={s.center_id} value={s.center_id}>{s.center_name}</option>):''}
								</select>
							</div>
						</div>
					</div>  
                    {this.renderCenterTreatment()}
                    {(user)? this.renderWhenUserLogin() :this.renderPhoneModal()}
                    </>
                    :''
                    }
                    </div>
		    </aside>		
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
        bookAppointment: (params) => actions.bookAppointment(params),
        getCenterTreatments: (params) => treatmentactions.getCenterTreatments(params),

	};
};
export default connect(mapStateToProps,mapDispatchToProps)(AppointmentForm);
