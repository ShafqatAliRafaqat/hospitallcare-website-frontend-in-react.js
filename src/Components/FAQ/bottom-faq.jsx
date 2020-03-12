import React, { Component } from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class BottomFaq extends Component {

    render() {
        return (
            <>
                <div className="container margin_25_padding_0">
                    <h6 className="h6-brief-intro">Frequently Asked Questions</h6>
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 faq-m-5">
                            <div className="faq-collapse-root">
                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className="faq-collapse-header">How can I Book an appointment?</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className="faq-collapse-p">
                                            You can click on a Doctor of your choice and select Date and Time of booking from the Panel at the right side 
                                            of Doctor's General Information. 
                                            Or, you can also call at <a href="tel://+923222555600">+92-322-2555600</a>, 
											<a href="tel://+923222555400">+92-322-2555400</a> from 9AM to 11PM to book your appointment.
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
                                        <Typography className="faq-collapse-header">Are there any additional charges to book an appointment with a Doctor through HospitALL?</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className="faq-collapse-p">
                                            There are no additional charges rather we give you some good Discounts.
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
export default BottomFaq;