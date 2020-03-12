import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../Store/Actions/MediaHubAction";
import SearchPages from '../../Search/search_pages';
import {Helmet} from "react-helmet";
import moment from 'moment';

class VideoDetail extends Component{

	state = {
		isLoading	: true,
		recent_videos:'',
		video_data	:'',
	};
	componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
	   		this.fetchVideo();
        }
    }
	componentDidMount() {
        this.fetchVideo();
	  }
	  
      fetchVideo = () => {

        this.setState({
            isLoading: true
        });

		let { fetchVideo, dispatch, errorHandler } = this.props;
		let videoId = this.props.match.params.videoId;
		fetchVideo(videoId).then(res => {
            this.setState({
                video_data		: res.data.data,
                recent_videos	: res.data.meta.recent_videos,
			});
			window.scrollTo(0, 0);
            dispatch({
                type: actions.GET_VIDEO,
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
	recentVideos = () =>{
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { recent_videos } = this.state;
		var slugify = require('slugify');
		return recent_videos.map(m => {
			return(
				<li className="mb-4">
					<div className="box_list wow fadeIn">
						<figure>
						<Link to={{pathname:`/video-detail/${slugify(m.title)}/${m.id}`}}>
							<div className="embed-responsive embed-responsive-16by9">
  								<iframe className="embed-responsive-item"  src={m.link} allowfullscreen></iframe>
							</div>
							<div className="preview"><span>Read more</span></div>
						</Link>
						</figure>
					</div>
					<small>{moment(m.updated_at).format('LL')}</small>
					<h3><Link to={{ pathname:`/video-detail/${slugify(m.title)}/${m.id}` }} title="">{m.title}</Link></h3>
				</li>
			);	
		});
	};
	renderTags = () =>{
		let { video_data } = this.state;	
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
		}
		if(video_data.meta_tags != null){
			const tagArray = video_data.meta_tags.split(",");
			return tagArray.map( m =>{
				return(<Link to="#" >{m}</Link>);
			});
		}
	}
    render(){
		const { video_data } = this.state;
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
        return(
            <>
				<Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="keywords" content={video_data.meta_tags}></meta>
					
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    				<meta name="description" content={video_data.meta_description} />
    				<meta name="author" content="Hospitall Care" />
					<title>{video_data.meta_title}</title>
					<Link to='/videos'></Link>
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
															<li><Link to="/videos">Videos</Link></li>
															<li>{video_data.meta_title}</li>
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
									<p>
										<div className="embed-responsive embed-responsive-16by9">
  											<iframe className="embed-responsive-item"  src={video_data.link} allowfullscreen></iframe>
										</div>
									</p>
									<h1>{video_data.title}</h1>
									<div className="postmeta">
										<ul>
											<li><Link to="/vlogs"><i className="icon_folder-alt"></i> Collections</Link></li>
											<li><Link to="#" ><i className="icon_clock_alt"></i> { moment(video_data.updated_at).format('LLLL')}</Link></li>
											<li><Link to="#" ><i className="icon_pencil-edit"></i> {video_data.updated_by}</Link></li>
											<li><Link to="#" ><i className="icon_comment_alt"></i> (14) Comments</Link></li>
										</ul>
									</div>
									{/* <!-- /post meta --> */}
									<div className="post-content">
										<div className="dropcaps">
											<span dangerouslySetInnerHTML={{__html: video_data.description}} />
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
										{this.recentVideos()}
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
        fetchVideo: (id) => actions.fetchVideo(id),
    };
};

export default connect(mapDispatchToProps)(VideoDetail);