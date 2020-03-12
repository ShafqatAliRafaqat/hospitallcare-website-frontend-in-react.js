import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../Store/Actions/MediaHubAction";
import SearchPages from '../../Search/search_pages';
import {Helmet} from "react-helmet";
import moment from 'moment';

class BlogDetail extends Component{
	state = {
		isLoading	: true,
		recent_blogs:'',
		blog_data	:'',
		blog_categories	:'',
		
	};
	componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
	   		this.fetchBlog();
        }
    }
	componentDidMount() {
        this.fetchBlog();
	  }
	  
      fetchBlog = () => {

        this.setState({
            isLoading: true
        });

		let { fetchBlog, dispatch, errorHandler } = this.props;
		let blogId = this.props.match.params.blogId;
		fetchBlog(blogId).then(res => {
            this.setState({
                blog_data		: res.data.data,
                recent_blogs	: res.data.meta.recent_blogs,
                blog_categories	: res.data.meta.blog_categories,
			});
			window.scrollTo(0, 0);
            dispatch({
                type: actions.GET_BLOG,
                payload: res.data.data
            }); 
        }).catch(errorHandler).finally(() => {
            this.setState({
                isLoading: false
            });
        });
	};

	SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};

	recentBlogs = () =>{
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { recent_blogs } = this.state;
		var slugify = require('slugify');
		return recent_blogs.map(m => {
			var image = "https://support.hospitallcare.com/backend/uploads/blogs/"+m.picture
			return(
				<li>
					<div className="alignleft">
						<Link to={{ pathname:`/blog-detail/${slugify(m.title)}/${m.id}` }}><img src={image} alt={m.title} /></Link>
					</div>
					<small>{moment(m.updated_at).format('LL')}</small>
					<h3><Link to={{ pathname:`/blog-detail/${slugify(m.title)}/${m.id}` }} title="">{m.title}</Link></h3>
				</li>
			);	
		});
	};
	blogCategories = () =>{
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { blog_categories } = this.state;
		var slugify = require('slugify');
		return blog_categories.map(m => {
			return(
				<li><Link to={{ pathname:`/blog/${slugify(m.name)}/${m.category_id}` }}>{m.name} <span>({m.total_blogs})</span></Link></li>
			);	
		});
	};
	renderTags = () =>{
		let { blog_data } = this.state;	
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
		}
		if(blog_data.meta_tags != null){
			const tagArray = blog_data.meta_tags.split(",");
			return tagArray.map( m =>{
				return(<Link to="#" >{m}</Link>);
			});
		}
	}
    render(){
		let { blog_data } = this.state;	
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
		}
		var image = "https://support.hospitallcare.com/backend/uploads/blogs/"+blog_data.picture
        return(
            <>
				<Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					<meta name="keywords" content={blog_data.meta_tags}></meta>
					
    				<meta name="description" content={blog_data.meta_description} />
    				<meta name="author" content="Hospitall Care" />
					<title>{blog_data.meta_title}</title>
					<Link to='/blogs'></Link>
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
															<li><Link to="/blogs">Blogs</Link></li>
															<li>{blog_data.title}</li>
														</ul>
													</div>
												</div>
											</div>
								{this.SearchPages()}
							</div>
						</div>
					</div>
		<div className="container margin_60">
			<div className="row">
				<div className="col-lg-9">
					<div className="bloglist singlepost">
						<p><img alt={blog_data.title} className="img-fluid" src={image} /></p>
						<h1>{blog_data.title}</h1>
						<div className="postmeta">
							<ul>
								<li><Link to="/blogs"><i className="icon_folder-alt"></i> Collections</Link></li>
								<li><Link to="#" ><i className="icon_clock_alt"></i> { moment(blog_data.updated_at).format('LLLL')}</Link></li>
								<li><Link to="#" ><i className="icon_pencil-edit"></i> {blog_data.updated_by}</Link></li>
								<li><Link to="#" ><i className="icon_comment_alt"></i> (14) Comments</Link></li>
							</ul>
						</div>
						{/* <!-- /post meta --> */}
						<div className="post-content">
							<div className="dropcaps">
								<span dangerouslySetInnerHTML={{__html: blog_data.description}} />
							</div>
						</div>
						{/* <!-- /post --> */}
					</div>

					{/* <h5>Leave a Comment</h5>
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
					</form> */}
				</div>
				{/* <!-- /col --> */}
				
				<aside className="col-lg-3">
					
					<div className="widget">
						<div className="widget-title">
							<h4>Recent Posts</h4>
						</div>
						<ul className="comments-list">
							{this.recentBlogs()}
						</ul>
					</div>

					<div className="widget">
						<div className="widget-title">
							<h4>Blog Categories</h4>
						</div>
						<ul className="cats">
							{this.blogCategories()}
						</ul>
					</div>

					<div className="widget">
						<div className="widget-title">
							<h4>Popular Tags</h4>
						</div>
						<div className="tags">
							{this.renderTags()}
						</div>
					</div>
				</aside>
			</div>
		</div>
	</main>
            </>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch,
        fetchBlog: (blogId) => actions.fetchBlog(blogId),
    };
};

export default connect(mapDispatchToProps)(BlogDetail);