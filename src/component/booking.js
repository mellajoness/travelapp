import React, { Component } from 'react';
import { Dimensions, View ,ImageBackground,TouchableOpacity,Image,StatusBar,Text,StyleSheet} from 'react-native';
import SignUpFormView from '../Views/signupform'
import { ScrollView } from 'react-native-gesture-handler';
import BookingFormScreen from '../Views/bookingform'
import Entypo from "react-native-vector-icons/dist/Entypo";


export default class BookingScreen extends Component {
  render() {
    console.log(this.props);
    return ( 
        <ScrollView style={{backgroundColor:'white'}}>
         <View style={{flex:1 ,backgroundColor:'white' }}> 
         <StatusBar backgroundColor='#007bff' barStyle="light-content" />  
         <View style={{width: '100%'}}>
           <ImageBackground source={require('../assets/imgs/img.png.jpg')}
              style={{height: 250, width: Dimensions.get('screen').width }} resizeMode='cover'>
               <View style={{alignItems:'center',paddingTop:60}}>
               <Entypo name='shopping-cart' size={40} color='white' style={{alignItems:'center',}}/>
                 <Text style={{color:'white',fontWeight:'bold',fontSize:40}}>Book a Trip</Text>
              </View>
              
         </ImageBackground>
        <BookingFormScreen  navigation= {this.props.navigation}/>

           </View>

        
              
          </View>
          </ScrollView>
            
    )
  }
} 




