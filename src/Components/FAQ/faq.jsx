import React, {Component} from "react";
import { Link } from "react-router-dom";

class Faq extends Component{

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render(){
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

		<div className="container margin_60">
			<div className="row">
				<aside className="col-lg-3" id="sidebar">
						<div className="box_style_cat" id="faq_box">
							<ul id="cat_nav">
								<li><a href="#payment" className="active"><i className="icon_document_alt"></i>Payments</a></li>
								<li><a href="#tips"><i className="icon_document_alt"></i>Suggestions</a></li>
								<li><a href="#reccomendations"><i className="icon_document_alt"></i>Reccomendations</a></li>
								<li><a href="#terms"><i className="icon_document_alt"></i>Terms&amp;conditons</a></li>
								<li><a href="#booking"><i className="icon_document_alt"></i>Booking</a></li>
							</ul>
						</div>
						{/* <!--/sticky --> */}
				</aside>
				{/* <!--/aside --> */}
				
				<div className="col-lg-9" id="faq">
					<h4 className="nomargin_top">Payments</h4>
					<div role="tablist" className="add_bottom_45 accordion" id="payment">
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a data-toggle="collapse" href="#collapseOne_payment" aria-expanded="true"><i className="indicator icon_minus_alt2"></i>Introdocution</a>
								</h5>
							</div>

							<div id="collapseOne_payment" className="collapse show" role="tabpanel" data-parent="#payment">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a className="collapsed" data-toggle="collapse" href="#collapseTwo_payment" aria-expanded="false">
										<i className="indicator icon_plus_alt2"></i>Generative Modeling Review
									</a>
								</h5>
							</div>
							<div id="collapseTwo_payment" className="collapse" role="tabpanel" data-parent="#payment">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a className="collapsed" data-toggle="collapse" href="#collapseThree_payment" aria-expanded="false">
										<i className="indicator icon_plus_alt2"></i>Variational Autoencoders
									</a>
								</h5>
							</div>
							<div id="collapseThree_payment" className="collapse" role="tabpanel" data-parent="#payment">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
					</div>
					{/* <!-- /accordion payment --> */}
					
					<h4 className="nomargin_top">Suggestions</h4>
					<div role="tablist" className="add_bottom_45 accordion" id="tips">
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a data-toggle="collapse" href="#collapseOne_tips" aria-expanded="true"><i className="indicator icon_plus_alt2"></i>Introdocution</a>
								</h5>
							</div>

							<div id="collapseOne_tips" className="collapse" role="tabpanel" data-parent="#tips">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a className="collapsed" data-toggle="collapse" href="#collapseTwo_tips" aria-expanded="false">
										<i className="indicator icon_plus_alt2"></i>Generative Modeling Review
									</a>
								</h5>
							</div>
							<div id="collapseTwo_tips" className="collapse" role="tabpanel" data-parent="#tips">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a className="collapsed" data-toggle="collapse" href="#collapseThree_tips" aria-expanded="false">
										<i className="indicator icon_plus_alt2"></i>Variational Autoencoders
									</a>
								</h5>
							</div>
							<div id="collapseThree_tips" className="collapse" role="tabpanel" data-parent="#tips">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
					</div>
					{/* <!-- /accordion suggestions --> */}
					
					<h4 className="nomargin_top">Reccomendations</h4>
					<div role="tablist" className="add_bottom_45 accordion" id="reccomendations">
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a data-toggle="collapse" href="#collapseOne_reccomendations" aria-expanded="true"><i className="indicator icon_plus_alt2"></i>Introdocution</a>
								</h5>
							</div>

							<div id="collapseOne_reccomendations" className="collapse" role="tabpanel" data-parent="#reccomendations">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a className="collapsed" data-toggle="collapse" href="#collapseTwo_reccomendations" aria-expanded="false">
										<i className="indicator icon_plus_alt2"></i>Generative Modeling Review
									</a>
								</h5>
							</div>
							<div id="collapseTwo_reccomendations" className="collapse" role="tabpanel" data-parent="#reccomendations">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a className="collapsed" data-toggle="collapse" href="#collapseThree_reccomendations" aria-expanded="false">
										<i className="indicator icon_plus_alt2"></i>Variational Autoencoders
									</a>
								</h5>
							</div>
							<div id="collapseThree_reccomendations" className="collapse" role="tabpanel" data-parent="#reccomendations">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
					</div>
					{/* <!-- /accordion Reccomendations --> */}
					
					<h4 className="nomargin_top">Terms&amp;conditons</h4>
					<div role="tablist" className="add_bottom_45 accordion" id="terms">
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a data-toggle="collapse" href="#collapseOne_terms" aria-expanded="true"><i className="indicator icon_plus_alt2"></i>Introdocution</a>
								</h5>
							</div>

							<div id="collapseOne_terms" className="collapse" role="tabpanel" data-parent="#terms">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a className="collapsed" data-toggle="collapse" href="#collapseTwo_terms" aria-expanded="false">
										<i className="indicator icon_plus_alt2"></i>Generative Modeling Review
									</a>
								</h5>
							</div>
							<div id="collapseTwo_terms" className="collapse" role="tabpanel" data-parent="#terms">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a className="collapsed" data-toggle="collapse" href="#collapseThree_terms" aria-expanded="false">
										<i className="indicator icon_plus_alt2"></i>Variational Autoencoders
									</a>
								</h5>
							</div>
							<div id="collapseThree_terms" className="collapse" role="tabpanel" data-parent="#terms">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
					</div>
					{/* <!-- /accordion Terms --> */}
					
					<h4 className="nomargin_top">Booking</h4>
					<div role="tablist" className="add_bottom_45 accordion" id="booking">
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a data-toggle="collapse" href="#collapseOne_booking" aria-expanded="true"><i className="indicator icon_plus_alt2"></i>Introdocution</a>
								</h5>
							</div>

							<div id="collapseOne_booking" className="collapse" role="tabpanel" data-parent="#booking">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a className="collapsed" data-toggle="collapse" href="#collapseTwo_booking" aria-expanded="false">
										<i className="indicator icon_plus_alt2"></i>Generative Modeling Review
									</a>
								</h5>
							</div>
							<div id="collapseTwo_booking" className="collapse" role="tabpanel" data-parent="#booking">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
						<div className="card">
							<div className="card-header" role="tab">
								<h5 className="mb-0">
									<a className="collapsed" data-toggle="collapse" href="#collapseThree_booking" aria-expanded="false">
										<i className="indicator icon_plus_alt2"></i>Variational Autoencoders
									</a>
								</h5>
							</div>
							<div id="collapseThree_booking" className="collapse" role="tabpanel" data-parent="#booking">
								<div className="card-body">
									<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
								</div>
							</div>
						</div>
						{/* <!-- /card --> */}
					</div>
					{/* <!-- /accordion Booking --> */}

				</div>
				{/* <!-- /col --> */}
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
export default Faq;