import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/SearchAction";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from '@material-ui/icons/Search';
// import ImageIcon from '@material-ui/icons/Image'; 



class SearchPages extends Component {
    initState = {
        name    : '',
        search  : '',
    }
    state = {
        ...this.initState,
        isLoading   : true,
        typing      : false,
        typingTimeout: 0,
        timeout     : 0,
    }
    constructor(props) {
        super(props);
        this.timeout = 0;
    }

    onChange(e) {
        var searchText = e.target.value;
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.getSearch(searchText);
        }, 400);
    }

    getSearch = (e) => {
        this.setState({
            isLoading: true
        });
        let { getSearch, dispatch, errorHandler } = this.props;
        let search = e;
        getSearch(search).then(res => {
            if (res.data.message) {
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
        const { search }    = this.state;
        let doctors         = search.doctors;
        let specializations = search.specializations;
        let centers         = search.centers;
		var slugify         = require('slugify');
        
        if (!doctors) {
            return true;
        }
        var specializations1 = specializations.map(m => {
            return (
                <Link to={{ pathname: `/treatment-detail/${slugify(m.name)}/${m.id}` }}>
                    <ListItem key={m.id} className="search-list-pages">
                        <div>
                            <ul style={{ whiteSpace: "nowrap", overflow: 'hidden' }}>
                                <li style={{ display: "inline-block" }}> 
                                    <SearchIcon className="search-icon"> </SearchIcon>
                                </li>
                                <li style={{ display: "inline-block" }}>
                                    <span className="search-name">{m.name}</span>
                                </li>
                                <li>
                                    <span className="List_Align_Right" style={{ color: "#de0000", textAlign: "right" }}>Specialization</span>
                                </li>
                            </ul>
                        </div>
                    </ListItem>
                </Link>
            );
        })

        var doctors1 = doctors.map(m => {
            return (
                <Link to={{ pathname: `/doctor-detail/${slugify(m.name)}/${m.id}` }}>
                    <ListItem key={m.id} className="search-list-pages">
                        <div>
                            {(m.picture) ?
                                <img className="list-img" src={`https://support.hospitallcare.com/backend/uploads/doctors/${m.picture.picture}`} alt={m.name} />
                                :
                                (m.gender == 1)?
                                <img src="web_imgs/Male.png" alt="" className="list-img" />
                                :
                                <img src="web_imgs/Female.png" alt="" className="list-img" />

                            }
                            <span className="search-name">{m.name}</span>
                            <span className="List_Align_Right" style={{ color: "#0072bc" }}>Doctor</span>
                            <ul className="focus_area_search">
                                <li>
                                    <span style={{ fontSize: "12px", fontWeight: "400" }}>{m.focus_area}</span>
                                </li>
                            </ul>
                        </div>
                    </ListItem>
                </Link>
            );
        })

        var centers1 = centers.map(m => {
            return (
                <Link to={{ pathname: `/center-detail/${slugify(m.name)}/${m.id}` }}>
                    <ListItem key={m.id} className="search-list-pages">
                        <div>
                            <SearchIcon className="search-icon"></SearchIcon>
                            <span className="search-name">{m.name}</span>
                            <span className="List_Align_Right" style={{ color: "#c71585" }}>Center</span>
                        </div>
                    </ListItem>
                </Link>
            );
        })
        if (specializations1.length != 0 || doctors1.length != 0 || centers1.length != 0) {
            return (
                <>
                    <div className="clearfix">
                        <List className='small-search' style={{
                            maxWidth: 461,
                            minWidth: 460,
                            position: 'absolute',
                            right: '80px',
                            top: '44px',
                            overflow: 'auto',
                            color: "black",
                            maxHeight: 300,
                            zIndex: 2,
                            backgroundColor: "#ffffff",
                            boxShadow:"#b3b3b3 0px 0px 5px 1px",
                        }}>
                            {specializations1}
                            {doctors1}
                            {centers1}
                        </List>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="clearfix">
                    <List className='small-search' style={{
                        maxWidth: 461,
                        minWidth: 460,
                        position: 'absolute',
                        right: '80px',
                        top: '44px',
                        overflow: 'auto',
                        color: "black",
                        maxHeight: 300,
                        zIndex: 2,
                        backgroundColor: "#ffffff",
                        boxShadow:"#b3b3b3 0px 0px 5px 1px",

                    }}>
                        <ListItem key={99999} className="search-list">
                            <div>
                                <SearchIcon className="search-icon"></SearchIcon>
                                <span className="search-name">No Search Found</span>
                            </div>
                        </ListItem>
                    </List>
                    </div>
                </>
            )
        }

    }

    render() {
        const { search } = this.state;
        return (
            <>
                <div className="col-md-6">
                    <div className="search_bar_list">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={e => this.onChange(e)}
                            placeholder="Ex. Doctor, Specialization ...."
                            autoComplete="off"
                        />
                        <div>
                            {(search) ?
                                this.datalist()
                                :
                                ''
                            }
                        </div>
                        <input type="submit" value="Search" />
                    </div>
                </div>
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
export default connect(mapDispatchToProps)(SearchPages);