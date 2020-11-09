import React, { Component } from 'react'
import {Text,View,TextInput,TouchableOpacity,ScrollView,StatusBar,Picker, Alert} from 'react-native'
import Entypo from "react-native-vector-icons/dist/Entypo";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import DatePicker from 'react-native-datepicker'
import {POST_SERVICE} from '../shared/Backend'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


export default class TripsScreen extends Component {
  state = {
   
};
 
  render() {
    return (
      <View style={{flex:1}}>  
        <View style={{paddingHorizontal:20}}>
         <Text style={{color:'#1D1D1D',paddingTop:20,fontWeight:'bold',fontSize:20}}>Trips</Text> 
          
        <View style={{borderWidth:0.5,borderRadius:5,borderColor:'#d4d4d4',paddingHorizontal:20,paddingVertical:10,marginTop:20,backgroundColor:'#F8F8F8'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
          <Text style={{fontWeight:'bold',color:'#6D6D6D',fontSize:17}}>lagos to Kebbi</Text>
          <Text style={{fontWeight:'bold',color:'#6D6D6D',fontSize:17}}>N5,000</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:7}}> 
          <Text style={{color:'#6D6D6D',fontSize:15}}>Morning Trip</Text>
          <Text style={{color:'#CBCBCB',fontSize:15}}>12/02/2010</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10}}> 
          <Text style={{color:'#2492D6',fontSize:14}}>completed</Text>
          
        </View>
        </View> 

        </View>
      </View>
    )
  }
}

