import React, {Component} from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class DoctorFaq extends Component{

    state = {
        isLoading       : true,
        doctors         : '',
        qualification	: '',
		certification	: '',
		schedules		: '',
    }

    render() {
        const { doctors,schedules }  =    this.props;
        return (
            <>
                <div className="container margin_25_padding_0">
                    <h6 className="h6-brief-intro">Frequently Asked Questions</h6>
                    <div className="row pb-3">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 faq-m-5">
                            <div className="faq-collapse-root">
                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                    <Typography className="faq-collapse-header">How can I Book an appointment with {doctors.first_name} {doctors.last_name}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className="faq-collapse-p">
                                            You can select Date and Time of booking from the Panel at the right side 
                                            of {doctors.first_name} {doctors.last_name}'s General Information. 
                                            Or, you can also call us at <a href="tel://+923222555600">+92-322-2555600</a>, 
											<a href="tel://+923222555400">+92-322-2555400</a> from 9AM to 11PM and We'll book your appointment.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 col-xs-12 col-sm-12 ">
                            <div className="faq-collapse-root">
                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className="faq-collapse-header">Are there any additional charges to book an appointment with {doctors.first_name} {doctors.last_name} through HospitALL?</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className="faq-collapse-p">
                                            There are no additional charges rather we will give you some good Discounts.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {(schedules.length >= 1)
                                    ?
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 faq-m-5">
                            <div className="faq-collapse-root">
                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                    <Typography className="faq-collapse-header">How much does {doctors.first_name} {doctors.last_name} charge &amp; How do I pay?</Typography>
                                    </ExpansionPanelSummary>

                                    <ExpansionPanelDetails>
                                        <Typography className="faq-collapse-p">
                                            {doctors.first_name} {doctors.last_name} charges 
                                            Rs. {schedules[0].fare} for consultation. You will pay at the reception when you 
                                            visit the doctor. There are no additional charges when you book through HospitALL and guess what
                                            you'll pay discounted fee of <span style={{ color:"green" }}>Rs. {schedules[0].discount}</span>
                                        </Typography>
                                    </ExpansionPanelDetails>



                                </ExpansionPanel>
                            </div>
                            </div>
                            :
                            ''}
                            <div className="col-12 col-lg-6 col-md-6 col-xs-12 col-sm-12 ">
                            <div className="faq-collapse-root">
                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className="faq-collapse-header">What is the Experience of {doctors.first_name} {doctors.last_name} </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className="faq-collapse-p">
                                        {doctors.first_name} {doctors.last_name} has {doctors.experience} of Experience
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                        </div>
                    </div>
                </div>            
                </>
        );
    }
}
export default DoctorFaq;