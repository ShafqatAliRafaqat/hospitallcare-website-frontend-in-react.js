import React, {Component} from "react";
import { Link } from "react-router-dom";

class Confirm extends Component{

    render(){
		const mystyle = {
			strokeDasharray: "240px 240px",
			strokeDashoffset: "480px",
		  };
		const mystyle1 = {
			strokeDasharray: "50px 50px",
			strokeDashoffset: "0px",
		  };
        return(
            <>
            	<main>
		<div id="breadcrumb">
			<div className="container">
				<ul>
				<li><Link to="/">Home</Link></li>
					<li><Link to="/">Category</Link></li>
					<li>Page active</li>
				</ul>
			</div>
		</div>
		{/* <!-- /breadcrumb --> */}

		<div className="container margin_120">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<div id="confirm">
						<div className="icon icon--order-success svg add_bottom_15">
							<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
								<g fill="none" stroke="#8EC343" stroke-width="2">
									<circle cx="36" cy="36" r="35" style={mystyle}></circle>
									<path d="M17.417,37.778l9.93,9.909l25.444-25.393" style={mystyle1}></path>
								</g>
							</svg>
						</div>
					<h2>Thanks for your booking!</h2>
					<p>You'll receive a confirmation email at mail@example.com</p>
					</div>
				</div>
			</div>
			{/* <!-- /row --> */}
		</div>
		{/* <!-- /container --> */}
	</main>
	{/* <!-- /main --> */}
            </>
        );
    }
}
export default Confirm;