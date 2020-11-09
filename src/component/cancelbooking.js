import React, { Component } from 'react'
import {Text,View,TextInput,TouchableOpacity,ScrollView,StatusBar,Dimensions,Image,Modal} from 'react-native'
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class CancelBookingScreen extends Component {
    state = {
      
    };     
  render() {
    return (
        
      <View style={{flex:1}}>
        <StatusBar backgroundColor='#007bff' barStyle="light-content" />  
        <View style={{paddingRight:30,paddingLeft:20, backgroundColor:'white',height:50,justifyContent:'center'}}>
         <View style={{ flexDirection:'row', }}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('AvailableTrip')} >
          <AntDesign name='arrowleft' size={30} color='black' style={{}}/> 
         </TouchableOpacity>

         <View style={{flexDirection:'row',alignItems:'center'}}>
         <Text style={{color:'#4A4A4A',fontSize:20,fontWeight:'bold',paddingLeft:20,textAlign:'center'}}>Lagos</Text> 
         <View style={{borderColor:'#4A4A4A',borderWidth:2,width:19,marginHorizontal:5}}></View>
         <Text style={{color:'#4A4A4A',fontSize:20,fontWeight:'bold',paddingLeft:0,textAlign:'center'}}>Kebbi</Text> 
          </View> 
          </View>
       </View> 
       

       <View style={{backgroundColor:'white',height: Dimensions.get('screen').height,flex:1,paddingHorizontal:0}}>
      

        <View style={{paddingTop:30,marginHorizontal:20,}}>
            <View style={{}}>
         <View style={{backgroundColor:'white',borderTopLeftRadius:5,borderTopRightRadius:5,
          flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:20,}}>
         
         <View style={{alignContent:'center',flex:1,}}>
        <View style={{flexDirection:'row',alignItems:'center',paddingTop:20}}>
          <View style={{width:45,height:45,borderRadius:45,backgroundColor:'#D5E8F4',alignItems:'center',justifyContent:'center'}}>
           <FontAwesome name='bus' size={25} color='#2492D6' style={{}}/>    
          </View>
          <Text style={{fontSize:22,fontWeight:'bold',paddingLeft:25}}>Bus Ride</Text>
          </View>
          </View>
          </View>

      <View style={{flexDirection:'row',marginTop:10 }}>
         <View style={{backgroundColor:'white',width:'50%',borderBottomLeftRadius:5,}}>
          <Text style={{paddingLeft:20,color:'#4f4f4f',fontSize:15,paddingTop:20}}>Boarding</Text>
          <Text style={{paddingTop:5}}></Text>
          <Text style={{paddingLeft:20,color:'#4f4f4f',fontSize:15,paddingTop:10}}>Destination</Text>
          <Text></Text>
          <Text style={{paddingLeft:20,color:'#4f4f4f',fontSize:15,paddingTop:20}}>Departure</Text>
          <Text style={{paddingLeft:20,color:'#4f4f4f',fontSize:15,paddingTop:10}}>Price</Text>
          <Text style={{paddingLeft:20,color:'#4f4f4f',fontSize:15,paddingTop:10,paddingBottom:20}}>Seats</Text>
         </View>

         <View style={{backgroundColor:'white',width:'50%',borderBottomRightRadius:5,}}>
          <Text style={{color:'#636363',fontWeight:'bold',paddingTop:20,fontSize:17}}>GIG Jibowu Station</Text>
          <Text style={{color:'#4EA7DD',fontSize:15,paddingTop:3,fontWeight:'bold'}}>Lagos</Text>
          <Text style={{color:'#636363',fontWeight:'bold',paddingTop:10,fontSize:17}}>GIG Jibowu Station</Text>
          <Text style={{color:'#4EA7DD',fontSize:15,paddingTop:3,fontWeight:'bold'}}>Kebbi</Text>
          <Text style={{color:'#636363',fontWeight:'bold',paddingTop:10,fontSize:17}}>12/3/2019</Text>
          <Text style={{color:'#636363',fontWeight:'bold',paddingTop:10,fontSize:17}}>N500,000</Text>
          <Text style={{color:'#636363',fontWeight:'bold',paddingTop:10,fontSize:17}}>10</Text>
         </View>
      </View>
      </View>

      <TouchableOpacity style={{backgroundColor:'white',height:60,borderRadius:5,alignContent:'center',justifyContent:'center',alignItems:'center',borderColor:'gray',borderWidth:0.5,marginHorizontal:20,marginTop:20}}>
         <Text style={{fontSize:22,fontWeight:'bold',color:'#9F9F9F'}}>Cancel</Text>
      </TouchableOpacity>

       {/* <TouchableOpacity>
         style={{backgroundColor:'white',height:60,justifyContent:'center',marginTop:30,borderColor:'gray',borderWidth:0.5,borderRadius:5}} >
         <View style={{flexDirection:'row',justifyContent:'center',}}>        
         <Text style={{color:'#9F9F9F',fontSize:22,fontWeight:'bold'}}>Cancel</Text>
        </View>
       </TouchableOpacity>  */}
      
       </View>    
      </View>
      </View>
    )
  }
}

