import React, {Component} from "react";
import { Link } from "react-router-dom";

class BlogPage extends Component{

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
				<div className="col-lg-9">
					<div className="bloglist singlepost">
						<p><img alt="" className="img-fluid" src="http://via.placeholder.com/800x400.jpg" /></p>
						<h1>Medical treatments</h1>
						<div className="postmeta">
							<ul>
								<li><Link to="/"><i className="icon_folder-alt"></i> Collections</Link></li>
								<li><Link to="/" ><i className="icon_clock_alt"></i> 23/12/2015</Link></li>
								<li><Link to="/" ><i className="icon_pencil-edit"></i> Admin</Link></li>
								<li><Link to="/" ><i className="icon_comment_alt"></i> (14) Comments</Link></li>
							</ul>
						</div>
						{/* <!-- /post meta --> */}
						<div className="post-content">
							<div className="dropcaps">
								<p>Aorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							</div>

							<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
						</div>
						{/* <!-- /post --> */}
					</div>
					{/* <!-- /single-post --> */}

					<div id="comments">
						<h5>Comments</h5>
						<ul>
							<li>
								<div className="avatar">
									<Link to="/" ><img src="http://via.placeholder.com/150x150.jpg" alt="" />
									</Link>
								</div>
								<div className="comment_right clearfix">
									<div className="comment_info">
										By <Link to="/" >Anna Smith</Link><span>|</span>25/10/2019<span>|</span><Link to="/" >Reply</Link>
									</div>
									<p>
										Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam vel enim ipsum, et congue ante.
									</p>
								</div>
								<ul className="replied-to">
									<li>
										<div className="avatar">
											<Link to="/" ><img src="http://via.placeholder.com/150x150.jpg" alt="" />
											</Link>
										</div>

										<div className="comment_right clearfix">
											<div className="comment_info">
												By <Link to="/" >Anna Smith</Link><span>|</span>25/10/2019<span>|</span><Link to="/" >Reply</Link>
											</div>
											<p>
												Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam vel enim ipsum, et congue ante.
											</p>
											<p>
												Aenean iaculis sodales dui, non hendrerit lorem rhoncus ut. Pellentesque ullamcorper venenatis elit idaipiscingi Duis tellus neque, tincidunt eget pulvinar sit amet, rutrum nec urna. Suspendisse pretium laoreet elit vel ultricies. Maecenas ullamcorper ultricies rhoncus. Aliquam erat volutpat.
											</p>
										</div>
										<ul className="replied-to">
											<li>
												<div className="avatar">
													<Link to="/" ><img src="http://via.placeholder.com/150x150.jpg" alt="" />
													</Link>
												</div>

												<div className="comment_right clearfix">
													<div className="comment_info">
														By <Link to="/" >Anna Smith</Link><span>|</span>25/10/2019<span>|</span><Link to="/" >Reply</Link>
													</div>
													<p>
														Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam vel enim ipsum, et congue ante.
													</p>
													<p>
														Aenean iaculis sodales dui, non hendrerit lorem rhoncus ut. Pellentesque ullamcorper venenatis elit idaipiscingi Duis tellus neque, tincidunt eget pulvinar sit amet, rutrum nec urna. Suspendisse pretium laoreet elit vel ultricies. Maecenas ullamcorper ultricies rhoncus. Aliquam erat volutpat.
													</p>
												</div>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<div className="avatar">
									<Link to="/" ><img src="http://via.placeholder.com/150x150.jpg" alt="" />
									</Link>
								</div>

								<div className="comment_right clearfix">
									<div className="comment_info">
										By <Link to="/" >Anna Smith</Link><span>|</span>25/10/2019<span>|</span><Link to="/" >Reply</Link>
									</div>
									<p>
										Cursus tellus quis magna porta adipiscin
									</p>
								</div>
							</li>
						</ul>
					</div>

					<hr />

					<h5>Leave a Comment</h5>
					<form>
						<div className="form-group">
							<input type="text" name="name" id="name2" className="form-control" placeholder="Name" />
						</div>
						<div className="form-group">
							<input type="text" name="email" id="email2" className="form-control" placeholder="Email" />
						</div>
						<div className="form-group">
							<input type="text" name="email" id="website3" className="form-control" placeholder="Website" />
						</div>
						<div className="form-group">
							<textarea className="form-control" name="comments" id="comments2" rows="6" placeholder="Message Below"></textarea>
						</div>
						<div className="form-group">
							<button type="submit" id="submit2" className="btn_1"> Submit</button>
						</div>
					</form>
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
									<Link to="/"><img src="http://via.placeholder.com/160x160.jpg" alt="" /></Link>
								</div>
								<small>11.08.2016</small>
								<h3><Link to="/" title="">Verear qualisque ex minimum...</Link></h3>
							</li>
							<li>
								<div className="alignleft">
									<Link to="/"><img src="http://via.placeholder.com/160x160.jpg" alt="" /></Link>
								</div>
								<small>11.08.2016</small>
								<h3><Link to="#" title="">Verear qualisque ex minimum...</Link></h3>
							</li>
							<li>
								<div className="alignleft">
									<Link to="/"><img src="http://via.placeholder.com/160x160.jpg" alt="" /></Link>
								</div>
								<small>11.08.2016</small>
								<h3><Link to="#" title="">Verear qualisque ex minimum...</Link></h3>
							</li>
						</ul>
					</div>
					{/* <!-- /widget --> */}

					<div className="widget">
						<div className="widget-title">
							<h4>Blog Categories</h4>
						</div>
						<ul className="cats">
							<li><Link to="/" >Treatments <span>(12)</span></Link></li>
							<li><Link to="/" >News <span>(21)</span></Link></li>
							<li><Link to="/" >Events <span>(44)</span></Link></li>
							<li><Link to="/" >New treatments <span>(09)</span></Link></li>
							<li><Link to="/" >Focus in the lab <span>(31)</span></Link></li>
						</ul>
					</div>
					{/* <!-- /widget --> */}

					<div className="widget">
						<div className="widget-title">
							<h4>Popular Tags</h4>
						</div>
						<div className="tags">
							<Link to="/" >Medicine</Link>
							<Link to="/" >Treatments</Link>
							<Link to="/" >Events</Link>
							<Link to="/" >Specialist</Link>
							<Link to="/" >Pills</Link>
							<Link to="/" >Cancer</Link>
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
            </>
        );
    }
}
export default BlogPage;