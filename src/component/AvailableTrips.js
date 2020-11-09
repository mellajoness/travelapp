import React, { Component } from 'react';
import { Dimensions, View ,ImageBackground,TouchableOpacity,Image,StatusBar,Text,StyleSheet,TextInput,Modal, Alert,Picker} from 'react-native';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import Entypo from "react-native-vector-icons/dist/Entypo";
import Slider from '@react-native-community/slider';
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const radio_props = [  
  {label: 'High Price to low', value: 0 },
  {label: 'Low price to high', value: 1 },
 
];
export default class AvailableTripScreen extends Component {
  constructor(props){
    super(props);
    this.state={
        modalVisible: false,
        modalVisibleFilter: false,
        profileData: {},
        departurePark:'',
        departureTime:'',
        destinationPark:'',
        
        date:'',   
        loading: false,
        value: 0,
    }};
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

      setModalVisibleFilter(visibleFilter) {
        this.setState({modalVisibleFilter: visibleFilter});
      }
  
  render() {
    console.log(this.props);
    return ( 
    <View style={{flex:1,backgroundColor:'#F6F6F6'}}>
      <StatusBar backgroundColor='#007bff' barStyle="light-content" />  

      <View style={{paddingRight:30,paddingLeft:20, backgroundColor:'white',height:50,justifyContent:'center'}}>
         <View style={{ flexDirection:'row', }}>
         <TouchableOpacity onPress={() => this.props.navigation()} >
          <AntDesign name='arrowleft' size={30} color='black' style={{}}/> 
         </TouchableOpacity>
         <Text style={{color:'black',fontSize:20,fontWeight:'bold',paddingLeft:20,textAlign:'center'}}>Bookings</Text> 
          </View>
       </View>

       <View style={{backgroundColor:'#EDEDED',height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:40,marginTop:20,borderBottomColor:'#E0E0E0',borderTopColor:'#E0E0E0',borderBottomWidth:1,borderTopWidth:1}}>   
        
        <TouchableOpacity onPress={()=>this.setModalVisibleFilter(true)}>
          <Text style={{fontSize:14,fontWeight:'',color:'#030303'}}>SORT</Text>
        </TouchableOpacity>

         <View style={{height:15,borderColor:'#939393',borderWidth:1}}></View>

         <TouchableOpacity  onPress={()=>this.setModalVisible(true)}>
          <Text style={{fontSize:14,fontWeight:'',color:'#030303'}}>FILTER</Text>
         </TouchableOpacity>
       </View>
 

       <TouchableOpacity  onPress={()=>this.props.navigation.navigate('BookingsFirstDetails')}  style={{paddingTop:20,marginHorizontal:20}}>
         <View style={{height:50,backgroundColor:'white',borderTopLeftRadius:5,borderTopRightRadius:5,
          flexDirection:'row',alignItems:'center',borderBottomColor:'#E0E0E0',borderBottomWidth:1,justifyContent:'space-between',paddingHorizontal:20}}>
          <View style={{flexDirection:'row',alignItems:'center'}}> 
             <Text style={{fontSize:22,fontWeight:'bold',color:'#424242'}}>Lagos</Text>
             <View style={{height:3,borderColor:'#939393',borderWidth:1,width:30,marginLeft:10}}></View>
             <Text style={{fontSize:22,fontWeight:'bold',color:'#424242',paddingLeft:10}}>Kebbi</Text>
          </View>
           
          <View style={{width:35,height:35,borderRadius:35,backgroundColor:'#D5E8F4',alignItems:'center',justifyContent:'center'}}>
           <FontAwesome name='bus' size={20} color='black' style={{}}/>    
          </View>

          </View>

      <View style={{flexDirection:'row', }}>
         <View style={{backgroundColor:'white',width:'50%',borderBottomLeftRadius:5,}}>
          <Text style={{paddingLeft:20,color:'#4f4f4f',fontSize:15,paddingTop:15}}>Depature</Text>
          <Text style={{paddingTop:5}}></Text>
          <Text style={{paddingLeft:20,color:'#4f4f4f',fontSize:15,paddingTop:10}}>Price</Text>
          <Text style={{paddingLeft:20,color:'#4f4f4f',fontSize:15,paddingTop:10,paddingBottom:30}}>Free Seats</Text>
         </View>

         <View style={{backgroundColor:'white',width:'50%',borderBottomRightRadius:5,}}>
          <Text style={{color:'#030303',fontWeight:'bold',paddingTop:15,fontSize:17}}>GIG Jibowu Station</Text>
          <Text style={{color:'#4EA7DD',fontSize:13,paddingTop:3}}>28th Oct 2018:11:00am</Text>
          <Text style={{color:'#030303',fontWeight:'bold',paddingTop:10,fontSize:17}}>N500,000</Text>
          <Text style={{color:'#6FB966',fontWeight:'bold',paddingTop:10,paddingBottom:30,fontSize:17}}>10</Text>
         </View>
      </View>
       </TouchableOpacity>



    <Modal
     visible={this.state.modalVisibleFilter}
     onRequestClose={() => modalVisible()}
     transparent={true}
     animationType='fade'
    >
    
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}>
    <TouchableOpacity style={{flex: 1,alignContent:'center',justifyContent:'center'}} onPress={() =>{ this.setModalVisibleFilter(!this.state.modalVisibleFilter);}}/>
    
    <View style={{backgroundColor: 'white', paddingVertical:30,borderRadius:10,marginHorizontal:30,paddingHorizontal:20,justifyContent:'space-evenly'}}>
      <View style={{borderWidth:0.2, borderColor:'gray',position:'relative',top:40}}></View>
    <RadioForm
          radio_props={radio_props}
          initial={0}
          animation={true}
          onPress={(value) => {this.setState({value:value})}}
        />
    </View>
    <TouchableOpacity style={{flex: 1,alignContent:'center',justifyContent:'center'}} onPress={() =>{ this.setModalVisibleFilter(!this.state.modalVisibleFilter);}}/>
   
    </View>
    </Modal>



   <Modal
     visible={this.state.modalVisible}
     onRequestClose={() => modalVisible()}
     transparent={true}
     animationType='fade'
    >
    
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
    <TouchableOpacity style={{flex: 1}} onPress={() =>{ this.setModalVisible(!this.state.modalVisible);}} />
    
    <View style={{backgroundColor: 'white', paddingVertical:20,borderTopLeftRadius:10,borderTopRightRadius:10,height:'100%'}}>
      <View style={{flexDirection:'row',paddingHorizontal:15}}>
        <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
         <Entypo name='cross' size={35} color='black' style={{}}/>
         </TouchableOpacity>
         <Text style={{fontWeight:'bold',fontSize:24,paddingLeft:40,paddingTop:3}}>Filters</Text>
      </View>

      <View style={{paddingHorizontal:15}}>
      <Text style={{paddingTop:30,paddingLeft:12,fontSize:18,fontWeight:'bold',color:'#595959'}}>Price Range</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:12,paddingTop:20}}>
        <Text>N1,O00</Text>
        <Text>N10,000</Text>
      </View>
      <Slider
         style={{width: '100%', height: 40}}
         minimumValue={0}
         maximumValue={1}
         minimumTrackTintColor="#007bff"
         maximumTrackTintColor="gray"
         thumbTintColor="blue"
     />
     </View>
     <View style={{width:'100%',borderColor:'#ADADAD', borderWidth:0.4,marginTop:20}}></View>

  <ScrollView>
     <View style={{paddingHorizontal:20,paddingTop:10}}>
      <Text style={{fontSize:18,fontWeight:'bold',color:'#595959'}}>Car Park</Text>
      <Text style={{fontSize:16,color:'#595959',paddingTop:10}}>Depature Park</Text>
      <View style={{backgroundColor:'#F0F0F0',borderRadius:5,marginTop:10}}>
      <Picker
            selectedValue={this.state.departurePark}
            style={{height: 50, width:'100%'}}
            onValueChange={(itemValue, itemIndex) =>
           this.setState({departurePark: itemValue})
          }>
          <Picker.Item label="" /> 
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


        <Text style={{fontSize:16,color:'#595959',paddingTop:15}}>Arrival Park</Text>
        <View style={{backgroundColor:'#F0F0F0',borderRadius:5,marginTop:10}}>
      <Picker
            selectedValue={this.state.destinationPark}
            style={{height: 50, width:'100%'}}
            onValueChange={(itemValue, itemIndex) =>
           this.setState({destinationPark: itemValue})
          }>
          <Picker.Item label="" /> 
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


        <Text style={{fontSize:16,color:'#595959',paddingTop:15}}>Departure Time</Text>
        <View style={{backgroundColor:'#F0F0F0',borderRadius:5,marginTop:10}}>
      <Picker
            selectedValue={this.state.departureTime}
            style={{height: 50, width:'100%'}}
            onValueChange={(itemValue, itemIndex) =>
           this.setState({departureTime: itemValue})
          }>
          <Picker.Item label="" /> 
          <Picker.Item label="1:00am" value="1:00am"  /> 
          <Picker.Item label="2:00am" value="2:00am"  />
          <Picker.Item label="3:00am" value="3:00am" />
          <Picker.Item label="4:00am" value="4:00am" />
          <Picker.Item label="5:00am" value="5:00am" />
          
         </Picker>
        </View>

     

     </View>
     <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:7,paddingTop:30}}>
      <TouchableOpacity  style={{paddingLeft:15,paddingRight:15, marginTop: 10,width:'50%'}}>
      <View style={{flexDirection:'row',height:50,backgroundColor:'white',borderWidth:1,borderRadius:3,alignContent:'center', borderColor:'#2391D5', justifyContent:'center',alignItems:'center',paddingHorizontal:15,alignItems:'center'}}>
        <Text style={{color:'#2391D5',fontWeight:'bold',fontSize:17}}>Clear</Text>
      </View>
     </TouchableOpacity>

     <TouchableOpacity  style={{paddingLeft:15,paddingRight:15, marginTop: 10,width:'50%'}}>
       <View style={{flexDirection:'row',height:50,backgroundColor:'#2391D5',borderRadius:3,alignContent:'center',justifyContent:'center',alignItems:'center',paddingHorizontal:15,borderRadius:3,alignContent:'center',}}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Apply</Text>
      </View>
     </TouchableOpacity>


     </View>
     </ScrollView>
     </View>
     </View>
     </Modal>  

    </View>        
    )
  }
} 
