import MainHome from './Components/Home/main';
import NotFound from './Components/404/404NotFound';
import DoctorDetails from './Components/Doctor/general-info';
import CenterDetails from './Components/Clinic/detail';
import DoctorList from './Components/Doctor/doctor-list';
import TreatmentDetails from './Components/Specialization/detail';
import Booking from './Components/Booking/booking-page';
import Login from './Components/Login/login';
import Register from './Components/Login/register';
import Specialization from './Components/Specialization/specialization-list';
import BottomTopSpecializations from './Components/Specialization/bottom-top-specializations';
import Clinic from './Components/Clinic/clinic-list';
import FAQ from './Components/FAQ/faq';
import BottomFaq from './Components/FAQ/bottom-faq';
import DoctorFaq from './Components/FAQ/doctor-faq';
import Contacts from './Components/ContactUs/contact';
import About from './Components/ContactUs/about';
import PrivacyPolicy from './Components/ContactUs/privacy-policy';
import TermsAndConditions from './Components/ContactUs/terms-and-conditions';
import Blog from './Components/MediaHub/Blogs/blog';
import BlogCategory from './Components/MediaHub/Blogs/blogCategory';
import Vlogs from './Components/MediaHub/Vlogs/vlog';
import Videos from './Components/MediaHub/Videos/video';
import DoctorSignIn from './Components/Doctor/doctor_sign_in';
import JoinDoctor from './Components/Doctor/join-doctor';
import Confirm from './Components/Booking/confirm';
import logout from './Components/Login/logout';
import CustomerProfile from './Components/CustomerProfile/Profile/profile';
import ApprovedAppointment from './Components/CustomerProfile/Appointments/approved-appointments';
import PendingAppointment from './Components/CustomerProfile/Appointments/pending-appointments';
import AppointmentHistory from './Components/CustomerProfile/Appointments/history';
import CurrentLabTest from './Components/CustomerProfile/LabTest/lab-test';
import LabTestHistory from './Components/CustomerProfile/LabTest/history';
import AllergyNotes from './Components/CustomerProfile/CustomerNotes/allergy-notes';
import RiskFactorNotes from './Components/CustomerProfile/CustomerNotes/riskfactor-notes';
import DoctorNotes from './Components/CustomerProfile/CustomerNotes/doctor-notes';
import BlogDetail from './Components/MediaHub/Blogs/blogDetail';
import VlogDetail from './Components/MediaHub/Vlogs/vlogDetail';
import VideoDetail from './Components/MediaHub/Videos/videoDetail';

export default [
  { path: "/", exact: true,name:"Layout", Component: MainHome },
  { path: "/doctor-detail/:doctorName/:doctorId", name:"Genral Detail", Component: DoctorDetails },
  { path: "/center-detail/:centerName/:centerId", name:"Genral Detail", Component: CenterDetails },
  { path: "/treatment-detail/:treatmentName/:treatmentId", name:"Genral Detail", Component: TreatmentDetails },
  // { path: "/get_treatment/:treatmentName", name:"Genral Detail", Component: TreatmentDetails },
  { path: "/doctor-list", name:"Genral List", Component: DoctorList },      
  { path: "/booking", name:"Booking", Component: Booking },      
  { path: "/clinic-list", name:"Clinic", Component: Clinic },      
  { path: "/specialization-list", name:"Specialization", Component: Specialization },
  { path: "/bottom-top-special",  name:"BottomTopSpecializations", Component: BottomTopSpecializations },      
  { path: "/login", name:"Login", Component: Login },      
  { path: "/logout", name:"Logout", Component: logout },      
  { path: "/register", name:"Register", Component: Register },
  { path: "/faq", name:"FAQ", Component: FAQ },
  { path: "/bottom-faq", name:"BottomFaq", Component: BottomFaq},                  
  { path: "/doctor-faq", name:"DoctorFaq", Component: DoctorFaq},                  
  { path: "/about-us", name:"AboutUs", Component: About },                  
  { path: "/privacy-policy", name:"PrivacyPolicy", Component: PrivacyPolicy },                  
  { path: "/terms-and-conditions", name:"TermsAndConditions", Component: TermsAndConditions },                  
  { path: "/blogs", name:"Blog", name:"List of all blogs", Component: Blog},                  
  { path: "/blog-detail/:blogName/:blogId", name:"Blog Detail Page", Component: BlogDetail},
  { path: "/blog/:blogCategory/:categoryId", name:"Blog Categories", Component: BlogCategory},
  { path: "/vlogs", name:"List of vlogs", Component: Vlogs},
  { path: "/vlog-detail/:vlogName/:vlogId", name:"Vlog Detail Page", Component: VlogDetail},
  { path: "/videos", name:"List of all videos", Component: Videos},
  { path: "/video-detail/:videoName/:videoId", name:"Detail page of video", Component: VideoDetail},
  { path: "/join-doctor", name:"Join Doctor", Component: JoinDoctor},                  
  { path: "/doctor-signin", name:"Doctor Sign In", Component: DoctorSignIn},                  
  { path: "/confirm", name:"Confirm", Component: Confirm },                  
  { path: "/contact-us", name:"Contacts", Component: Contacts},             
  { path: "/customer-profile", name:"Customer Profile", Component: CustomerProfile},             
  { path: "/approved-appointments", name:"Approved Appointment", Component: ApprovedAppointment},            
  { path: "/pending-appointments", name:"Pending Appointment", Component: PendingAppointment},            
  { path: "/appointment-history", name:"Appointment History", Component: AppointmentHistory},             
  { path: "/current-lab-test", name:"Customer Lab test", Component: CurrentLabTest},             
  { path: "/lab-test-history", name:"Customer Lab test History", Component: LabTestHistory},             
  { path: "/allergy-notes", name:"Allergy Notes", Component: AllergyNotes},             
  { path: "/riskfactor-notes", name:"Risk Factor Notes", Component: RiskFactorNotes},             
  { path: "/doctor-notes", name:"Doctor Notes", Component: DoctorNotes},             
  { path: "/404-not-found", name:"404 Not Found", Component: NotFound },
];
