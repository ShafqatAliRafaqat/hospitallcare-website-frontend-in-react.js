import React, {Component} from "react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import SearchPages from '../Search/search_pages';

class PrivacyPolicy extends Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};
    render(){
        return(
            <>
        		<Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="keywords" content="contact us,about us,hospitall,careALL, privacy policy, terms and conditions"></meta>
					
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    				<meta name="description" content="Privacy Policy | What Information Do We Collect? | Security Measures | Your rights | Permissions | General | User Consent | Questions" />
    				<meta name="author" content="Hospitall Care" />
					<title>Privacy Policy | What Information Do We Collect? | Security Measures | Your rights | Permissions | General | User Consent | Questions</title>
					<link rel="canonical" href="https://hospitallcare.com" />
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
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {this.SearchPages()}
                </div>
            </div>
        </div>
            {/* <div className="container py-4">
                <div className="row">
                    <div className="col-12 ">
                        <h4>Privacy Policy</h4>
                    </div>
                </div>
            </div> */}
            </main>
            <div className="white-container font-height">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3>Privacy Policy</h3>
                    </div>
                    <hr className="shine hr-shine"></hr>
                </div>
                <div className="p-about text-justify">
                    <p> 
                        Thank you for using <strong>HospitALL</strong> (the “app or Website”). This privacy policy (hereinafter “Policy”) 
                        applies to your use of the website, and App, and services (hereinafter “Services”). The Policy is 
                        intended to inform you about how we collect and use information so you can make an informed decision 
                        about using the Services. Please read it carefully before using the Services or submitting any information 
                        to us. If you do not agree to any part of this Policy, then you should stop accessing the Services.
                    </p>
                    <p>
                        This Policy does not apply to information collected in any other way, including offline.
                    </p>
                    <p>
                        This Website and App may contain links to services maintained by others. This Policy does not 
                        reflect the privacy practices of those services.
                        The Policy may change as a result of changes to the Services and the content. Users are requested 
                        to refer to this Policy periodically or whenever you visit HospitALL. By accessing and using the 
                        Website or App and availing the Services, the User consents to collection, storage, and use of the 
                        personal data that the User provides (including any changes thereto as provided by you) for any of the 
                        Services and expressly authorizes the Operator to process such personal data.
                    </p>
                    <h5>What Information Do We Collect?</h5>

                    <div className=" container row">
                        <div className="col-12 text-justify">

                            <ol>
                                <li className="li-privacy li1">
                                <h5>Personal Information.</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                            We may collect and store Personal Information that you provide to us when accessing or 
                                                using the Services. “Personal Information” means information relating to a person who 
                                                is or can be identified directly from that information. This includes your name, gender, 
                                                address, telephone number, mobile number, email address, payment details, payment card 
                                                details or bank account details. Personal Information also includes, but not limited to 
                                                the following:
                                            <ol>
                                                <li className="li-privacy li2">
                                                    Aggregated or anonymized information;
                                                </li>
                                                <li className="li-privacy li2">
                                                    Information about you that is provided by third parties; or
                                                </li>
                                                <li className="li-privacy li2">
                                                    Information that is posted to publicly accessible areas of the Services. Examples of 
                                                    Personal Information we collect include information that you provide when you (a) create 
                                                    or update your account, (b) communicate with us, (c) purchase services through HospitALL,(d) 
                                                    contact us, (e) update your profile (“Profile”), or post information using your Profile, we 
                                                    may also collect verification information.
                                                </li>
                                                <li className="li-privacy li2">
                                                    Demographic data, such as your location, gender, date of birth, residence address etc.
                                                </li>
                                                <li className="li-privacy li2">
                                                    Your health related information including medical records and history; physical, 
                                                    physiological and mental health condition; biometric information; financial information 
                                                    such as bank accounts, credit and debit card details or other payment instrument details;
                                                </li>
                                                <li className="li-privacy li2">
                                                    Data regarding your usage of the Services and history of the appointments made by or with 
                                                    you through the use of Services;
                                                </li>
                                                <li className="li-privacy li2">
                                                    Other Information that you voluntarily choose to provide to us (such as information 
                                                    shared by you with us through emails or letters.
                                                </li>
                                            </ol>
                                        </li>
                                        <br/>
                                        <li  className="li-privacy li2">
                                        We may use certain information you provide for research and statistical purposes and in such cases 
                                        we will take steps with an aim to protecting your individual identity. We may also use the 
                                        information you provide to offer you products and services that we believe may be of interest 
                                        to you. You may choose not to receive such offers and communications from us when you register. You 
                                        may also opt out or unsubscribe.
                                        </li>
                                        <li  className="li-privacy li2">
                                        You should exercise caution when disclosing personal information in the creation of your account. 
                                        Please do not submit any confidential, proprietary or sensitive personally identifiable information 
                                        (e.g.CNIC; drivers license number (collectively, “Sensitive Information”). If you submit any Sensitive 
                                        Information, you do so at your own risk and 
                                        we will not be liable to you or responsible for consequences of your submission.
                                        </li>
                                        <li  className="li-privacy li2">
                                        If you submit your information, know that: -It must be accurate, complete, and current. It will be distributed to third parties in multiple formats (including online), and you will not be compensated by in any way for its use. -By submitting the information on our Website/App (and/or its social media pages/Website), you consent to the review of such information by our team members and by those who assist us in the provision of services to the users of our Website/App. We may take steps to inform all such people that such information should be treated as being confidential and should not be shared with anyone (unless required for the provision of any requested service). -Your actual service request details may be stored with us but for security reasons cannot be retrieved directly by us. However, you may access this information by logging into your account on the Website/App. Here you can view the details of your Services request that have been completed.
                                        </li>
                                        <li  className="li-privacy li2">
                                        If you choose to provide us with personal information, you consent to the transfer and storage of that information on our servers.
                                        </li>
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>How We May Use Your Personal Information</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        You provide us with information when you sign up to HospitALL. HospitALL will also collect information from all of it users about their use of the Website/App. Any information on users or their use of the Website/App is subject to HospitALL Privacy Policy. By using HospitALL, you consent to use of that information and warrant that all information provided by you is accurate.
                                        </li>
                                        <li className="li-privacy li2">
                                        We use information other than Personal Information, including aggregated or anonymized information, for ad targeting, to analyze trends, administer the Services, improve customer service, diagnose problems with our servers, track user movement and gather demographic information for aggregate use. Third party ad platforms may use this information for a similar purpose, but you should follow up with third parties and confirm their information collection and usage practices directly. We may freely publish, disclose and use information other than Personal Information, including aggregated or anonymized Personal Information, to or with third parties.
                                        </li>
                                        <li className="li-privacy li2">
                                        We may use Your personal information to help us improve our products and services and getting in touch with you to let You know about goods, services or promotions that may interest you. HospitALL understands your privacy needs and will not sell, trade, or share personal information collected online from customers with third parties. All personal information collected by HospitALL will only be used internally and exclusively within our corporate group.
                                        </li>
                                        <li className="li-privacy li2">
                                        In the event that your name and address are passed on to a third party, this will only happen in an effort to have your Services Requested rendered to you. When you place an order for HospitALL Services through HospitALL, your personal information will also be automatically used for marketing and/or promotional purposes from time to time. However, you can choose to not receive marketing or promotional information from HospitALL at any time by simply utilizing the unsubscribe function in the electronic marketing material sent to you.
                                        </li>
                                        <li className="li-privacy li2">
                                        In the event that we engage with third party service providers in connection with our Services, HospitALL may share Personal Information with such service providers who need access to such information to carry out their work for HospitALL. Other than such service providers, HospitALL does not share Personal Information with third parties unless (1) You have indicated to us that you wish to receive information from such parties; (2) You otherwise give us your consent to do so; or (3) in response to a request for information.
                                        </li>  
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Transfers of Information</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        Information about our customers, including Personal Information, may be disclosed as part of any merger, acquisition, debt financing, sale of company assets, as well as in the event of an insolvency, bankruptcy or receivership in which Personal Information could be transferred to third parties as one of our business assets. In such an event, HospitALL will attempt to notify you before your Personal Information is transferred, but you may not have the right to opt out of any such transfer.
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Security Measures</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        HospitALL endeavors to secure your Personal Information from unauthorized access, use or disclosure by putting into place reasonable physical, electronic and managerial procedures to safeguard the information we collect. Additionally, your account information is accessible online only through the use of a password.
                                        </li>
                                        <li className="li-privacy li2">
                                        No security measures are perfect or impenetrable. To protect the confidentiality of your Personal Information, you must keep your password confidential and not disclose it to any other person. You are responsible for all use of the Services by any person using your password. Please advise us immediately by emailing us if you believe your password has been misused. You should also note that email is not secure, and you should not send any confidential or sensitive information to us via an unsecured email.
                                        </li> 
                                        <li className="li-privacy li2">
                                        HospitALL does not control or endorse the content, messages or information found in any of the Services and, therefore, HospitALL specifically disclaims any liability with regard to the Services and any actions resulting from your participation in any Services, and you agree that you waive any claims against HospitALL relating to same, and to the extent such waiver may be ineffective, you agree to release any claims against HospitALL relating to the same.  
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Lawful Use Only</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        User will not publish, upload, submit or distribute any posted materials on HospitALL Website/App which are unlawful, deceptive, misleading, or abusive in any way, including but not limited to posted materials that are defamatory, blasphemous, libelous, pornographic, obscene, threatening, indecent, invasive of privacy or publicity rights, hateful, or would constitute or encourage a criminal offense, violate the rights of any party, contain any corrupted data or malicious code that may impair or alter the appearance or functionality of HospitALL, or give rise to liability or violate any local, state, federal or international law or regulation.
                                        </li>
                                        <li className="li-privacy li2">
                                        On certain sections of HospitALL Website/App, posted materials submitted for publication on will be accompanied by User’s name and shall not be submitted anonymously. User warrants that such Posted Materials will not misrepresent or obscure his or her identity or affiliation with any person or entity. Furthermore, User warrants that it will not, by any method or action, directly or through a third party seek to artificially enhance, degrade, or otherwise manipulate the recommendations or endorsements of any User, individual, or group on HospitALL including User’s own.
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Your rights</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        If you are concerned about your data you have the right to request access to the personal data which we may hold or process about you. You have the right to require us to correct any inaccuracies in your data free of charge. At any stage you also have the right to ask us to stop using your personal data for direct marketing purposes.
                                        </li>
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Permissions</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        When you use the HospitALL Application or any of the Services, there are certain Permissions that you will have the right to Allow or Deny, however it must be noted that if you deny such Permissions you will not be able to use certain Services on the HospitALL App partially or the whole Application in its entirety.
                                        </li> 
                                        <li className="li-privacy li2">
                                        App Permissions include the following:<br></br>
                                        (1 ) INTERNET ACCESS<br></br>
                                        (2) ACCESS_NETWORK_STATE<br></br>
                                        (3) READ_EXTERNAL_STORAGE<br></br>
                                        (4) WRITE_EXTERNAL_STORAGE<br></br>
                                        (5) CAMERA PERMISSION<br></br>
                                        (6) ACCESS_FINE_LOCATION<br></br>
                                        (7) VIBRATE<br></br>
                                        (8) SEND_SMS<br></br>
                                        (9) CALL_PHONE<br></br>
                                        </li> 
                                    </ol>
                                </li>

                                <li className="li-privacy li1">
                                    <h5>Children</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        Our Services are not intended for use by children under the age of 18, and such use is prohibited by our Terms of Service. We do not knowingly collect Personal Information from children under 18. If you become aware that a child has provided us with Personal Information, please contact us as set forth in this Policy.
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>General</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        We may amend this Privacy Policy at any time by posting the amended terms on this Website and App.
                                        </li>
                                        <li className="li-privacy li2">
                                        The Services may provide you with access to or enable you to procure services of third parties. HospitALL neither makes any warranties or representations regarding the services of those third parties nor control or endorse those services or the content, messages or information found in those services. HospitALL expressly disclaims any liability with regard to: (a) your access and/or use of; (b) any decisions made with regard to; (c) any actions that you may take with regard to; the Services or any third party services. You agree to release HospitALL from any claims with regard to the following and waive any such claims.
                                        </li> 
                                        <li className="li-privacy li2">
                                        You are responsible for maintaining the accuracy of the Your Information. If Your Information changes, you may correct, delete inaccuracies, or amend information by making the change on your profile page or by contacting us through privacy@hospitall.tech. We will make good faith efforts to make requested changes in our then active databases as soon as reasonably practicable. If any of Your Information is (or subsequently becomes) untrue, inaccurate, out of date or incomplete, or HospitALL has reasonable grounds to suspect that Your Information is untrue, inaccurate, out of date or incomplete, HospitALL may, at its sole discretion, suspend, cancel or terminate the provision of the Services to you.
                                        </li> 
                                        <li className="li-privacy li2">
                                        You may choose to unsubscribe from marketing and promotional communications that you may receive from HospitALL by clicking the relevant ‘unsubscribe’ link(s) provided as a part of such promotional marketing or communications.
                                        </li> 
                                        <li className="li-privacy li2">
                                        You may cancel your account or otherwise stop using the Services. If you do that, you acknowledge that: (a) we may retain Your Information for so long as it is necessary to comply with law and/or regulation or in accordance with our reasonable business practices; and (b) it may not be possible for us to delete Your Information from every database that it may form a part of. Where practicable, after a period of time, Your Information may be anonymized and aggregated, and then we may continue to use it as long as we consider necessary
                                        </li>
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>User Consent</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        You acknowledge that this Privacy Policy is a part of the Terms and Conditions of the HospitALL Website and Application and their collective Services, and you unconditionally agree that becoming a User of the Website, Application and its Services signifies your (i) Consent to this Privacy Policy, and (ii) consent to HospitALL using, collecting, processing and/or disclosing your Personal Information in the manner and for the purposes set out in this Privacy Policy. Your visit to the Website and use of the Services is subject to this Privacy Policy and the Terms and Conditions.
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Questions</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        If you have any additional questions or concerns related to this statement and/or our practices, please email us at privacy@hospitall.tech.
                                        </li> 
                                    </ol>
                                </li>
                            </ol>
                            <h5 className="pt-4">This Privacy Policy was last updated on 24th September 2018.</h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </>
        );
    }
}
export default PrivacyPolicy;