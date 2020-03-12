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
		var slugify         = require('slugify');
        const { treatment_data } = this.state;
		return treatment_data.map(m => {
			return(
				<div className="col-lg-3 col-md-4 col-6 text-center feature-item spin rounded py-3">
				<Link to={{pathname:`/treatment-detail/${slugify(m.name)}/${m.id}`}}>
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

// {/* <div className="col-lg-4">
// <div className="box_list wow fadeIn">
// 	<a href="#0" className="wish_bt"></a>
// 	<figure>
// 	<Link to={{pathname:`/treatment-detail/${m.id}`}}>
// 		{(m.picture) ? <img src={m.picture} alt="" className="img-fluid mx-auto d-block"  style={{width:"100%", height:"auto"}} /> : <img src="web_imgs/treatment.jpg" alt="" className="img-fluid mx-auto d-block" style={{width:"100%", height:"auto"}}/>}
// 		<div className="preview"><span>Read more</span></div>
// 	</Link>
// 	</figure>
// 	<div className="wrapper">
// 		<small>{m.focus_area}</small>
// 		<h3>{m.name}</h3>
// 		<p>{m.about}</p>
// 		<span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
// 		<a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt="" /></a>
// 	</div>
// 	<ul>
// 		<li><Link to={{pathname:`/treatment-detail/${m.id}`}}>View Details</Link></li>
// 		<li><Link to={{pathname:`/treatment-detail/${m.id}`}}></Link></li>

// 	</ul>
// </div>
// </div> */}

			);
		});
	}
}

export default List;