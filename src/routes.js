import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SwiperScreen from './component/swiper'
import SignUpScreen from './component/signup'
import LoginScreen from './component/login'
import NextOfKinRegistrationScreen from './component/nextofkinregistration'
import BookingScreen from './component/booking'
import NoBookingsScreen from './component/nobookings'
import NewBookingScreen from './component/newbooking'
import BookingsFirstDetailsScreen from './component//bookingsfirstdetails'
import BookingsSummaryScreen from './component/bookingssumary'
import BookingsSuccessScreen from './component/booksuccess'
import NextOfKinScreen from './component/nextofkin'
import ProfileScreen from './component/profile'
import AvailableTripScreen from './component/AvailableTrips'
const LandingRoute = createStackNavigator({
    AvailableTrip:AvailableTripScreen,
    SignUp:SignUpScreen,
    NextOfKin:NextOfKinScreen,
    BookingsSuccess:BookingsSuccessScreen,
    BookingsSummary:BookingsSummaryScreen,
    BookingsFirstDetails:BookingsFirstDetailsScreen,
    NewBooking:NewBookingScreen,
    NoBookings:NoBookingsScreen,
    Booking:BookingScreen,
    NextOfKinRegistration:NextOfKinRegistrationScreen,
    Login:LoginScreen,
    Profile:ProfileScreen,
    Swiper: SwiperScreen,
     
   
}, {
    initialRouteName: 'AvailableTrip',  
    headerMode: 'none'
});




export default createAppContainer(LandingRoute);