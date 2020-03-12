import React,{Component} from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import { connect } from "react-redux";

alertify.set('notifier', 'position', 'top-center');

// const Header = (props) => {
class Header extends Component{
    
    state = {
        name:window.location.hash,
    }
    renderRefreshPage = (e)=>{
        this.setState({
            name:e.target.name,
        })
        if(e.target.href == window.location.href){
            window.location.reload();
        }

    }
    
    render(){
        const { user } = this.props;
        const { name } = this.state;
        return(
            <>
                <header className="header_sticky sticky">
                <div id="app_div">
                    <a href="https://play.google.com/store/apps/details?id=com.hospitall.patientathospitall">
                        <div className="div-icon"><i className="icon-mobile-1 app-icon"></i></div>
                        <div className="text-app">Download Our User App Now. <span className="sp-right">X</span> <br/>
                            <span>A Comprehensive Healthcare Super App</span>
                        </div>
                    </a>
                </div>
                <div className="container">

                {/* <!--Navbar --> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand" >
                        <div id="logo_home">
                            <h1>
                                <Link to="/" onClick={this.renderRefreshPage} title="Find a Doctor">Find and book the best doctors in Pakistan</Link>
                            </h1>
                        </div>
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-item-margin-top">
                            <Link className={(name == '/') ? " nav-link active-nav" : "nav-link"} name="/" to="/" onClick={this.renderRefreshPage}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item nav-item-margin-top">
                            <Link className={(name == '/doctor-list') ? " nav-link active-nav" : "nav-link"} name="/doctor-list" to="/doctor-list" onClick={this.renderRefreshPage}>Doctors</Link>
                        </li>
                        <li className="nav-item nav-item-margin-top">
                            <Link className={(name == '/specialization-list') ? " nav-link active-nav" : "nav-link"} name="/specialization-list" to="/specialization-list" onClick={this.renderRefreshPage}>Specializations</Link>
                        </li>
                        <li className="nav-item nav-item-margin-top">
                            <Link className={(name == '/clinic-list') ? " nav-link active-nav" : "nav-link"} name="/clinic-list" to="/clinic-list" onClick={this.renderRefreshPage}>Clinics</Link>
                        </li>
                        <li className="nav-item nav-item-margin-top dropdown">
                            <a  className={(name == '/blogs' || name == '/vlogs' || name =='/videos') ? "nav-link dropdown-toggle active-nav" : "nav-link dropdown-toggle"}  href="#" id="mediahub" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Media Hub
                            </a>
                            <div className="dropdown-menu" aria-labelledby="mediahub">
                                <Link className={(name == '/blogs') ? " dropdown-item active-nav" : "dropdown-item"} name="/blogs" to="/blogs" onClick={this.renderRefreshPage}>Blogs</Link>
                                <Link className={(name == '/vlogs') ? " dropdown-item active-nav" : "dropdown-item"} name="/vlogs" to="/vlogs" onClick={this.renderRefreshPage}>Vlogs</Link>
                                <Link className={(name == '/videos') ? " dropdown-item active-nav" : "dropdown-item"} name="/videos" to="/videos" onClick={this.renderRefreshPage}>Videos</Link>
                            </div>
                        </li>
                        <li className="nav-item nav-item-margin-top dropdown">
                            <a  className={(name == '/' || name == '/contacts') ? "nav-link dropdown-toggle active-nav" : "nav-link dropdown-toggle"}  href="#" id="about" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            About Us
                            </a>
                            <div className="dropdown-menu" aria-labelledby="about">
                                <Link className={(name == '/about-us') ? " dropdown-item active-nav" : "dropdown-item"} name="/about-us" to="/about-us" onClick={this.renderRefreshPage}>About</Link>
                                <Link className={(name == '/contact-us') ? " dropdown-item active-nav" : "dropdown-item"} name="/contact-us" to="/contact-us" onClick={this.renderRefreshPage}>Contact Us</Link>
                            </div>
                        </li>
                        {(user != null)? 
                        <li className="nav-item nav-item-margin-top dropdown">

                            <a className={(name == '/approved-appointments' || name == '/pending-appointments' || name == '/customer-profile'|| name == '/current-lab-test'|| name == '/allergy-notes' || name == '/riskfactor-notes' || name == '/doctor-notes') ? "nav-link dropdown-toggle active-nav" : "nav-link dropdown-toggle"} to="#" id="loged-in" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {user.customer.name}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="loged-in">
                                <Link className={(name == '/approved-appointments') ? " dropdown-item active-nav" : "dropdown-item"} name="/approved-appointments" to="/approved-appointments" onClick={this.renderRefreshPage}>My Appointments</Link>
                                <Link className={(name == '/pending-appointments' ) ? " dropdown-item active-nav" : "dropdown-item"} name="/pending-appointments"  to="/pending-appointments" onClick={this.renderRefreshPage}>Pending Appointments</Link>
                                <Link className={(name == '/customer-profile'     ) ? " dropdown-item active-nav" : "dropdown-item"} name="/customer-profile"      to="/customer-profile" onClick={this.renderRefreshPage}>My Profile</Link>
                                <Link className={(name == '/current-lab-test'     ) ? " dropdown-item active-nav" : "dropdown-item"} name="/current-lab-test"      to="/current-lab-test" onClick={this.renderRefreshPage}>My Test</Link>
                                <Link className={(name == '/allergy-notes'        ) ? " dropdown-item active-nav" : "dropdown-item"} name="/allergy-notes"         to="/allergy-notes" onClick={this.renderRefreshPage}>Allergies</Link>
                                <Link className={(name == '/riskfactor-notes'     ) ? " dropdown-item active-nav" : "dropdown-item"} name="/riskfactor-notes"      to="/riskfactor-notes" onClick={this.renderRefreshPage}>Risk Factor</Link>
                                <Link className={(name == '/doctor-notes'         ) ? " dropdown-item active-nav" : "dropdown-item"} name="/doctor-notes"          to="/doctor-notes" onClick={this.renderRefreshPage}>Doctor Notes</Link>
                                <Link className="dropdown-item" to="/logout" onClick={this.renderRefreshPage}>Logout</Link>
                            </div>
                        </li>
                        :
                        <>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="signup-nav" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="nav-icons-span"><i className="pe-7s-add-user user-logo"></i><span>Register</span></div>
                            </a>
                            <div className="dropdown-menu m-top" aria-labelledby="signup-nav">
                                <Link className="dropdown-item" to="/register" onClick={this.renderRefreshPage}>User Registration</Link>
                                <Link className="dropdown-item"   to="/join-doctor" onClick={this.renderRefreshPage}>Doctor Registration</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="login-nav" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="nav-icons-span"><i className="pe-7s-user user-logo"></i><span>Login</span></div>
                            </a>
                            <div className="dropdown-menu m-top" aria-labelledby="login-nav">
                                <Link className="dropdown-item" to="/login" onClick={this.renderRefreshPage}>User Login</Link>
                                <Link className="dropdown-item" to="/doctor-signin" onClick={this.renderRefreshPage}>Doctor Login</Link>
                            </div>
                        </li>
                        </>
                        }
                        <li className="nav-item nav-item-margin-top app-nav">
                            <a href="https://play.google.com/store/apps/details?id=com.hospitall.patientathospitall">
                                <div className="div-icon"><i className="icon-mobile-1 app-icon"></i></div>
                                <div className="text-app">Download Our User App Now.<br/>
                                    <span>A Comprehensive Healthcare Super App</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item nav-item-margin-top app-nav">
                            <a href="https://play.google.com/store/apps/details?id=com.hospitall.drathospitall">
                                <div className="div-icon"><i className="icon-mobile-1 app-icon"></i></div>
                                <div className="text-app">Download Our DoctorALL App Now.<br/>
                                    <span>Now It's Easy To Handle Your Appointments</span>
                                </div>
                            </a>
                        </li>
                        </ul>
                    </div>
                </nav>
                {/* <!--/.Navbar --> */}
                </div>
            </header>
            </>
        );
    }
};
const mapStateToProps = state => {
    return {
        user: state.AuthReducers.user
    };
};


export default connect(
    mapStateToProps,
    null
)(Header);
