import React, {Component} from "react";
import { Link } from "react-router-dom";

class Booking extends Component{

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
						<div className="container margin_60">
							<div className="row">
								<div className="col-xl-8 col-lg-8">
									<div className="box_general_3 cart">
									<div className="message">
										<p>Exisitng Customer? <a href="#0">Click here to login</a></p>
									</div>
									<div className="form_title">
										<h3><strong>1</strong>Your Details</h3>
										<p>
											Mussum ipsum cacilds, vidis litro abertis.
										</p>
									</div>
									<div className="step">
										<div className="row">
											<div className="col-md-6 col-sm-6">
												<div className="form-group">
													<label>First name</label>
													<input type="text" className="form-control" id="firstname_booking" name="firstname_booking" placeholder="Jhon" />
												</div>
											</div>
											<div className="col-md-6 col-sm-6">
												<div className="form-group">
													<label>Last name</label>
													<input type="text" className="form-control" id="lastname_booking" name="lastname_booking" placeholder="Doe" />
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6 col-sm-6">
												<div className="form-group">
													<label>Email</label>
													<input type="email" id="email_booking" name="email_booking" className="form-control" placeholder="jhon@doe.com" />
												</div>
											</div>
											<div className="col-md-6 col-sm-6">
												<div className="form-group">
													<label>Confirm email</label>
													<input type="email" id="email_booking_2" name="email_booking_2" className="form-control" placeholder="jhon@doe.com" />
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6 col-sm-6">
												<div className="form-group">
													<label>Telephone</label>
													<input type="text" id="telephone_booking" name="telephone_booking" className="form-control" placeholder="00 44 678 94329" />
												</div>
											</div>
										</div>
									</div>
									<hr />
									{/* <!--End step --> */}

									<div className="form_title">
										<h3><strong>2</strong>Payment Information</h3>
										<p>
											Mussum ipsum cacilds, vidis litro abertis.
										</p>
									</div>
									<div className="step">
										<div className="form-group">
											<label>Name on card</label>
											<input type="text" className="form-control" id="name_card_booking" name="name_card_booking" placeholder="Jhon Doe" />
										</div>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label>Card number</label>
													<input type="text" id="card_number" name="card_number" className="form-control" placeholder="xxxx - xxxx - xxxx - xxxx" />
												</div>
											</div>
											<div className="col-md-6 col-sm-6">
												<img src="img/payments.png" alt="Cards" className="cards" />  
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Expiration date</label>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<input type="text" id="expire_month" name="expire_month" className="form-control" placeholder="MM" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<input type="text" id="expire_year" name="expire_year" className="form-control" placeholder="Year" />
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Security code</label>
													<div className="row">
														<div className="col-md-4">
															<div className="form-group">
																<input type="text" id="ccv" name="ccv" className="form-control" placeholder="CCV" />
															</div>
														</div>
														<div className="col-md-8">
															<img src="img/icon_ccv.gif" width="50" height="29" alt="ccv" /><small>Last 3 digits</small>
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* <!--End row -->   */}

										<h5>Or checkout with Paypal</h5>
										<p>
											Lorem ipsum dolor sit amet, vim id accusata sensibus, id ridens quaeque qui. Ne qui vocent ornatus molestie, reque fierent dissentiunt mel ea.
										</p>
										<p>
											<img src="img/paypal_bt.png" alt="" />
										</p>
									</div>
									<hr />
									{/* <!--End step --> */}

									<div className="form_title">
										<h3><strong>3</strong>Billing Address</h3>
										<p>
											Mussum ipsum cacilds, vidis litro abertis.
										</p>
									</div>
									<div className="step">
										<div className="row">
											<div className="col-md-6 col-sm-6">
												<label>Country</label>
												<div className="form-group">
													<select className="form-control" name="country" id="country">
														<option value="">Select your country</option>
													</select>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6 col-sm-6">
												<div className="form-group">
													<label>Street line 1</label>
													<input type="text" id="street_1" name="street_1" className="form-control" placeholder="Street line 1" />
												</div>
											</div>
											<div className="col-md-6 col-sm-6">
												<div className="form-group">
													<label>Street line 2</label>
													<input type="text" id="street_2" name="street_2" className="form-control" placeholder="Street line 1" />
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label>City</label>
													<input type="text" id="city_booking" name="city_booking" className="form-control" placeholder="Miami" />
												</div>
											</div>
											<div className="col-md-3">
												<div className="form-group">
													<label>State</label>
													<input type="text" id="state_booking" name="state_booking" className="form-control" placeholder="Florida" />
												</div>
											</div>
											<div className="col-md-3">
												<div className="form-group">
													<label>Postal code</label>
													<input type="text" id="postal_code" name="postal_code" className="form-control" placeholder="00342"  />
												</div>
											</div>
										</div>
										{/* <!--End row -->  */}
									</div>
									<hr />
									{/* <!--End step --> */}
									<div id="policy">
										<h4>Cancellation policy</h4>
										<div className="form-group">
											<label>
												<input type="checkbox" name="policy_terms" id="policy_terms" /> I accept terms and conditions and general policy.
											</label>
										</div>
									</div>
								</div>
								</div>
								{/* <!-- /col --> */}
								<aside className="col-xl-4 col-lg-4" id="sidebar">
									<div className="box_general_3 booking">
										<form>
											<div className="title">
												<h3>Your booking</h3>
											</div>
											<div className="summary">
												<ul>
													<li>Date: <strong className="float-right">11/12/2017</strong></li>
													<li>Time: <strong className="float-right">10.30 am</strong></li>
													<li>Dr. Name: <strong className="float-right">Dr. julia Jhones</strong></li>
												</ul>
											</div>
											<ul className="treatments checkout clearfix">
												<li>
													Back Pain visit <strong className="float-right">$55</strong>
												</li>
												<li>
													Cardiovascular screen <strong className="float-right">$55</strong>
												</li>
												<li className="total">
													Total <strong className="float-right">$110</strong>
												</li>
										</ul>
										<hr />
										<Link to="/confirm" className="btn_1 full-width">Confirm and pay</Link>
									</form>
								</div>
							</aside>
						</div>
					</div>
				</main>
            </>
        );
    }
}
export default Booking;