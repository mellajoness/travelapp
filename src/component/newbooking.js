import React, { Component } from 'react'
import {Text,View,TextInput,TouchableOpacity,ScrollView,StatusBar,Picker, Alert} from 'react-native'
import Entypo from "react-native-vector-icons/dist/Entypo";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import DatePicker from 'react-native-datepicker'
import {POST_SERVICE} from '../shared/Backend'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


export default class NewBookingScreen extends Component {
  state = {
    departure:'',
    departureLabel:'SELECT DEPARTURE LOCATION',
    destination:'',
    destinationLabel:'SELECT DESTINATION LOCATION',
    date:'',  
    loading: false,

  
};


booking = async () => {
    
 
  if(this.state.destinationLabel)  
    
    Alert.alert('Please Enter Destination Location')
  

  else if(this.state.departureLabel)
  
  Alert.alert('Please Enter Departure LocationRTRTRTRTR')



  else{
  const body = {    
   departure :this.state.departure,
   destination:this.state.destination,
   date:this.state.date,
};
  
console.log('my  body',body)
const endpoint = '/findtrips';

try {
    const response = await POST_SERVICE (body, endpoint);
    console.log('BOOK TRIP URL', response);
   
     // this.setState({loading: false});
     if(response.data.responsecode==='00')
    
    {
      this.props.navigation.navigate('BookingsSummary')
       Alert.alert('Alert',response.data.message);
      
    }
    else if (response.data.responsecode==='99')
    {
    
        Alert.alert('Alert', response.data.message);  
       
    }
} 

catch (e) {
    // this.setState({loading: false});
    // InteractionManager.runAfterInteractions(() => {
    //     setTimeout(() => {
    //         Alert.alert('Login Error', "Error occurred while trying to login. Kindly check your internet connection.");
    //     });
    // }
    // );
    return e.response;
}}
}   
  render() {
    return (
        
      <View style={{flex:1}}>
        <ScrollView>
         <View style={{paddingHorizontal:20, paddingTop:23, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius:20,borderBottomColor:'#f8f8f8',borderBottomWidth:1,position:'relative',bottom:20}}>

        <View style={{flexDirection:'row',alignItems:'center',paddingTop:25}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
            <AntDesign name='close' size={30} color='#151515' style={{}}/> 
           </TouchableOpacity>
           <Text style={{color:'#2E2E2E',fontSize:20,fontWeight:'bold',paddingLeft:30}}>New Booking </Text>  
        </View> 

        <Text style={{color:'gray',paddingTop:50,fontWeight:'bold'}}>From</Text>
         <View style={{backgroundColor:'#DAD9D9',borderRadius:5,marginTop:15}}>    
         <Picker
            selectedValue={this.state.departure}
            style={{height: 50, width:'100%'}}
            onValueChange={(itemValue, itemIndex) =>
           this.setState({departure: itemValue})
          }>
          <Picker.Item label={this.state.departureLabel}   />
          <Picker.Item label="Abuja" value="Abuja"  />
          <Picker.Item label="Abia" value="Abia"  />
          <Picker.Item label="Adamawa" value="Adamawa" />
          <Picker.Item label="Akwa Ibom" value="Akwa Ibom" />
          <Picker.Item label="Anambra" value="Anambra" />
          <Picker.Item label="Bauchi" value="Bauchi" />
          <Picker.Item label="Bayelsa" value="Bayelsa" />
          <Picker.Item label="Benue" value="Benue" />
          <Picker.Item label="Borno" value="Borno" />
          <Picker.Item label="Cross River" value="Cross River" />
          <Picker.Item label="Delta" value="Delta" />
          <Picker.Item label="Ebonyi" value="Ebonyi" />
          <Picker.Item label="Edo" value="Edo" />
          <Picker.Item label="Ekiti" value="Ekiti" />
          <Picker.Item label="Enugu" value="Enugu" />
          <Picker.Item label="Gombe" value="Gombe" />
          <Picker.Item label="Imo" value="Imo" />
          <Picker.Item label="Jigawa" value="Jigawa" />
          <Picker.Item label="Kaduna" value="Kaduna" />
          <Picker.Item label="Kano" value="Kano" />
          <Picker.Item label="Katsina" value="Katsina" />
          <Picker.Item label="Kebbi" value="Kebbi" />
          <Picker.Item label="Kogi" value="Kogi" />
          <Picker.Item label="Kwara" value="Kwara" />
          <Picker.Item label="Lagos" value="Lagos" />
          <Picker.Item label="Nasarawa" value="Nasarawa" />
          <Picker.Item label="Niger" value="Niger" />
          <Picker.Item label="Ogun" value="Ogun" />
          <Picker.Item label="Ondo" value="Ondo" />
          <Picker.Item label="Osun" value="Osun" />
          <Picker.Item label="Oyo" value="Oyo" />
          <Picker.Item label="Plateau" value="Plateau" />
          <Picker.Item label="Rivers" value="Rivers" />
          <Picker.Item label="Sokoto" value="Sokoto" />
          <Picker.Item label="Taraba" value="Taraba" />
          <Picker.Item label="Yobe" value="Yobe" />
          <Picker.Item label="Zamfara" value="Zamfara" />
         </Picker>
        </View>
  

      <Text style={{color:'gray',paddingTop:25,fontWeight:'bold'}}>To</Text>
      <View style={{backgroundColor:'#DAD9D9',borderRadius:5,marginTop:10}}>
      <Picker
            selectedValue={this.state.destination}
            style={{height: 50, width:'100%'}}
            onValueChange={(itemValue, itemIndex) =>
           this.setState({destination: itemValue})
          }>
          <Picker.Item label={this.state.destinationLabel} /> 
          <Picker.Item label="Abuja" value="Abuja"  /> 
          <Picker.Item label="Abia" value="Abia"  />
          <Picker.Item label="Adamawa" value="Adamawa" />
          <Picker.Item label="Akwa Ibom" value="Akwa Ibom" />
          <Picker.Item label="Anambra" value="Anambra" />
          <Picker.Item label="Bauchi" value="Bauchi" />
          <Picker.Item label="Bayelsa" value="Bayelsa" />
          <Picker.Item label="Benue" value="Benue" />
          <Picker.Item label="Borno" value="Borno" />
          <Picker.Item label="Cross River" value="Cross River" />
          <Picker.Item label="Delta" value="Delta" />
          <Picker.Item label="Ebonyi" value="Ebonyi" />
          <Picker.Item label="Edo" value="Edo" />
          <Picker.Item label="Ekiti" value="Ekiti" />
          <Picker.Item label="Enugu" value="Enugu" />
          <Picker.Item label="Gombe" value="Gombe" />
          <Picker.Item label="Imo" value="Imo" />
          <Picker.Item label="Jigawa" value="Jigawa" />
          <Picker.Item label="Kaduna" value="Kaduna" />
          <Picker.Item label="Kano" value="Kano" />
          <Picker.Item label="Katsina" value="Katsina" />
          <Picker.Item label="Kebbi" value="Kebbi" />
          <Picker.Item label="Kogi" value="Kogi" />
          <Picker.Item label="Kwara" value="Kwara" />
          <Picker.Item label="Lagos" value="Lagos" />
          <Picker.Item label="Nasarawa" value="Nasarawa" />
          <Picker.Item label="Niger" value="Niger" />
          <Picker.Item label="Ogun" value="Ogun" />
          <Picker.Item label="Ondo" value="Ondo" />
          <Picker.Item label="Osun" value="Osun" />
          <Picker.Item label="Oyo" value="Oyo" />
          <Picker.Item label="Plateau" value="Plateau" />
          <Picker.Item label="Rivers" value="Rivers" />
          <Picker.Item label="Sokoto" value="Sokoto" />
          <Picker.Item label="Taraba" value="Taraba" />
          <Picker.Item label="Yobe" value="Yobe" />
          <Picker.Item label="Zamfara" value="Zamfara" />
         </Picker>
        </View>


<Text style={{color:'gray',paddingTop:25,fontWeight:'bold'}}>Date</Text>
<View style={{marginTop:10}}>
     <DatePicker
        style={{width: '100%',height:50,backgroundColor:'#DAD9D9',borderBottomWidth:10,borderBottomColor:'#DAD9D9',borderRadius:5,}}
        date={this.state.date}
        mode="date"
        placeholder="Select Date"  
        format="YYYY-MM-DD"
        // minDate="2016-01-01"
        minDate={new Date()}  //use this when going live
        maxDate="3000-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{ 
          dateIcon: {
            position: 'absolute',
            right: 10,
            top: 8,
            marginLeft: 0,
           
          },  
          dateInput: {
            marginLeft: 36,
            borderWidth:0,
           
          }
         
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      /> 
      </View>     
           
            
            <TouchableOpacity  onPress= {() => this.props.navigation.navigate('SignIn')}
                    style={{backgroundColor:'#2492D6',height:50,borderRadius:4,justifyContent:'center',marginTop:35,width:'100%'}} >
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                     <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Find Trip</Text>
                    </View>
            </TouchableOpacity>

           
        </View>
        </ScrollView>
        
       


      </View>
      
    )
  }
}

