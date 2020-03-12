import React,{Component} from 'react';
import SearchHeader from "../Home/search_header"; 
import {Helmet} from "react-helmet";
class NotFound extends Component{
	state = {
		isLoading: true,
	}
    SearchHeader = () => {
		let page 	=	"404 Page Not Found";
        return <SearchHeader page = {page}/>
    }
    render(){
        return(
            <>
                <Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					<meta name="keywords" content="Hospitall,404,page not found"></meta>
					
    				<meta name="description" content="List of top doctors in pakistan- Book an appointment with top doctors" />
    				<meta name="author" content="Hospitall Care" />
					<title>Top Doctors In Pakistan - Book an appointment with top doctors</title>
					<link rel="canonical" href="https://hospitallcare.com" />
            	</Helmet>
				<main>
					{this.SearchHeader()}
				</main>
            </>
        );
    }
} 
export default (NotFound);
