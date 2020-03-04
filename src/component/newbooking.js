import React, { Component } from 'react'
import {Text,View,TextInput,TouchableOpacity,ScrollView,StatusBar} from 'react-native'
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export default class NewBookingScreen extends Component {
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
         <View style={{paddingHorizontal:20, paddingTop:23, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius:20,borderBottomColor:'#f8f8f8',borderBottomWidth:1,position:'relative',bottom:20}}>
           
            <Text style={{color:'#2E2E2E',fontSize:20,fontWeight:'bold',paddingTop:25}}>New Booking </Text>
            <Text style={{color:'gray',paddingTop:35,fontWeight:'bold'}}>From</Text>
            <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#DAD9D9',paddingRight:20,paddingLeft:15,borderRadius:5}}>
                 <TextInput style={{flex:1,height: 50,color:'black',backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'RED'}}
                        onChangeText={(passWord) => this.setState({passWord})}
                        placeholder='' 
                        placeholderTextColor='gray' 
                        />
    
                 
                        <AntDesign name='caretdown' size={18} color='black' style={{}}/>
                   
                  </View>
                  </View>

           
            <Text style={{color:'gray',paddingTop:15,fontWeight:'bold'}}>To</Text>
            <View style={{paddingTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(to) => this.setState({to})}
                      placeholder=''
                      placeholderTextColor='gray'/>
            </View>  


           
           
           
            <Text style={{color:'gray',paddingTop:15,fontWeight:'bold'}}>Date</Text>
            <View style={{paddingTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(address) => this.setState({address})}
                      placeholder=''
                      placeholderTextColor='gray'/>
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

