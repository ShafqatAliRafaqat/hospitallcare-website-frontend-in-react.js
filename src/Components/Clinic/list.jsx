import React, {Component} from "react";
import { Link } from "react-router-dom";

class List extends Component{
    initState = {
        ...this.props,
    };
    state = {
        ...this.initState
    };
	render(){
		var slugify = require('slugify');
        const { center_data } = this.state;
		return center_data.map(m => {
			return(
				<>
				{/* Laptop View */}
				<div className="col-lg-3 col-md-4 clinics-main text-center feature-item spin rounded py-3">
					<div className="shadow list-card center-card">
						{/* <button className="btn btn-sm btn-doctors">{m.count_doctors} Doctors</button> */}
						<Link to={{pathname:`/center-detail/${slugify(m.name)}/${m.id}`}}>

						<div className="img-padding">
						<div className="circle">
							{(m.picture) ?  <img src={m.picture} alt={m.name}/>: <img src="https://support.hospitallcare.com/backend/web_imgs/specialization/32.svg" alt={m.name}/>}
							{/* // <img src="https://support.hospitallcare.com/backend/web_imgs/specialization/32.svg" alt=""/> */}
						</div>
						</div>
						<h6 className="h6-center-list">{m.name}</h6>	
						<small className=" btn-block text-truncate">{m.focus_area}</small>

						</Link>

						<hr className="hr-card"></hr>
						<div className="row">
							<div className="col-6 col-sm-6 text-left text-12 border-right"><a target="_blank" href={m.map} >View on map</a></div>
							<div className="col-6 col-sm-6 text-right text-12 border-left"><Link to={{pathname:`/center-detail/${slugify(m.name)}/${m.id}`}}>{m.count_doctors} Doctors</Link></div>
						</div>
					</div>
				</div>


				{/* Mobile View */}
				<div className="col-6 text-center clinics-mobile feature-item spin rounded py-3">
					<Link to={{pathname:`/center-detail/${slugify(m.name)}/${m.id}`}}>
					<div className="shadow list-card list-card-media specialization-card">
						<div className="img-padding img-media">
						<div className="circle">
							{(m.picture) ?  <img src={m.picture} alt={m.name}/>: <img src="https://support.hospitallcare.com/backend/web_imgs/specialization/32.svg" alt={m.name}/>}
							{/* // <img src="https://support.hospitallcare.com/backend/web_imgs/specialization/32.svg" alt=""/> */}
						</div>
						</div>
						<h6 className="h6-center-list h6-media">{m.name}</h6>
					</div>
					</Link>
				</div>

				</>
			);
		});
	}
}

export default List;