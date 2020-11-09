import React from 'react'; 
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from "react-native-vector-icons/dist/Entypo";
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
import BookingsDetailsScreen from './component/bookingDetails'
import BookingListScreen from './component/bookingList'
import TripsScreen from './component/trips'
import PersonalProfileScreen from './Views/personalProfile'
import NextOfKinProfileScreen from './Views/nextOfKinProfile'
import MyBookingScreen from './component/myBookings'
import CancelBookingScreen from './component/cancelbooking'
const LandingRoute = createStackNavigator({
    CancelBooking:CancelBookingScreen,
    MyBookings:MyBookingScreen,
    NextOfKinProfile:NextOfKinProfileScreen,
    PersonalProfile:PersonalProfileScreen,
    Trips:TripsScreen,
    BookingList:BookingListScreen,
    BookingsDetails:BookingsDetailsScreen,
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
    initialRouteName: 'Login',  
    headerMode: 'none'
});


const TabNavigator = createBottomTabNavigator({
  
    Home:BookingScreen,
    // Home:SwiperScreen,
    Bookings:MyBookingScreen,
    icon:NewBookingScreen,
    Trips:TripsScreen,
    Profile:ProfileScreen,
  },

  {
    
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
      
        if (routeName === 'Home') {
          iconName = `ios-home`;
         
        }   
        else if (routeName === 'Bookings') {
          iconName = `ios-calendar`;
        }
        else if (routeName === 'icon') {
          iconName = `ios-add-circle`;
        }
        else if (routeName === 'Trips') {
          iconName = `ios-cash`;
        }
        else if (routeName === 'Profile') {
          iconName = `md-person`;   
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 23 : 27} color={tintColor} />;
               <Entypo name='shopping-cart' size={40} color='white' />
       
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2492D6',
      inactiveTintColor: 'gray',
      showLabel:true,
      animationEnabled:true,
      SwipeEnabled:true
    },
  }
);  

const App = createSwitchNavigator({
  LandingRoute: LandingRoute,
  App:TabNavigator,
  
}, {
  initialRouteName: 'LandingRoute'
});

export default createAppContainer(App);