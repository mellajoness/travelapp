import React, { Component } from 'react'
import {Text,View,TextInput,TouchableOpacity,ScrollView,StatusBar,Dimensions,Image} from 'react-native'
import Entypo from "react-native-vector-icons/dist/Entypo";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export default class BookingsFirstDetailsScreen extends Component {
    state = {
        from:'',
        to:'',
        loading: false,
    };





       
  render() {
    return (
        
      <View style={{flex:1}}>
           <StatusBar backgroundColor='#007bff' barStyle="light-content" />  
        <ScrollView>
        
         <View style={{paddingRight:30,paddingLeft:20, backgroundColor:'white',height:50,justifyContent:'center'}}>
               <View style={{ flexDirection:'row',alignItems:'center' }}>
               <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()} >
                  <Entypo name='menu' size={30} color='black' style={{}}/> 
               </TouchableOpacity>
           <Text style={{color:'black',fontSize:20,fontWeight:'bold',paddingLeft:20}}>Bookings</Text> 
           </View>
       </View>


       <View style={{backgroundColor:'#F0F0F0',height: Dimensions.get('screen').height,flex:1,paddingHorizontal:20}}>

       <View style={{marginTop: 20, backgroundColor: '#FAFAFA', borderRadius: 5, borderColor:'#F3F7F9',borderWidth:1}}>
           <View style={{flexDirection:'row',justifyContent:'center',paddingTop:15,alignItems:'center'}}>
           <View style={{width:50,height:50,borderRadius:50,backgroundColor:'#D5E8F4'}}>
                <View style={{padding:2}}> 
                 {/* <Image source={require('../assets/imgs/bus.jpg')} style={{width: 30, height: 30}} /> */}
                </View>
           </View>
           <Text style={{fontSize:22,fontWeight:'bold',paddingLeft:15}}>Bus Ride</Text>
           </View>
         
         <View style={{paddingHorizontal:30,paddingVertical:20}}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:15,color:'#5B5B5B'}}>Boarding</Text>
                 <Text style={{fontSize:16,fontWeight:'bold',color:'#515151'}}>GIG Jibowu Station</Text>
             </View>
             
             <View style={{flexDirection:'row',justifyContent:'space-around'}}> 
               <Text></Text>
             <Text style={{fontSize:15,color:'#59ACDF',paddingRight:39}}>Lagos</Text>
             </View>
          </View>


           
         <View style={{paddingHorizontal:30,paddingVertical:0}}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:15,color:'#5B5B5B'}}>Destination</Text>
                 <Text style={{fontSize:16,fontWeight:'bold',color:'#515151'}}>GIG Jibowu Station</Text>
             </View>
             
             <View style={{flexDirection:'row',justifyContent:'space-around'}}> 
               <Text></Text>
             <Text style={{fontSize:15,color:'#59ACDF',paddingRight:39}}>Kebbi</Text>
             </View>
          </View>

   
          <View style={{paddingHorizontal:30,paddingVertical:20}}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:15,color:'#5B5B5B'}}>Departure</Text>
                 <Text style={{fontSize:16,fontWeight:'bold',color:'#515151',paddingRight:54}}>12/10/2019</Text>
             </View>
          </View>

          <View style={{paddingHorizontal:30,paddingVertical:20}}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:15,color:'#5B5B5B'}}>Price</Text>
                 <Text style={{fontSize:16,fontWeight:'bold',color:'#515151',paddingRight:55}}>500000</Text>
             </View>
          </View>

        </View>    

        <Text style={{fontWeight:'bold',paddingTop:40,fontSize:17}}>Number of seats</Text>       
             
       <TouchableOpacity  onPress= {() => this.props.navigation.navigate('SignIn')}
                    style={{backgroundColor:'#2492D6',height:50,borderRadius:4,justifyContent:'center',marginTop:35,width:'100%'}} >
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                     <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Book Now</Text>
                    </View>
            </TouchableOpacity>


       </View>  
        </ScrollView>
      </View>
      
    )
  }
}

