import React, { Component } from "react";
import { Redirect, Route, Switch,BrowserRouter } from 'react-router-dom';
import FooterSection from "./Footer";
import NavBarSection from "./Header";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import alertify from "alertifyjs";
import { connect } from "react-redux";
import routes from "./../routes";
alertify.set('notifier', 'position', 'top-center');

class Layout extends Component {
    errorHandler = error => {

        let title = "Error";
        let message = "Something went wrong";
    
        if (error) {
          message = error.toString();
        }
    
        const { response } = error;
    
        if (response) {
    
          title = 'Error ' + response.status + ' - ' + response.statusText;
          message = response.data.message;
        }
    
        alertify.alert(title, message);
      }
    
    render() {
          return ( 
              <>
                  <BrowserRouter>
                  <NavBarSection />
                  
                      <Switch>
                      {/* <ScrollToTop> */}
                        {routes.map((route, idx) => {
                          return route.Component ? (
                                  <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => {
                                    if(route.path){
                                          return (
                                            <div style={{minHeight:"436px" , marginTop:"64px"}}>
                                              <route.Component alertify={alertify} {...props} {...this.props} errorHandler={this.errorHandler} />                                  
                                            </div>  
                                          );
                                      }
                                      return <Redirect to='/404-not-found' />;
                                  }}
                                  />     
                          )
                            : (null) 
                        },
                          )}
                          <Redirect to='/404-not-found' />
                          {/* </ScrollToTop> */}
                      </Switch>
                    
                    <FooterSection />
                    <MessengerCustomerChat
                    pageId="334061247107629"
                    appId="347537516095173"
                    htmlRef={window.location.pathname}
                  />
                  </BrowserRouter>
            </>
        );
      }
    }
    const mapStateToProps = state => {
      return {
          user: state.AuthReducers.user
      };
  };
  
  
  export default connect( mapStateToProps, null )(Layout);
