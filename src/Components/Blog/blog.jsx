import React, {Component} from "react";
import { Link } from "react-router-dom";

class Blog extends Component{

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
			<div className="main_title">
				<h1>Findoctor Blog</h1>
				<p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie. Sed ad debet scaevola, ne mel.</p>
			</div>
			<div className="row">
				<div className="col-lg-9">
					<article className="blog wow fadeIn">
						<div className="row no-gutters">
							<div className="col-lg-7">
								<figure>
									<Link to="/blog-page"><img src="http://via.placeholder.com/800x533.jpg" alt="" /><div className="preview"><span>Read more</span></div></Link>
								</figure>
							</div>
							<div className="col-lg-5">
								<div className="post_info">
									<small>20 Nov. 2017</small>
									<h3><Link to="/blog-page">Nec nihil menandri appellantur ut</Link></h3>
									<p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
									<ul>
										<li>
											<div className="thumb"><img src="http://via.placeholder.com/100x100.jpg" alt="" /></div> Jessica Hoops
										</li>
										<li><i className="icon_comment_alt"></i> 20</li>
									</ul>
								</div>
							</div>
						</div>
					</article>
					{/* <!-- /article --> */}

					<article className="blog wow fadeIn">
						<div className="row no-gutters">
							<div className="col-lg-7">
								<figure>
									<Link to="/blog-page"><img src="http://via.placeholder.com/800x533.jpg" alt="" /><div className="preview"><span>Read more</span></div></Link>
								</figure>
							</div>
							<div className="col-lg-5">
								<div className="post_info">
									<small>20 Nov. 2017</small>
									<h3><Link to="/blog-page">Nec nihil menandri appellantur ut</Link></h3>
									<p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
									<ul>
										<li>
											<div className="thumb"><img src="http://via.placeholder.com/100x100.jpg" alt="" /></div> Jessica Hoops
										</li>
										<li><i className="icon_comment_alt"></i> 20</li>
									</ul>
								</div>
							</div>
						</div>
					</article>
					{/* <!-- /article --> */}

					<article className="blog wow fadeIn">
						<div className="row no-gutters">
							<div className="col-lg-7">
								<figure>
									<Link to="/blog-page"><img src="http://via.placeholder.com/800x533.jpg" alt="" /><div className="preview"><span>Read more</span></div></Link>
								</figure>
							</div>
							<div className="col-lg-5">
								<div className="post_info">
									<small>20 Nov. 2017</small>
									<h3><Link to="/blog-page">Nec nihil menandri appellantur ut</Link></h3>
									<p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
									<ul>
										<li>
											<div className="thumb"><img src="http://via.placeholder.com/100x100.jpg" /></div> Jessica Hoops
										</li>
										<li><i className="icon_comment_alt"></i> 20</li>
									</ul>
								</div>
							</div>
						</div>
					</article>
					{/* <!-- /article --> */}

					<article className="blog wow fadeIn">
						<div className="row no-gutters">
							<div className="col-lg-7">
								<figure>
									<Link to="/blog-page"><img src="http://via.placeholder.com/800x533.jpg" alt="" /><div className="preview"><span>Read more</span></div></Link>
								</figure>
							</div>
							<div className="col-lg-5">
								<div className="post_info">
									<small>20 Nov. 2017</small>
									<h3><Link to="/blog-page">Nec nihil menandri appellantur ut</Link></h3>
									<p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
									<ul>
										<li>
											<div className="thumb"><img src="http://via.placeholder.com/100x100.jpg" /></div> Jessica Hoops
										</li>
										<li><i className="icon_comment_alt"></i> 20</li>
									</ul>
								</div>
							</div>
						</div>
					</article>
					{/* <!-- /article --> */}
					
					<nav aria-label="...">
						<ul className="pagination pagination-sm">
							<li className="page-item disabled">
								<a className="page-link" href="#" tabindex="-1">Previous</a>
							</li>
							<li className="page-item"><a className="page-link" href="#">1</a></li>
							<li className="page-item"><a className="page-link" href="#">2</a></li>
							<li className="page-item"><a className="page-link" href="#">3</a></li>
							<li className="page-item">
								<a className="page-link" href="#">Next</a>
							</li>
						</ul>
					</nav>
					{/* <!-- /pagination --> */}
				</div>
				{/* <!-- /col --> */}
				
				<aside className="col-lg-3">
					<div className="widget">
						<form>
							<div className="form-group">
								<input type="text" name="search" id="search" className="form-control" placeholder="Search..." />
							</div>
							<button type="submit" id="submit" className="btn_1"> Search</button>
						</form>
					</div>
					{/* <!-- /widget --> */}

					<div className="widget">
						<div className="widget-title">
							<h4>Recent Posts</h4>
						</div>
						<ul className="comments-list">
							<li>
								<div className="alignleft">
									<a href="#0"><img src="http://via.placeholder.com/160x160.jpg" alt="" /></a>
								</div>
								<small>11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>
							<li>
								<div className="alignleft">
									<a href="#0"><img src="http://via.placeholder.com/160x160.jpg" alt="" /></a>
								</div>
								<small>11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>
							<li>
								<div className="alignleft">
									<a href="#0"><img src="http://via.placeholder.com/160x160.jpg" alt="" /></a>
								</div>
								<small>11.08.2016</small>
								<h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
							</li>
						</ul>
					</div>
					{/* <!-- /widget --> */}

					<div className="widget">
						<div className="widget-title">
							<h4>Blog Categories</h4>
						</div>
						<ul className="cats">
							<li><a href="#">Treatments <span>(12)</span></a></li>
							<li><a href="#">News <span>(21)</span></a></li>
							<li><a href="#">Events <span>(44)</span></a></li>
							<li><a href="#">New treatments <span>(09)</span></a></li>
							<li><a href="#">Focus in the lab <span>(31)</span></a></li>
						</ul>
					</div>
					{/* <!-- /widget --> */}

					<div className="widget">
						<div className="widget-title">
							<h4>Popular Tags</h4>
						</div>
						<div className="tags">
							<a href="#">Medicine</a>
							<a href="#">Treatments</a>
							<a href="#">Events</a>
							<a href="#">Specialist</a>
							<a href="#">Pills</a>
							<a href="#">Cancer</a>
						</div>
					</div>
					{/* <!-- /widget --> */}
					
				</aside>
				{/* <!-- /aside --> */}
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
export default Blog;