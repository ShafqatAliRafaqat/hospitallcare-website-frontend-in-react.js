import React, {Component} from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import {Helmet} from "react-helmet";
import SearchPages from '../Search/search_pages';

class About extends Component{
    state = {
        isLoading   : true,
        responsive  : {
            0: {
                items: 1,
                animateOut:false,
                nav:false,
            },
            600: {
                items: 3,
                animateOut:true,
                nav:true,
            },
            1000: {
                    animateOut:true,
                    items: 5,
                    nav:true,
            },
        },
    };
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};
    render(){
        return(
            <>
                <Helmet>
						<meta charSet="utf-8" />
						<meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="keywords" content="contact us,about us,hospitall,careALL,"></meta>
					    
						<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
						<meta name="description" content="About Us. Welcome to HospitALL | Leadership Team | Our Partners | hospitallcare.com is Pakistan’s premier digital healthcare platform that aims to revolutionize the local healthcare market. It connects patients with the right doctors and enables the doctors to optimize their medical practices via their practice management software." />
						<meta name="author" content="Hospitall Care" />
						<title>About Us. Welcome to HospitALL | Leadership Team | Our Partners | hospitallcare.com is Pakistan’s premier digital healthcare platform that aims to revolutionize the local healthcare market. It connects patients with the right doctors and enables the doctors to optimize their medical practices via their practice management software.</title>
				    <Link to="/about-us"></Link>
            	</Helmet>
            <main>
            <div id="results">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                        <div id="breadcrumb">
                            <div className="container">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {this.SearchPages()}
                </div>
            </div>
        </div>
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 ">
                        <h4>About</h4>
                    </div>
                </div>
            </div>
            </main>
            <div className="white-container">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3>Welcome to HospitALL</h3>
                    </div>
                    <hr className="shine hr-shine"></hr>
                </div>
                <div className="p-about text-justify">
                    <p> <strong>HospitALL</strong> was initiated nearly a year ago by <strong>Ayub Ghauri</strong>, Executive Director of Netsol Technologies, 
                        one of the biggest IT company of Pakistan. The goal was to create a self-sustainable and accessible 
                        <strong>healthcare</strong> system in Pakistan and to lead the <strong>healthcare</strong> industry towards a more effective and efficient 
                        system, making things easier for all stakeholders involved.
                    </p>
                    <p>
                    At <strong>HospitALL</strong> we see ourselves as solution providers of the <strong>healthcare</strong> industry. We take pride in our state 
                    of the art partner clinics and specialized medical care providers. By being the prominent reference point in 
                    <strong>healthcare</strong> we are creating a platform that connects, cures and provides ease of service. <strong>HospitALL</strong> is working to 
                    bring all those involved in the industry on a single platform. We are establishing systems, that will aid us in 
                    providing the right kind of medical assistance in the hour of chaos.<br></br>
                    We aim to be market drivers, our objective is to not only disrupt the <strong>healthcare</strong> market but also create change in 
                    terms of mindsets. We firmly believe in the new way, which we define as an emphasis on preventive care in order to 
                    stimulate value addition for all. Throughout our organization, we follow a philosophy which rewards and nurtures work 
                    ethic, where everyone is committed to our principles of care, cure, and support. We believe in engendering a mindset 
                    change that is geared towards preventative care.
                    </p>
                    <p>
                    Our clients get unwavering support from us and we promise to put them at the center of everything we do. <strong>HospitALL</strong>  
                    will help our clients make a health promise and stick to it – as they are important! Through the creation of this 
                    atmosphere we are the future of <strong>healthcare</strong>.
                    </p>
                </div>
            </div>
            </div>
            <div className="second-container">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>Leadership Team</h3>
                        </div>
                        <hr className="shine hr-shine"></hr>
    <section id="team" className="pb-5">
    <div className="container">
        <div className="row">
            {/* <!-- Team member  1--> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="web_imgs/ayubGhauri.jpg" alt="Ayub Ghauri"/></p>
                                    <h4 className="card-title">Ayub Ghauri</h4>
                                    <h6 className="card-text h6-team">Founder / CEO</h6>
                                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Ayub Ghauri</h4>
                                    <p className="card-text">Mr. Ayub Ghauri is a seasoned business leader with over 25 years blend of rich experience in 
                                    Marketing, Branding, Business Development and Entrepreneurship. He has worked with well-renowned organizations in 
                                    the IT , Education, Health, Electronic Media, and Fashion industries of which around 20 years in UK with NETSOL Technologies, Inc.</p>
                                </div>
                                <hr className="shine2 hr-shine2"></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member 1 --> */}
            {/* <!-- Team member 2 --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="web_imgs/shahid-javed-burki.jpg" alt="Shahid Javed Burki"/></p>
                                    <h4 className="card-title">Shahid Burki</h4>
                                    <h6 className="card-text h6-team">Board of Director</h6>
                                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Shahid Burki</h4>
                                    <p className="card-text">Shahid Javed Burki is a Pakistani American professional economist who has served as a 
                                    Vice-President of the World Bank and as de facto Finance Minister of Pakistan on a caretaker basis. He has written extensively on economic development and on the political history of Pakistan. </p>
                                </div>
                                <hr className="shine2 hr-shine2"></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member 2 --> */}
            {/* <!-- Team member 3 --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="web_imgs/najam-1.jpg" alt="Shahid Najam"/></p>
                                    <h4 className="card-title">Shahid Najam</h4>
                                    <h6 className="card-text h6-team">Board of Director</h6>
                                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Shahid Najam</h4>
                                    <p className="card-text">Mr. Najam is the Vice Chairman of BIPP. He has four Masters including LLM and MSc. Public 
                                    Policy form London School of Economics, UK and MSc. Rural Development from Wye College London. He has more than 39 
                                    years of experience (17 years with Government of Pakistan and more than 22 years with the UN System) in policy and 
                                    strategy formulation.</p>
                                </div>
                                <hr className="shine2 hr-shine2"></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member 3 --> */}
            {/* <!-- Team member 4 --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="web_imgs/Najeeb-Ghauri.jpg" alt="Najeeb Ghauri"/></p>
                                    <h4 className="card-title">Najeeb Ghauri</h4>
                                    <h6 className="card-text h6-team">Board of Advisory</h6>
                                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Najeeb Ghauri</h4>
                                    <p className="card-text">Najeeb Ghauri is the founder and chief executive of NetSol Technologies Inc., 
                                    a Calabasas software company that makes a lot of its money from a program widely used in automobile leasing. 
                                    Its customers include automakers Mercedes-Benz, Volkswagen, BMW, Nissan and Hyundai. </p>
                                </div>
                                <hr className="shine2 hr-shine2"></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member 4 --> */}
            {/* <!-- Team member 5 --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="web_imgs/Sairah.jpg" alt="Saira Burki"/></p>
                                    <h4 className="card-title">Saira Burki</h4>
                                    <h6 className="card-text h6-team">Board of Advisory</h6>
                                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Saira Burki</h4>
                                    <p className="card-text">Sairah is Senior Policy Director at Structured Finance Industry Group (SFIG). She focuses on 
                                    regulation that have broad impact across all ABS asset classes. Her agenda includes such areas as capital and 
                                    liquidity, risk retention, Volcker, Regulation AB II, marketplace lending, and blockchain technology. Sairah 
                                    has also co-authored several articles on securitization and speaks regularly at industry conferences.</p>
                                </div>
                                <hr className="shine2 hr-shine2"></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member 5 --> */}
            {/* <!-- Team member 6 --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="web_imgs/Naeem-Ghuri.jpg" alt="Naeem Ghauri"/></p>
                                    <h4 className="card-title">Naeem Ghauri</h4>
                                    <h6 className="card-text h6-team">Board of Advisory</h6>
                                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Naeem Ghauri</h4>
                                    <p className="card-text">Naeem Ghauri is a founding member of NetSol Technologies Inc., a Global provider of 
                                    end to end IT solutions for Leasing and Finance Industry. His Clients are the Global Who's Who of Captive 
                                    Auto Finance Companies as well as specialist Banks lending into Asset and Auto Finance for Large Enterprises, 
                                    SME's and Consumers. </p>
                                </div>
                                <hr className="shine2 hr-shine2"></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member 6 --> */}



        </div>
    </div>
</section>
                    </div>
                </div>
            </div>
            
            <div className="white-container">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3>Our Partners</h3>
                    </div>
                    <hr className="shine hr-shine"></hr>
                </div>
                <div className="col-12 text-center">
                <OwlCarousel
                    id          = "reccomended"
                    className   = "owl-carousel owl-theme owl-loaded owl-drag owl-item cloned"
                    loop        = {true}
                    margin      = {2}
                    items       = {5}
                    responsive  = {this.state.responsive}
                    autoplay    = {true}
                    animateOut  = {true}
                    center      = {true}
                    nav         = {true}                    
                    >

                    <div className="item ">
                    <Link>
                        <img className="logos-img" src="web_imgs/logos/Advance-Hair-Center-400x300.jpg" alt="Advance Hair Center"  width="200px"  height="300px" />
                    </Link>
                    </div>

                    <div className="item">
                    <Link>
                    <img className="logos-img" src="web_imgs/logos/CosmoLux-400x300.jpg" alt="CosmoLux"  width="200px"  height="300px" />
                    </Link>
                    </div>
                    <div className="item">
                    <Link>
                    <img className="logos-img" src="web_imgs/logos/Doctor-Hospital-400x300.jpg" alt="Doctor Hospital"  width="200px"  height="300px" />
                    </Link>
                    </div>
                    <div className="item">
                    <Link>
                        <img  className="logos-img"src="web_imgs/logos/Netsol-400x300.jpg" alt="Netsol"  width="200px"  height="300px" />
                    </Link>
                    </div>
                    <div className="item">
                    <Link>
                        <img className="logos-img" src="web_imgs/logos/NSpire-400x300.jpg" alt="NSpire"  width="200px"  height="300px" />
                    </Link>
                    </div>
                    <div className="item">
                    <Link>
                        <img className="logos-img" src="web_imgs/logos/Servaid--400x300.jpg" alt="Servaid"  width="200px"  height="300px" />
                    </Link>
                    </div>
                </OwlCarousel>
                </div>
            </div>
            </div>

            </>
        );
    }
}
export default About;