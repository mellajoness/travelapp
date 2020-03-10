import React, { Component } from 'react'
import {Text,View,TextInput,TouchableOpacity,ScrollView,StatusBar,Dimensions,Image} from 'react-native'
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

export default class BookingsSummaryScreen extends Component {
    state = {
        from:'',
        to:'',
        loading: false,
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
       <Text style={{color:'black',fontSize:20,fontWeight:'bold',paddingLeft:20,textAlign:'center'}}>Bookings</Text> 
        </View>
     </View>
     

     <View style={{backgroundColor:'#F0F0F0',height: Dimensions.get('screen').height,flex:1,paddingHorizontal:0}}>
    

      <View style={{paddingTop:20,marginHorizontal:20,}}>
          <View style={{borderWidth:0.7,borderColor:'#b2d6e7'}}>
       <View style={{backgroundColor:'white',borderTopLeftRadius:5,borderTopRightRadius:5,
        flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:20,}}>
       
       <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',flex:1,}}>
      <View style={{flexDirection:'row',alignItems:'center',paddingTop:20}}>
        <View style={{width:45,height:45,borderRadius:45,backgroundColor:'#D5E8F4',alignItems:'center',justifyContent:'center'}}>
         <FontAwesome name='bus' size={25} color='#2492D6' style={{}}/>    
        </View>
        <Text style={{fontSize:22,fontWeight:'bold',paddingLeft:25}}>Bus Ride</Text>
        </View>
        </View>
        </View>

    <View style={{flexDirection:'row', }}>
       <View style={{backgroundColor:'white',width:'50%',borderBottomLeftRadius:5,}}>
        <Text style={{paddingLeft:20,color:'#4f4f4f',fontSize:15,paddingTop:20}}>Boarding</Text>
        <Text style={{paddingTop:5}}></Text>
        <Text style={{paddingLeft:20,color:'#4f4f4f',fontSize:15,paddingTop:10}}>Destination</Text>
        <Text></Text>
        <Text style={{paddingLeft:20,color:'#4f4f4f',fontSize:15,paddingTop:20}}>Departure</Text>
        <Text style={{paddingLeft:20,color:'#4f4f4f',fontSize:15,paddingTop:10,paddingBottom:20}}>Price</Text>
       </View>

       <View style={{backgroundColor:'white',width:'50%',borderBottomRightRadius:5,}}>
        <Text style={{color:'#030303',fontWeight:'bold',paddingTop:20,fontSize:17}}>GIG Jibowu Station</Text>
        <Text style={{color:'#4EA7DD',fontSize:15,paddingTop:3,fontWeight:'bold'}}>Lagos</Text>
        <Text style={{color:'#030303',fontWeight:'bold',paddingTop:10,fontSize:17}}>GIG Jibowu Station</Text>
        <Text style={{color:'#4EA7DD',fontSize:15,paddingTop:3,fontWeight:'bold'}}>Kebbi</Text>
        <Text style={{color:'#030303',fontWeight:'bold',paddingTop:10,fontSize:17}}>12/3/2019</Text>
        <Text style={{color:'#030303',fontWeight:'bold',paddingTop:10,fontSize:17}}>N500,000</Text>
       </View>
    </View>
    </View>
     <TouchableOpacity onPress={()=>this.setModalVisible(true)}
       style={{backgroundColor:'#2492D6',height:60,borderRadius:6,justifyContent:'center',marginTop:30,width:'100%'}} >
       <View style={{flexDirection:'row',justifyContent:'center',}}>        
       <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>Book Now</Text>
      </View>
      </TouchableOpacity> 
    
     </View>

          <View style={{marginHorizontal:20,paddingVertical:20}}>
          <TouchableOpacity  onPress= {() => this.props.navigation.navigate('SignIn')}
                    style={{backgroundColor:'#2492D6',height:50,borderRadius:4,justifyContent:'center',width:'100%',}} >
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                     <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Pay</Text>
                    </View>
            </TouchableOpacity>
            </View>
        </View>    

         
             
      


       </View>  
       
     
      
    )
  }
}

