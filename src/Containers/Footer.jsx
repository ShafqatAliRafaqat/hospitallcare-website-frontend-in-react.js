import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../Store/Actions/TreatmentAction";

class Footer extends Component {
    state = {
        isLoading       :   true,
        specializations :   '',
    }
    componentDidMount(){
        this.getSpecializations();
    }
    renderRefreshPage = (e)=>{
        if(e.target.href == window.location.href){
            window.location.reload();
        }
    }
    getSpecializations = () => {
        this.setState({
            isLoading   :   false,
        });
        let {getSpecializations,errorHandler}   =   this.props;
        getSpecializations().then(res => {
            this.setState({
                specializations: res.data.top_Specializations_names,
            })
        }).catch(errorHandler).finally(()=>{
            this.setState({
                isLoading: false
            });
        });
    };
    render() {
		var slugify         = require('slugify');
        const {specializations} = this.state;
        return (
            <footer className="bg-dark">
            {/* <footer className="bg-light"> */}
                <div className="container footer-container">
                    <div className="row py-4">
                        <div className="col-12 col-sm-6">
                            {/* <h1><a title="Findoctor" href="/">HospitALL</a></h1> */}
                            <img src="img/logo.png" className="footer-logo img-responsive" alt="HospitALL Care"/>
                            <p className="app-p-footer">Book appointments with the best 
                            Doctors and Specialists such as Gynecologists, Skin Specialists, Child Specialists, 
                            Surgeons, etc. in Pakistan conveniently.</p>
                            <h4 className="app-h4-footer"> Download Now! </h4>
                            <div className="app_buttons wow  pb-4" data-wow-offset="100">
                            {/* <a target="_blank" href="https://play.google.com/store/apps/details?id=com.hospitall.patientathospitall" className="fadeIn "><img src="img/apple_app.png" className="app-link-img" alt="" width="150" height="50" data-retina="true"  /></a> */}
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.hospitall.patientathospitall" className="fadeIn"><img src="img/google_play_app.png" alt="HospitALL Care" width="150" height="50" data-retina="true" /></a>
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 pt-md-3">
                            <div className="row">
                                <div className="col-8">
                                    <h6 className="h6-footer">Specializations</h6>
                                    <ul className="links">
                                        {(specializations) ?
                                            specializations.map(m => <li ><Link className="link-footer" to={{ pathname: `/treatment-detail/${slugify(m.name)}/${m.id}` }}>Best {m.name} Doctors In Lahore</Link></li>)
                                            :
                                            ''}
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h6 className="h6-footer">Pages</h6>
                                    <ul className="links">
                                        <li><Link className="link-footer" to="/about-us"            name = "/about-us"              onClick={this.renderRefreshPage}>About us</Link></li>
                                        <li><Link className="link-footer" to="/doctor-list"         name = "/doctor-list"           onClick={this.renderRefreshPage}>Doctors</Link></li>
                                        <li><Link className="link-footer" to="/specialization-list" name = "/specialization-list"   onClick={this.renderRefreshPage}>Specializations</Link></li>
                                        <li><Link className="link-footer" to="/clinic-list"         name = "/clinic-list"           onClick={this.renderRefreshPage}>Clinics</Link></li>
                                        <li><Link className="link-footer" to="/contact-us"          name = "/contact-us"            onClick={this.renderRefreshPage}>Contact Us</Link></li>
                                        <li><Link className="link-footer" to="/privacy-policy"      name = "/privacy-policy"        onClick={this.renderRefreshPage}>Privacy policy</Link></li>
                                        <li><Link className="link-footer" to="/terms-and-conditions"name = "/terms-and-conditions"  onClick={this.renderRefreshPage}>Terms &amp; Conditions</Link></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className=" my-1 hr-border"></hr>
                <div className="container footer-container">
                    <div className="row py-4">
                        <div className="col-lg-6 col-sm-12 col-lg-auto text-side-left">
                            <p className="p-btm-footer m-0">
                                &copy; 2018 - 2020 
                                <a href="/" className="pl-1 hospitall-color">HospitALL-Care to Cure</a> 
                                <a href="/privacy-policy" className=" pl-1 a-btm-footer text-sm">Privacy policy</a> | 
                                <a href="/terms-and-conditions" className=" pl-1 a-btm-footer text-sm">Terms &amp; Conditions</a>
                                {/* <a href="https://www.hospitallcare.com/contact/" className=" pl-1 a-btm-footer text-sm">Contact us</a> */}
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-lg-auto text-side-right">
                            <span className="p-btm-footer">Connect with us Through</span>
                            <a className="link-footer" href="https://www.facebook.com/HospitALLOfficial/" target="_blank"><i className="icon-facebook-squared-1 footer-icon"></i></a>
                            <a className="link-footer" href="https://www.instagram.com/hospitallofficial/"><i className=" icon-instagram-filled footer-icon footer-icon-insta"></i></a>
                            <a className="link-footer" href="mailto:hello@hospitall.com"><i className="icon-email footer-icon"></i></a>
                            <a className="link-footer" href="tel://03222555600"><i className="icon-phone-squared footer-icon"></i></a>

                        </div>                        
                    </div>
                </div>
            </footer>

        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        dispatch : dispatch,
        getSpecializations: () => actions.getSpecialization(),
    };
};
export default connect(mapDispatchToProps)(Footer);