import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/SearchAction";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from '@material-ui/icons/Search';
// import ImageIcon from '@material-ui/icons/Image'; 



class SearchHeader extends Component {
  initState = {
    name: '',
    search: '',
    page: this.props.page,
  }
  state = {
    ...this.initState,
    isLoading: true,
    typing: false,
    typingTimeout: 0,
    timeout: 0,
  }
  constructor(props) {
    super(props);
    this.timeout = 0;
  }

  onChange(e) {
    var searchText = e.target.value; // this is the search text
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.getSearch(searchText);
    }, 400);
  }

  getSearch = (e) => {
    this.setState({
      isLoading: true
    });
    let { getSearch, dispatch ,errorHandler} = this.props;
    let search = e;
    getSearch(search).then(res => {
      if(res.data.message){
        this.setState({
          ...this.initState,
        });  
      }
      this.setState({
        ...this.initState,
        search: res.data.data
      });

      dispatch({
        type: actions.GET_ALL_SEARCH,
        payload: res.data.data
      });
    }).catch(errorHandler).finally(() => {
      this.setState({
        isLoading: false
      });
    });
  };

  datalist = () => {
    const { search } = this.state;
    let doctors = search.doctors;
    let specializations = search.specializations;
		var slugify = require('slugify');
    let centers = search.centers;
    if (!doctors) {
      return;
    }
    var specializations1= specializations.map(m => {
      return (
        <Link to={{pathname:`/treatment-detail/${slugify(m.name)}/${m.id}`}}>
        <ListItem key={m.id} className="search-list">
          <div>
            <SearchIcon className="search-icon"></SearchIcon>
          <span className="search-name">{m.name}</span>
          <span className="List_Align_Right" style={{ color:"#de0000" }}>Specialization</span>
          </div>

        </ListItem>
        </Link>
      );
    })

    var doctors1= doctors.map(m => {
      return (
        <Link to={{pathname:`/doctor-detail/${slugify(m.name)}/${m.id}`}}>
        <ListItem key={m.id} className="search-list">
          <div>
          {(m.picture) ?
          <img className="list-img" src={`https://support.hospitallcare.com/backend/uploads/doctors/${m.picture.picture}`} alt={m.name} />
          :
          (m.gender == 1)?
          <img src="web_imgs/Male.png" alt={m.name} className="list-img" />
          :
          <img src="web_imgs/Female.png" alt={m.name} className="list-img" />

          }

          <span className="search-name">{m.name}</span>
          <span className="List_Align_Right" style={{ color:"#0072bc" }}>Doctor</span>
          <ul className="focus_area_search"><li><span style={{ fontSize: "12px", fontWeight: "400" }}>{m.focus_area}</span></li></ul>
          </div>

        </ListItem>
        </Link>
      );
    })

    var centers1= centers.map(m => {
      return (
        <Link to={{pathname:`/center-detail/${slugify(m.name)}/${m.id}`}}>
        <ListItem key={m.id} className="search-list">
          <div>
          <SearchIcon className="search-icon"></SearchIcon>
          <span className="search-name">{m.name}</span>
          <span className="List_Align_Right" style={{ color:"#c71585" }}>Center</span>
          </div>
        </ListItem>
          </Link>
      );
    })
    if (specializations1.length != 0 || doctors1.length != 0 || centers1.length != 0) {
      return(
        <>
         <List  className="search-header-list"
            // style={{
            //   maxWidth: 542,
            //   minWidth: 542,
            //   position: 'absolute',
            //   right:'108px',
            //   top:'27px',
            //   overflow: 'auto',
            //   color: "black",
            //   maxHeight: 300,
            //   backgroundColor:"#ffffff",
            //   boxShadow:"#b3b3b3 0px 0px 5px 1px",

            // }}
          >
          {specializations1}
          {doctors1}
          {centers1}
          </List>
        </>
       )
    } else {
      return(
        <>
         <List  className="search-header-list"
         >
        <ListItem key={0} className="search-list">
          <div>
          <SearchIcon className="search-icon"></SearchIcon>
          <span className="search-name">No Search Found</span>

          </div>
        </ListItem>
          </List>
        </>
       )
    }

  }
  renderRefreshPage = (e)=>{
		// this.props.history.push(e.target.name);
    // window.location.reload();
  }
  render() {
    const { search,page } = this.state;
    return (
      <>
        <div className="hero_home version_1">
          <div className="content">
            <h3>{page}</h3>
            
              <span>
                Changing the way you perceive and receive healthcare,
              </span>
              <br /> 
              <span>while assuring exceptional patient experience and care.</span>
              <br />
              <br />
            <div id="custom-search-input">
              <div className="input-group">
                <input 
                type="text" 
                name="name" 
                className="search-query" 
                onChange={e => this.onChange(e)} 
                placeholder="Ex. Doctor, Specialization ...." 
                autoComplete="off"
                />
               <div >
                 {(search)?
                this.datalist()
                 :
                  ''
                 }

                </div>

                <input type="submit" className="btn_search" value="Search" />
              </div>
              <ul>
                <li>
                  <input type="radio" id="all" name="radio_search" value="all" checked />
                  <label htmlFor="all">All</label>
                </li>
                <li>
                    <Link to="doctor-list" className=" filter-button-style-label" style={{color:'#fff',border:"none",backgroundColor:"rgba(0, 0, 0, 0.3)" }} name="/doctor-list" >
											Doctors
										</Link>
                </li>
                <li>
                    <Link to="specialization-list" className="filter-button-style-label" style={{color:'#fff',border:"none",backgroundColor:"rgba(0, 0, 0, 0.3)" }} name="/specialization-list" >
										 	Specialization
										</Link>
                </li>
                <li>
                    <Link to="clinic-list" className="filter-button-style-label" style={{color:'#fff',border:"none",backgroundColor:"rgba(0, 0, 0, 0.3)" }} name="/clinic-list" >
											Clinics
										</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /Hero --> */}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
    getSearch: (search) => actions.getHomeSearch(search),
  };
};
export default connect(mapDispatchToProps)(SearchHeader);