import React, { Component } from 'react';
import { Dimensions, View ,ImageBackground,TouchableOpacity,Image,StatusBar,Text,StyleSheet,TextInput,Modal, Alert} from 'react-native';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import Entypo from "react-native-vector-icons/dist/Entypo";
import Slider from '@react-native-community/slider';
export default class AvailableTripScreen extends Component {
  constructor(props){
    super(props);
    this.state={
        modalVisible: false,
        profileData: {},
    }};
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
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
        
        <TouchableOpacity>
          <Text style={{fontSize:14,fontWeight:'',color:'#030303'}}>SORT</Text>
        </TouchableOpacity>
         <View style={{height:15,borderColor:'#939393',borderWidth:1}}></View>
         <TouchableOpacity  onPress={()=>this.setModalVisible(true)}>
          <Text style={{fontSize:14,fontWeight:'',color:'#030303'}}>FILTER</Text>
         </TouchableOpacity>
       </View>
 

       <View style={{paddingTop:20,marginHorizontal:20}}>
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
       </View>


   <Modal
     visible={this.state.modalVisible}
     onRequestClose={() => modalVisible()}
     transparent={true}
     animationType='fade'
    >
    
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
    <TouchableOpacity style={{flex: 1}} onPress={() =>{ this.setModalVisible(!this.state.modalVisible);}} />
    
    <View style={{backgroundColor: 'white', paddingVertical:20,borderTopLeftRadius:10,borderTopRightRadius:10,height:'100%',paddingLeft:15}}>
      <View style={{flexDirection:'row',}}>
        <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
         <Entypo name='cross' size={35} color='black' style={{}}/>
         </TouchableOpacity>
         <Text style={{fontWeight:'bold',fontSize:22,paddingLeft:40,paddingTop:3}}>Filters</Text>
      </View>
      <Text style={{paddingTop:30}}>Price Range</Text>
      <Slider
         style={{width: 200, height: 40}}
         minimumValue={0}
         maximumValue={1}
         minimumTrackTintColor="#FFFFFF"
         maximumTrackTintColor="#000000"
     />
     
     </View>
     
     </View>
     </Modal>  
    </View>        
    )
  }
} 
