import React, {Component} from "react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import SearchPages from '../Search/search_pages';

class TermsAndConditions extends Component{
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
    				<meta name="description" content="Terms and Conditions | Definitions | Using Our Services | Registration Information | Using HospitALL | Services and Features | Sharing Information | Content Policy" />
    				<meta name="author" content="Hospitall Care" />
					<title>Terms and Conditions | Definitions | Using Our Services | Registration Information | Using HospitALL | Services and Features | Sharing Information | Content Policy</title>
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
                                    <li>Terms and Conditions</li>
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
                        <h3>Terms and Conditions</h3>
                    </div>
                    <hr className="shine hr-shine"></hr>
                </div>
                <div className="p-about text-justify">
                    <p> 
                    Welcome to HospitALL (the “App or HospitALL Website”). HospitALL provides a number of services (collectively the “Services”) and the use of the Services (including any of the content or any services offered) is subject to these terms and conditions (hereinafter “Terms of Use”).
                    </p>
                    <p>
                    By accessing the HospitALL App or using the Services, you are you expressly (without any limitation or qualification) agreeing to the Terms of Use, Terms and Conditions and Privacy Policy. Please do not use this App if you do not agree to these Terms of Use, Terms and Conditions and the Privacy Policy. If you have any questions, please contact us at Info@hospitall.tech
                    </p>
                    <p>
                    The term “you” “your” “customer” (or a similar reference) and “User” refers to the user of the App or website and the term “us” “our” “we” refers to the Operator (as defined in the Privacy Policy).
                    </p>
                    <p>
                    These Terms of Use shall govern and be applicable to and your use of it. It is important to note that these Terms of Use shall be deemed to apply to anyone viewing this App and not only those that are using, browsing or registered Users on HospitALL.
                    </p>
                    <p>
                    The Operator may add to or change or update these, from time to time entirely at its own discretion. The User must read these Terms of Use periodically or every time the User accesses the App to remain in compliance with these terms. The User’s use of HospitALL after any amendment to the Terms of Use shall constitute the User’s acceptance of these Terms and Conditions as amended, revised or modified.
                    </p>
                    <p>
                    HospitALL provides a platform in the form of a website and mobile application. HospitALL develops online tools, apps and interfaces relating to Digital Healthcare. Services include but not limited to, Medical records, doctors and hospitals directory, medical services at home, emergency contacts and much more later on defined in the Services of this Terms and Conditions.
                    </p>
                    <p><strong>
                    By accessing, downloading, copying, and/or using the HospitALL App, including this App, and/or the Services, you agree to these User Terms. THESE USER TERMS CREATE A BINDING LEGAL AGREEMENT BETWEEN YOU AND HospitALL, AND INCLUDE AN ARBITRATION CLAUSE UNDER WHICH CERTAIN CLAIMS MAY NOT BE BROUGHT IN COURT. PLEASE READ THEM CAREFULLY.
                    </strong></p>
                    <div className=" container row">
                        <div className="col-12 text-justify">
                            <ol>
                                <li className="li-privacy li1">
                                <h5>Definitions</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                            When the following words are used in these Terms, this is what they will mean: <br></br>
                                            <strong>Platform:</strong> The website HospitALL.org, the HospitALL Mobile Application and Corporate Portal. <br></br>
                                            <strong>App:</strong> The mobile application created by HospitALL. <br></br>
                                            <strong>Device:</strong>  A User’s mobile telephone, Smartphone or handheld device. <br></br>
                                            <strong>Intellectual Property Rights:</strong>  The term “Intellectual Property Rights” (hereinafter referred to as the ‘IP’) means all (i) patents, patent applications, patent disclosures and inventions, (ii) Internet Domain names, trademarks, service marks, trade dress, trade names, logos and corporate names and registrations and applications for registration thereof together with all of the goodwill associated therewith, (iii) copyrights (registered or unregistered) and copyrightable works and registrations and applications for registration thereof, (iv) mask works and registrations and applications thereof, (v) computer software, data, databases and documentation thereof, (vi) trade secrets and other confidential information (including ideas, formulas, compositions, inventions (whether patentable or unpatentable and whether or not reduced to practice), know-how, manufacturing and production processes and techniques, research and development information, drawings, specifications, designs, plans, proposals, technical data, and copyrightable works, financial and marketing plans and customer and supplier lists and information, and (vii) copies and tangible embodiments thereof (in whatever form or medium).<br></br>
                                            <strong>Notification:</strong>  The email/alerts/SMS sent from HospitALL to a User. <br></br>
                                            <strong>HospitALL:</strong>  A project of Digitech Global (Pvt.) Ltd, a registered company under the laws of Islamic Republic of Pakistan. <br></br>
                                            <strong>Service Provider(s):</strong>  Includes but not limited to doctors, hospitals, clinics, physicians, pharmacies, laboratories, diagnostic centers, therapy centers and all other related medical service providers etc, who are registered on the Platform. <br></br>
                                            <strong>Terms:</strong>  The terms and conditions set out in this document.<br></br>
                                            <strong>Customer(s):</strong>  Users (You) who sign up with HospitALL, use the website and download and use the App. <br></br>
                                            <strong>User(s):</strong>  Customers (You) who sign up with HospitALL, use the website and download and use the App.<br></br>
                                            <strong>Website:</strong>  The website http://www.HospitALL.org<br></br>
                                        </li>
                                        <li className="li-privacy li2">
                                        The words “writing” or “written” in these Terms will include e-mail, unless specified otherwise.
                                        </li>
                                        <li className="li-privacy li2">
                                        These are the terms and conditions on which HospitALL supplies the App and website to you.
                                        </li>
                                        <li className="li-privacy li2">
                                        By downloading the App you accept and agree to be bound by these Terms and the license contained within them, including the HospitALL Privacy policy. We may at any time modify these Terms.
                                        </li>
                                        <li className="li-privacy li2">
                                        These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of Pakistan.
                                        </li>
                                        <br/>
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Using Our Services</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        You may use our Services only if you can form a binding and enforceable contract/agreement with HospitALL, no use of the Services is permitted by those under the age of majority. In no event is use of the Services permitted by those under the age of 18. If you are using the Services on behalf of any entity, then you are agreeing to the Terms of Use on behalf of that entity. Where you use the Service in the course of your employment or business, you enter into this Agreement both on your own behalf and in your individual capacity as an employee, officer, agent, partner, etc. of such organization which you represent, and references in this Agreement to “you” shall mean both you as the individual user of the Service and you in your capacity as a representative of your organization. Without prejudice to any other rights and remedies of HospitALL under these Terms and Conditions or at law, HospitALL reserves the right to limit or withdraw access to the Website or the registration of any person if HospitALL believes that person is under the age of 18 years or is of unsound mind.
                                        </li>
                                        <li className="li-privacy li2">
                                        Using our Services does not give you ownership of any intellectual property rights in our Services or the content you access. Except in the context of browsing or accessing our Services in accordance with these Terms of Use, you may not use content from our Services unless you obtain permission from its owner or are otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our Services.
                                        </li> 
                                        <li className="li-privacy li2">
                                        Submissions, opinions or reviews expressed on this platform are those of the individual posting such content and do not necessarily reflect our opinions. Certain services and related features that may be made available on the Website may require registration or subscription. Should you choose to register or subscribe for any such services or related features; you agree to provide accurate and current information about yourself, and to promptly update such information if there are any changes. Every user of HospitALL is solely responsible for keeping passwords and other account identifiers safe and secure. The account owner is entirely responsible for all activities that occur under such password or account. Furthermore, you must notify us of any unauthorized use of your password or account. HospitALL shall not be responsible or liable, directly or indirectly, in any way for any loss or damage of any kind incurred as a result of, or in connection with, your failure to comply with this section.
                                        </li> 
                                        <li className="li-privacy li2">
                                        During the registration process you agree to receive promotional emails and or SMS alerts from HospitALL. You can subsequently opt out of receiving such promotional e-mails by clicking on the link at the bottom of any promotional email.
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>User Eligibility and Website Access</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        Use of the Platform/Corporate Portal is available only to persons who can form legally binding contracts under Pakistan Contract Act, 1872. Persons who are “incompetent to contract” within the meaning of the Pakistan Contract Act, 1872 including minors, un-discharged insolvents, of unsound mind are not eligible to use the Site. If you are a minor i.e. under the age of 18 years, you cannot register as a member of the HospitALL Platform/Corporate Portal and shall not make use of the Platform/Corporate Portal. As a minor if you wish to use the services on the Platform/Corporate Portal your legal guardian or parents who have registered as users of the Platform/Corporate Portal may make such use of the services on your behalf. We reserve the right to terminate your membership and refuse to provide you with access to the HospitALL Platform/Corporate Portal if it is brought to our notice or if it is discovered that you are under the age of 18 years.
                                        </li> 
                                        <li className="li-privacy li2">
                                        We grant you a limited license to access and make personal use of the Platform/Corporate Portal and the Services. This license does not include any downloading or copying of account information for the benefit of another vendor or any other third party; caching, unauthorized hypertext links to the Platform/Corporate Portal and the framing of any content available through the Platform/Corporate Portal uploading, posting, or transmitting any content that you do not have a right to make available (such as the intellectual property of another party); uploading, posting, or transmitting any material that contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment; any action that imposes or may impose (in our sole discretion) an unreasonable or disproportionately large load on our infrastructure; or any use of data mining, robots, or similar data gathering and extraction tools. You may not bypass any measures used by us to prevent or restrict access to the Platform/Corporate Portal. Any unauthorized use by you shall terminate the permission or license granted to you by us.
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Registration Information</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        When you register with any HospitALL Platform (Website/App), You will be asked to provide certain information including, without limitation, name of the company / individual, Computerized National Identity Card Number, a valid email address, Mobile Phone Number etc. In addition to the Terms of Use and any privacy policy applicable to any HospitALL Platform, You understand and agree that the Company may disclose to third parties, on an anonymous basis, certain aggregate information contained in your registration application. Subject to the Terms of Use herein, the Company will not disclose to any third party your name, address, e-mail address or telephone number without your prior consent, except to the extent necessary or appropriate to comply with applicable laws or in legal proceedings where such information is relevant. However, You agree and acknowledge that the Company shall have the right to provide to its customer using HospitALL Platform, the information provided by You including your mobile number, while the User search for similar profiles such as Yours at HospitALL. The Company shall not be liable for any claims, liability (direct / indirect) or damages in this regard, should such an eventuality arise as a result of the Company sharing the information provided by You to the User/Worker.
                                        </li> 
                                        <li className="li-privacy li2">
                                        Sign up to HospitALL will not be confirmed until the following information has been provided and verified:
                                        <ol>
                                            <li className="li-privacy li2">
                                            &nbsp;– Valid e-mail (verified through Verification e-mail);
                                            </li> 
                                            <li className="li-privacy li2">
                                            – Computerized National Identity Card (CNIC) Number;
                                            </li>
                                            <li className="li-privacy li2">
                                            – Valid Mobile number (verified through SMS).
                                            </li>
                                        </ol>
                                        </li> 
                                        <li className="li-privacy li2">
                                        Upon confirmation of the details in 4.2.1, 4.2.2 and 4.2.3 above, Users will be connected to HospitALL. If the mobile number or e-mail provided cannot be verified by HospitALL, HospitALL reserves the right to refuse the User access to the Platform.
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Using HospitALL</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        HospitALL will supply the Services to you from the date that the details in clause 4 are confirmed.
                                        </li> 
                                        <li className="li-privacy li2">
                                        HospitALL will make every effort to ensure the Platform is operational 24 hours a day, 7 days a week. However, there may be issues or delays due to events outside HospitALL’s control.
                                        </li> 
                                        <li className="li-privacy li2">
                                        HospitALL may have to suspend the Platform if it has to deal with technical problems, or to make improvements. HospitALL will contact you to let you know in advance where this occurs, unless the problem is urgent or an emergency. This does not affect your obligation to pay any outstanding amounts on any services you may have requested from HospitALL (as may be notified to the Users by HospitALL).
                                        </li> 
                                        <li className="li-privacy li2">
                                        In the unlikely event that there is any defect with the App:
                                            <ol>
                                            <li className="li-privacy li2">
                                            – Please contact HospitALL as soon as reasonably possible;
                                            </li>
                                            <li className="li-privacy li2">
                                            – Please give HospitALL a reasonable opportunity to repair or fix any defect;
                                            </li>  
                                            </ol>
                                        </li> 
                                        <p > HospitALL will use every effort to repair or fix the defect as soon as reasonably practicable. You will not have to pay for HospitALL to repair or fix a defect with the Platform under this clause 5.4.</p>
                                        <li className="li-privacy li2">
                                        By using HospitALL you warrant that:
                                            <ol>
                                            <li className="li-privacy li2">
                                            – are capable of forming legally binding contracts;
                                            </li>
                                            <li className="li-privacy li2">
                                            – will not provide your HospitALL log on credentials to any third party;
                                            </li>  
                                            <li className="li-privacy li2">
                                            – will not use HospitALL in a way that breaches these terms of use, any laws or infringes any rights of third parties;
                                            </li> 
                                            <li className="li-privacy li2">
                                            – will not interfere with anyone else’s use of HospitALL, including sending spam; and
                                            </li> 
                                            <li className="li-privacy li2">
                                            – will not copy, scrape or reproduce content from HospitALL including information about third parties without their consent.
                                            </li> 
                                            </ol>
                                        </li> 
                                        <p >In consideration of the circumstances, and where We think it is reasonable to do so, We may suspend or terminate your access to HospitALL and reserve the right to take any appropriate steps at law to protect Our interests or those of third parties.</p>
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Registration and Password</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        At the time of registration on the HospitALL Platform you will be able to generate a password and an account upon completing the registration process. You are responsible for maintaining the confidentiality of the password and account, and are fully responsible for all activities that occur under your password or account.
                                        </li> 
                                        <li className="li-privacy li2">
                                        You are responsible for maintaining the confidentiality of your account access information and passwords. You shall be responsible for all uses of your registrations and passwords, whether or not authorized by you. The log in information created for the purpose of accessing HospitALL is to be used solely by the person who has registered with the Platform. HospitALL reserves the right to store the access information including the IP address of the computer / device from where the Website was accessed. You are not authorized to share your password or other account access information with any other party, temporarily or permanently, and breach of this obligation may tantamount to disabling the HospitALL account at the sole discretion of HospitALL and terminating the contract with You. You agree to:-
                                        </li> 
                                        <ol>
                                            <li className="li-privacy li2">
                                            – immediately notify HospitALL of any unauthorized use of your password or account or any other breach of security,
                                            </li> 
                                            <li className="li-privacy li2">
                                            – ensure that you log out from your account at the end of each session,
                                            </li> 
                                            <li className="li-privacy li2">
                                            – You shall also ensure that you access the Website from an authorized source and connection. HospitALL cannot and will not be liable for any loss or damage arising from your failure to comply with this Section.
                                            </li> 
                                        </ol>
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Services and Features</h5>
                                    <p>Listed below are the Services and Features that the HospitALL Platform offers</p>
                                    <p>HospitALL is a unique platform that provides access to Services and Features in the field of healthcare by showcasing information on the available medical and healthcare services provided by Service Providers through the Platform. HospitALL also acts as a facilitator which connects the Users with the relevant Service Provider(s).</p>
                                    <p>In addition Users have the option to upload their Medical Records onto the HospitALL Platform. If you upload your Medical Records onto the website you can edit your medical records, delete your medical records, and view the medical records that you have added.</p>
                                    <p>By availing the Services, using Features and the information available on the Platform, You agree that you are entering into a binding contract with each such Service Provider directly for the performance of the relevant Services. We facilitate connection between You and the identified Service Provider by sharing Your information with them and also providing You details of the Service Providers in relation to the chosen Services. To give You a better user experience and the choice out of the possible options out of those available at the relevant time, We also help with certain value added services for specific sections of the Services that you may seek through the HospitALL Platform.</p>
                                    <p>Services and Features offered on the HospitALL website and App include the following as listed below, however it must be noted that from time to time these Services and Features may be amended, removed or new ones will be introduced.</p>
                                    <ol>
                                        <li className="li-privacy li2">
                                        Healthcare at Home
                                        </li> 
                                        <li className="li-privacy li2">
                                        Appointments
                                        </li> 
                                        <li className="li-privacy li2">
                                        Nearby Services
                                        </li> 
                                        <li className="li-privacy li2">
                                        Medical History
                                        </li> 
                                        <li className="li-privacy li2">
                                        Medical Claims
                                        </li> 
                                        <li className="li-privacy li2">
                                        Friends and Family
                                        </li> 
                                        <li className="li-privacy li2">
                                        Emergency Contacts
                                        </li> 
                                        <li className="li-privacy li2">
                                        Health Monitoring
                                        </li> 
                                        <li className="li-privacy li2">
                                        Please note that the above description of Services and Features is only general and indicative in nature. Each of the Services and Features comprises of specific components as listed and made available on the Website and App and You are advised to review and understand the components of each of the Services and Features available before making a choice. These terms need to be reviewed contextually for applicability to the relevant components or items of the Services and Features.
                                        </li> 
                                        <li className="li-privacy li2">
                                        Some of the Services offered by HospitALL on the Website and App is only a facilitating service to enhance the User experience with respect to the availed Services. However, such value added services are not mandatorily provided to all components of the Services. HospitALL reserves its sole right and discretion to determine the applicability and provision of any of the value added services as part of any relevant Service as it deems fit. By way of an example (but not limitation) , the value added service of ‘Doctor Helpline’ or ‘Appointments’ may not be available, either separately or together, to all of the medical related features made available on the Platform.
                                        <br/>The Services, as relevant, provide You with a platform to connect with Service Providers, while HospitALL facilitates the same by offering (in some cases) value added services and information that is relevant and valuable in helping You make an informed choice amongst the offerings. The Service Provider continues to remain exclusively responsible for the relevant Services and the obligations that the Service Provider may agree with You. HospitALL does not make any representations or warranties on behalf of any Service Provider. All advice, guidance and views and opinions (including diagnosis and treatment related advice) expressed by a relevant Service Provider, in respect of the Services chosen are independent professional advice of such Service Provider only. HospitALL does not have any role, responsibility or liability towards such advice given to You as part of the Services (including, for avoidance of doubt any helpline services).
                                        </li> 
                                        <li className="li-privacy li2">
                                        Your contract with the Service Provider for relevant Services is an independent contract. You are solely responsible for performing each such contract. HospitALL is in no way responsible to perform any of Your obligations under any such contract. You acknowledge that HospitALL does not accept responsibility for Service Provider’s provision of any of the Services, or Service Provider’s actions, omissions or Your use of any of the Services and shall have no liability for any of them. You expressly agree that if there are issues or claims that You may have with regard to such Services, You may only make claims against the Service Provider and not against HospitALL.
                                        </li> 
                                        <li className="li-privacy li2">
                                        HospitALL has taken all reasonable steps to put out information that is accurate and reliable in respect of the Services and the Service Providers. However, HospitALL does not promote or endorse or make any recommendations or assure the credibility or standing of any of the Service Providers listed on the Website in respect of the Services. We reiterate that HospitALL is only a facilitating platform that provides information on certain Services made available by the Service Providers and enables the Users to enjoy a hassle free experience in availing certain Services.
                                        <br/>The Service Providers are each independently responsible and liable for the Services they provide and HospitALL is not responsible or liable for any information about them or provided by them during the course of making available the Services to Users. As such HospitALL does not provide any guarantees, authenticity or reliability or accuracy of such information even though it is made available on the Website.
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Sharing Information</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        In the course of obtaining or seeking any of the Services, You may be asked to provide certain information and data pertaining to You, such as contact details, age, gender and such medical information and records that are required to be shared with the Service Providers, to enable them to deliver the Services identified. You expressly consent to the provision of and sharing of such information with HospitALL and or the relevant Service Provider.
                                        </li> 
                                        <li className="li-privacy li2">
                                        With respect to such information You warrant that it is accurate, updated and relevant and does not contain any material or information that can prejudice the rights of any other person or party and that it belongs to You or to the person or party You legally represent with respect to the Services being availed. All such information provided by You to HospitALL and as maybe retained or shared with Service Providers as relevant shall be subject to the Privacy Policy of HospitALL. You agree and acknowledge that information shared by You or with You over the internet maybe exposed to security risks and that HospitALL shall not be responsible or liable in any manner for any loss or damages incurred by You in this regard.
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Intellectual Property Rights</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        In consideration of you agreeing to abide by these Terms, HospitALL grants you a non-transferable, non-exclusive license to use the HospitALL Platform, subject to these terms, the Privacy Policy and any other applicable rules. HospitALL reserves all other rights.
                                        </li> 
                                        <li className="li-privacy li2">     
                                        You may download or stream a copy of the App onto your Device, to view, use and display the App on the Device for your personal purposes only.
                                        </li> 
                                        <li className="li-privacy li2">
                                        You acknowledge that all Intellectual Property Rights in the App anywhere in the world belong to HospitALL or its licensors, that rights in the App are licensed (not sold) to you, and that you have no rights in, or to, the App, other than the right to use it in accordance with these Terms. You acknowledge that you have no right to have access to the App in source-code form.
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Termination of Users who infringe the Copyright or Other Intellectual Property Rights of Others</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        HospitALL and its affiliated companies respect the intellectual property of others, and we ask our users, account holders and content partners to do the same. The unauthorized reproduction, copying, distribution, modification, public display or public performance of copyrighted works constitutes infringement of the copyright owners’ rights. As a condition to your use of HospitALL, You agree not to use HospitALL or any other HospitALL Platform to infringe the intellectual property rights of others in any way, directly or indirectly. We at our sole discretion, will terminate the accounts of any HospitALL account holders, and block access to HospitALL Platform of any Users who to the knowledge of HospitALL are infringers of the copyrights, or other intellectual property rights, of others. We reserve the right to take these actions at any time, in our sole discretion, with or without notice, and without any liability to the account holder who is terminated or to the User whose access is blocked. Notwithstanding the foregoing, in the event that You believe in good faith that a notice of copyright infringement has been wrongly filed against You or your copyrighted work that has been uploaded, posted or copied to any HospitALL Platform and is accessible on such, HospitALL in a way that constitutes copyright infringement, please contact us under Info@hospitall.tech .
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Content Policy</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        HospitALL is a facilitating platform that provides information to Users who access and use the Website and apply for the Services listed therein. HospitALL is not responsible for or under any obligation to ensure that the content or information made available on the Website or App by Service Providers or Third Party Providers with respect to any of the Services is accurate or is screened for any objectionable material. As regards the information or content that you put out or submit on the Website You are solely responsible for the same. In the event any content or data or information that You post or provide on the Website is found to be untrue, false or misleading or is of an objectionable nature, HospitALL reserves the right to remove such content, edit or suspend Your account or access to the Website or App, if we are of the view that such content is detrimental to HospitALL’s business, goodwill or reputation or its interests.
                                        </li> 
                                        <li className="li-privacy li2">
                                        The Company acts as a passive conduit for the online distribution and publication of User Content and has no obligation to screen communications or information in advance and is not responsible for screening or monitoring User Content posted by Users. However, the Company may review and delete any User Content that, in the sole judgment by HospitALL, violates these Terms of Use, violates applicable law, rule or regulation, is offensive or illegal or violates the rights of, harms or threatens the safety of Users of any HospitALL Platform. The Company reserves the right to expel Users and prevent their further access to the HospitALL Platform for violating the Terms of Use or applicable law, rule or regulation and the right to remove User Content which is in violation of the Terms of Use, abusive, illegal, or disruptive. The Company reserves the right to archive the user content folders which were not being accessed for a period of 6 months or more by the relevant users after its last access. In such event users will be able to access the archive folders with minor limitations including but not limited to non availability of the options of move to another folder, renew services associated with the said folders. The Company may take any action with respect to User Content that it deems necessary or appropriate in its sole discretion if it believes it may create liability for the Company or may cause the Company to lose (in whole or in part) the services of its ISPs or other suppliers.
                                        </li>
                                        <li className="li-privacy li2">
                                        We appreciate hearing from our Users and welcome your comments regarding our services and the HospitALL Platform. Please be advised, however, that our policy does not permit us to accept or consider creative ideas, suggestions, inventions or materials other than those which we have specifically requested. While we do value your feedback on our services, please be specific in your comments regarding our services and do not submit creative ideas, inventions, suggestions or material, if, despite our request you send us creative suggestions, ideas, drawings, concepts, inventions, or other information (collectively the “Submission”), the submission shall be the property of the company. None of the Submission shall be subject to any obligation of confidentiality on our part and we shall not be liable for any use or disclosure of any Submission. The Company shall own exclusively all now known or later discovered rights to the Submission and shall be entitled to unrestricted use of the Submission for any purpose whatsoever, commercial or otherwise, without compensation to You or any other person who submitted the Submission.
                                        </li>
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Disclaimer of Warranties</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.
                                        </li> 
                                        <li className="li-privacy li2">
                                        We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.
                                        </li>
                                        <li className="li-privacy li2">
                                        You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
                                        </li>
                                        <li className="li-privacy li2">
                                        You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided ‘as is’ and ‘as available’ for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.
                                        </li>
                                        <li className="li-privacy li2">
                                        In no case shall HospitALL, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.
                                        </li>
                                        <li className="li-privacy li2">
                                        We will not be liable for any losses you sustain as a result of updating or modifying our website.
                                        </li>
                                        <li className="li-privacy li2">
                                        We do not warrant, represent or undertake as to the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.
                                        </li>
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Indemnity</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        You agree to defend, indemnify, and hold harmless the Company, its affiliates, and their respective officers, directors, employees and agents, from and against any claims, actions or demands, including without limitation reasonable legal and accounting fees, alleging or resulting from (i) any User Content or other material You provide to any HospitALL Platform, including for the purpose of the use of Services (ii) Your use of any HospitALL Content, or (iii) Your breach of these Terms. HospitALL shall provide notice to you promptly of any such claim, suit, or proceeding.
                                        </li> 
                                        
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Termination</h5>
                                    <ol>
                                    <li className="li-privacy li2">
                                        We may at any time, under any circumstances and without prior notice, immediately terminate or suspend all or a portion of your account and/or access to the HospitALL Platform. Cause for such termination shall include, but not be limited to: (a) violations of these Terms of Use; (b) a request by you to cancel or terminate your account; (c) discontinuance or material modification to the Service or any part thereof; (d) a request and/or order from law enforcement, a judicial body, or other government agency; (e) provision of the HospitALL Platform to you becoming unlawful; (f) unexpected technical or security issues or problems; or (g) your participation in fraudulent or illegal activities. Any such termination or suspension shall be made by us in our sole discretion, without any refund to you of any prepaid fees or amounts, and we will not be responsible to you or any third party for any damages that may result or arise out of such termination or suspension of your account and/or access to the HospitALL Platform. If you want to terminate your account, you may notify HospitALL in writing via email at Info@hospitall.tech
                                    </li>
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Other Important Terms</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        HospitALL may transfer its rights and obligations under these Terms to another organization, and will always notify you in writing if this happens, but this will not affect your rights or its obligations under these Terms.
                                        </li> 
                                        <li className="li-privacy li2">
                                        You may only transfer your rights or your obligations under these Terms to another person if We agree in writing.
                                        </li>
                                        <li className="li-privacy li2">
                                        Each of the paragraphs of these Terms operates separately. If any court or relevant authority decides that any of them are unlawful, the remaining paragraphs will remain in full force and effect.
                                        </li>
                                        <li className="li-privacy li2">
                                        If HospitALL fails to insist that you perform any of your obligations under these Terms, or if it does not enforce its rights against you, or if it delays in doing so, that will not mean that it has waived its rights against you and will not mean that you do not have to comply with those obligations. If HospitALL does waive a default by you, it will only do so in writing, and that will not mean that it will automatically waive any later default by you.
                                        </li>

                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>How We May Use Your Personal Information</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        You provide us with information when you sign up to HospitALL. HospitALL will also collect information from all of it users about their use of the website. Any information on users or their use of the website is subject to HospitALL Privacy Policy. By using HospitALL, you consent to use of that information and warrant that all information provided by you is accurate.
                                        </li> 
                                        <li className="li-privacy li2">
                                        We use information other than Personal Information, including aggregated or anonymized information, for ad targeting, to analyze trends, administer the Services, improve customer service, diagnose problems with our servers, track user movement, and gather demographic information for aggregate use. Third party ad platforms may use this information for a similar purpose, but you should follow up with third parties and confirm their information collection and usage practices directly. We may freely publish, disclose and use information other than Personal Information, including aggregated or anonymized Personal Information, to or with third parties.
                                        </li>
                                        <li className="li-privacy li2">
                                        We may use Your personal information to help us improve our products and services and getting in touch with you to let You know about goods, services or promotions that may interest you. HospitALL understands your privacy needs and will not sell, trade, or share personal information collected online from customers with third parties. All personal information collected by HospitALL will only be used internally and exclusively within our corporate group.
                                        </li>
                                        <li className="li-privacy li2">
                                        In the event that your name, address and phone number are passed on to a third party, this will only happen in an effort to have the Services requested to be carried out to you. When you place an order for the Services through HospitALL, your personal information will also be automatically used for marketing and/or promotional purposes from time to time. However, you can choose to not receive marketing or promotional information from HospitALL at anytime by simply utilizing the unsubscribe function in the electronic marketing material sent to you.
                                        </li>
                                        <li className="li-privacy li2">
                                        In the event that we engage with third party service providers in connection with our Services, we may share Personal Information with such service providers who need access to such information to carry out their work for us. Other than such service providers, we do not share Personal Information with third parties unless (1) you have indicated to us that you wish to receive information from such parties; (2) you otherwise give us your consent to do so; or (3) in response to a request for information
                                        </li>
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Data Protection and Privacy</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        In order to facilitate the Services to You, HospitALL may require You to submit, share and provide certain information (also in electronic form), including Personal Data, medical information of Yours that may be used by HospitALL and/or shared with relevant Service Providers or Third Party Providers in the provision of the Services chosen by You.
                                        </li> 
                                        <li className="li-privacy li2">
                                        You explicitly consent to the transfer and disclosure of Your information to such Service Providers and Third Party Providers and also to HospitALL’s use of Your contact details, to communicate with You from time to time, in relation to the Services offered on the Website. You expressly give Your consent to HospitALL in this regard. As a registered User, You also agree to receiving advertisements and other promotional and marketing material or information from HospitALL, with respect to any new components to the Services. If You do not wish to receive such communication, You may reach out to us on Info@hospitall.tech.
                                        </li>
                                        <li className="li-privacy li2">
                                        By accepting these terms, You expressly accept and consent to the following and understand that these shall operate in favor of HospitALL, Service Providers or Third Party Providers and any other party to whom HospitALL may provide access to Personal Data as permitted by these terms.
                                        </li>
                                        <li className="li-privacy li2">
                                        You accept and give consent for HospitALL to collect, process and store personal data and sensitive personal data provided by You (whether about You or anyone else) as outlined in the privacy statement. You confirm that You have the lawful right and consent to share Personal Data with HospitALL and for HospitALL to use such Personal Data in the same way as it could Your Information.
                                        </li>
                                        <li className="li-privacy li2">
                                        HospitALL may transfer Personal Data outside of Pakistan, subject to HospitALL putting in place reasonable technological measures to safeguard Personal Data from unauthorized access and use of the Personal Data; by subscribing to the Services You expressly accept this. HospitALL may share, sell, transfer, license or convey any part of Personal Data with or to any third party or a successor business or business entity whom HospitALL will use reasonable endeavors to bind to privacy terms analogous to the one set out on HospitALL’s web site. Regardless, where Personal Data passes on to any third party, that third party shall remain responsible for use of the Personal Data and HospitALL shall have no control over them.
                                        </li>
                                        <li className="li-privacy li2">
                                        Please do not provide Personal Data if You do not accept any of the foregoing. You acknowledge our ability to provide you with Services may be impaired or it may become impossible to provide you with Services if you decide not provide the requisite Personal Data.
                                        </li>
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>General</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        ASSIGNMENT: You may not assign or sub-license the rights, duties or obligations under the Terms of Use, in whole or in part, to any person or entity without the prior written consent of HospitALL.
                                        </li> 
                                        <li className="li-privacy li2">
                                        RELATIONSHIP BETWEEN PARTIES: It is expressly agreed that HospitALL and You are independent contractors.
                                        </li>
                                        <li className="li-privacy li2">
                                        GOVERNING LAW AND JURISDICTION: Any disputes arising between You and HospitALL is to be governed by and construed in accordance with the laws of Pakistan
                                        </li>
                                        <li className="li-privacy li2">
                                        SEVERABILITY AND WAIVER: If any provisions of these Terms of Use are found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms of Use, which shall remain in full force and effect. No waiver of any term of these Terms of Use shall be deemed a further or continuing waiver of such term or any other term.
                                        </li>
                                        <li className="li-privacy li2">
                                        ENTIRE AGREEMENT: The Terms of Use including the HospitALL Privacy Policy constitute the entire agreement between You and the Company with respect to the use of any HospitALL Platform.
                                        </li>
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Changes to Terms and Conditions</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        You can review the most current version of the Terms and Conditions at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms and Conditions by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms and Conditions constitutes acceptance of those changes.
                                        </li> 
                                    </ol>
                                </li>
                                <li className="li-privacy li1">
                                    <h5>Questions</h5>
                                    <ol>
                                        <li className="li-privacy li2">
                                        If you have any additional questions or concerns related to this statement and/or our practices, please email us at Info@hospitall.tech
                                        </li> 
                                    </ol>
                                </li>
                            </ol>
                            <h5 className="pt-4">This Terms and Conditions were last updated on 24th September 2018.</h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </>
        );
    }
}
export default TermsAndConditions;