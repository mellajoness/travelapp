import React, { Component } from 'react'
import {Text,View,TextInput,TouchableOpacity,ScrollView,StatusBar} from 'react-native'
import Entypo from "react-native-vector-icons/dist/Entypo";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export default class NextOfKinProfileScreen extends Component {
    state = {
        from:'',
        to:'',
        loading: false,
    };





       
  render() {
    return (
        <View style={{flex:1}}>
             <StatusBar backgroundColor='#007bff' barStyle="light-content" /> 
        <View style={{paddingHorizontal:20, paddingTop:60, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius:20,borderBottomColor:'#f8f8f8',borderBottomWidth:1,position:'relative',bottom:20}}>
          <View>
         <Text style={{fontWeight:'bold',fontSize:20}}>No bookings yet</Text>   
               
           <TouchableOpacity  onPress= {() => this.props.navigation.navigate('SignIn')}
                   style={{backgroundColor:'#2492D6',height:80,borderRadius:6,justifyContent:'center',marginTop:50,width:'100%'}} >
                   <View style={{flexDirection:'row',justifyContent:'center',}}>
                     <Entypo name='shopping-cart' size={40} color='white' style={{alignItems:'center',paddingHorizontal:6}}/>
                    <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>Book a Trip</Text>
                   </View>
           </TouchableOpacity>
           </View>
         
       </View>

       
      


     </View>

      
    )
  }
}

