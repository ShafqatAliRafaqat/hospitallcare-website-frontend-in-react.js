import React, {Component} from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
class List extends Component{
    initState = {
        ...this.props,
    };
    state = {
        ...this.initState
    };
    renderCenter  (center)  {
        if(!center){
            return true;    
        }
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
                <small  className="col pl-0  text-sm" style={{display:"contents"}}>
                    {(day_from)? day_from.map((d,index)=>
                    <ul className="bullets pl-4">
                        <li>{d} to {day_to[index]} 
                            <ol >
                                <li>{moment(time_from[index],"hh").format('LT')} - { moment(time_to[index],"hh").format('LT')} </li>
                            </ol>
                        </li>
                    </ul>
                    )
                    :""
                } 
                </small>
            );
        });
    }
	render(){
		var slugify = require('slugify');
        const { doctor_data } = this.state;
        if(!doctor_data){
            return true;
        }
            return doctor_data.map(m => {
                return(
                    <div className="col-lg-12 px-0 px-lg-2">
                        <div className="card mb-3 rounded-0 border-0 doc-listing-card" style={{position: "relative"}}>
                            <div className="card-body p-2 py-lg-3">
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-2 ">
                                        <div className="row css-row-picture-name">
                                            <div className="col-3 col-lg-12 px-3 px-lg-3 pb-2">
                                                <div className=" position-relative">
                                                    <Link to={{pathname:`/doctor-detail/${slugify(m.first_name)}/${m.id}`}} className="css-avatar-img rounded-circle d-block overflow-hidden position-relative overflow-hidden shadow-none">
                                                    {(m.picture) ?
                                                        <img className="img-fluid card-img-overlay card-img-fit p-0" src={m.picture} alt={m.first_name} />
                                                        :
                                                        (m.gender == "Male")?
                                                        <img src="web_imgs/Male.png" alt={m.first_name} className="img-fluid card-img-overlay p-0" />
                                                        :
                                                        <img src="web_imgs/Female.png" alt={m.first_name} className="img-fluid card-img-overlay p-0" />

                                                    }    
                                                    {/* {(m.picture) ? <img src={m.picture} alt="" className="img-fluid card-img-overlay card-img-fit p-0"/> : <img src="web_imgs/doctor2.jpg" alt="" className="img-fluid card-img-overlay p-0" />} */}
                                                    
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-9 col-lg-9 mobil-offset  d-lg-none">
                                                <div className="row">
                                                    <div className="col-12 pr-2 pr-sm-5">
                                                        <div className="row css-name-offset">
                                                            <div className="col-12">
                                                                <h2 className="h5 font-weight-bold m-0">
                                                                    <Link to={{pathname:`/doctor-detail/${slugify(m.first_name)}/${m.id}`}} className="text-decoration-none shadow-none btn-outline-none">{m.first_name} {m.last_name} </Link>{(m.partnership == 1)? <i class="icon-ok-circled text-success" style={{fontSize: '18px'}}></i>:''}
                                                                </h2>
                                                                <p className="m-0">{(m.doctor_qualification)? m.doctor_qualification.map(dq=><small className="text-sm pr-2 degree-text">{dq.degree}</small>):""}</p>
                                                                <h3 className="m-0 h6"><small className="text-sm">{m.focus_area}</small></h3>
                                                                <p className="m-0"><small className="text-muted text-sm">{m.about}</small></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 order-3 order-lg-2">
                                        <div className="row mobil-offset mb-3 d-none d-lg-block">
                                            <div className="col-12 pr-5">
                                                <div className="row css-name-offset">
                                                    <div className="col-12">
                                                        <div className="doctor-name-ok">
                                                        <h2 className="h5 font-weight-bold m-0">
                                                            <Link to={{pathname:`/doctor-detail/${slugify(m.first_name)}/${m.id}`}} className="btn-light bg-transparent text-decoration-none shadow-none btn-outline-none">{m.first_name}</Link>
                                                            {(m.partnership == 1)? <span data-tooltip="Verified and Onboard" data-tooltip-location="right"><i class="icon-ok-circled text-success" style={{fontSize: '18px'}}></i></span>:''}
                                                        </h2>
                                                        
                                                        </div>
                                                        <p className="m-0">{(m.doctor_qualification)? m.doctor_qualification.map(dq=><small className="text-sm pr-2 degree-text">{dq.degree}</small>):""}</p>
                                                        <h3 className="m-0 h6"><small className="text-sm ">{m.focus_area}</small></h3>
                                                        <p className="m-0"><small className="text-muted text-sm ">{m.about}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row align-items-center">
                                                    <div className="col-12 pr-lg-5">
                                                        <div className="row mb-3">
                                                            <div className="col-12">
                                                                <div className="row">
                                                                {(m.treatments)?m.treatments.map(t=>
                                                                    <div className="col-6 col-lg-4 mb-2">
                                                                        <span className="btn btn-mediumgray-default btn-sm btn-block text-xs text-truncate">{t.name}</span>
                                                                    </div>
                                                                ):""}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    <div className="row pt-2 pt-lg-0">
                                                        <div className="col-6 col-lg-5 col-xl-4 mb-2 mb-lg-0 d-lg-none">
                                                            <Link to={{pathname:`/doctor-detail/${slugify(m.first_name)}/${m.id}`}} className="btn btn-block btn-outline-primary font-weight-bold text-size-14">View Profile</Link>
                                                        </div>
                                                        <div className="col-6 col-lg-5 col-xl-4 top-arrow-dropdown dropdown mb-2 mb-lg-0">
                                                            <Link to={{pathname:`/doctor-detail/${slugify(m.first_name)}/${m.id}`}} className="btn btn-block btn-warning text-white font-weight-bold d-none d-lg-block no-booking-btn"   >
                                                                Book Now
                                                            </Link>
                                                            <Link to={{pathname:`/doctor-detail/${slugify(m.first_name)}/${m.id}`}} className="btn btn-block btn-warning text-white font-weight-bold m-0 d-lg-none no-booking-btn">
                                                                Book Now
                                                            </Link>
                                                        </div>
                                                        <div className="col-6 col-lg-5 col-xl-4 top-arrow-dropdown dropdown mb-2 mb-lg-0">
                                                            <a href={m.map} className="btn btn-block btn-light text-white font-weight-bold d-none d-lg-block no-booking-btn " target="_blank">
                                                                View on map
                                                            </a>
                                                            <a href={m.map} className="btn btn-block btn-light text-white font-weight-bold m-0 d-lg-none no-booking-btn">
                                                                View on map
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 order-2 css-col-stats py-2 py-lg-0">
                                    <div className="row">
                                        <div className="my-1 col-6 col-lg-12">
                                            <div className="row align-items-center text-available">
                                                <span className="col-2 text-center d-flex justify-content-center align-items-center">
                                                {(m.gender == 'Male')? <i class="icon-male"></i> : <i class="icon-female"></i>}
                                                </span>
                                                <small className="col pl-0 font-weight-bold text-sm">{m.gender}</small>
                                            </div>
                                        </div>
                                        <div className="my-1 col-6 col-lg-12">
                                            <div className="row align-items-center">
                                                <span className="col-2 text-center d-flex justify-content-center align-items-center">
                                                <i className="icon-clock-6"></i>
                                                
                                                </span>
                                                <small className="col pl-0 text-sm">{m.experience}</small>
                                            </div>
                                        </div>
                                        <div className="my-1 col-6 col-lg-12">
                                            <div className="row align-items-center">
                                                <span className="col-2 text-center d-flex justify-content-center align-items-center">
                                                    {/* <svg viewBox="0 0 100 100" className="d-inline-block listing-svg" width="14px"> */}
                                                    {/* </svg> */}
                                                    <i className="icon-location-circled"></i>
                                                </span>
                                                <small className="col pl-0 text-sm text-truncate">{m.address}</small>
                                            </div>
                                        </div>
                                        <div className="my-1 col-6 col-lg-12">
                                            <div className="row align-items-center">
                                                
                                                {(m.centers)? m.centers.map(s => <span className="col-2 text-center d-flex justify-content-center align-items-center">{(s.fare)? <i className="icon-money"></i> :''}</span>):""}
                                                
                                                 {(m.centers)? m.centers.map(s => <small className="col pl-0 text-sm">{(s.fare)? 'Rs.' :''} {s.fare}</small>):""}
                                            </div>
                                        </div>
                                        <div className="my-1 col-6 col-lg-12">
                                            <div className="row align-items-center text-available ">
                                                <span className="col-2 text-center d-flex justify-content-center align-items-center">
                                                    <i className="icon-calendar-circled"></i>
                                                </span>
                                                <small className="col pl-0 font-weight-bold text-sm">Availability </small>
                                            </div>
                                        </div>
                                        <div className="my-1 col-12 col-lg-12">
                                            <div className="row align-items-center">
                                                {this.renderCenter(m.centers)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            );
        });
	}
}

export default List;