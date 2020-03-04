import React, { Component } from 'react'
import {Text,View,TextInput,TouchableOpacity,ScrollView,StatusBar} from 'react-native'

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { NavigationEvents } from 'react-navigation';

export default class NextOfKinRegistrationScreen extends Component {
    state = {
        name:'',
        phoneNumber:'',
        email:'',
        address:'',
        loading: false,
    };

    componentDidMount(){
         console.log("HERE I AM ");
         
    }





       
  render() {  
    return (
        
      <View style={{flex:1}}>
           <StatusBar backgroundColor='#007bff' barStyle="light-content" />  
        <ScrollView>
         <View style={{paddingHorizontal:20, paddingTop:23, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius:20,borderBottomColor:'#f8f8f8',borderBottomWidth:1,position:'relative',bottom:20}}>
            <Text style={{fontSize:19,fontWeight:'bold',paddingTop:20,color:'#2E2E2E',}}>Welcome,</Text>
            <Text style={{fontSize:24,fontWeight:'bold',color:'#2E2E2E'}}>Sunday Bassey.</Text>
            <Text style={{fontSize:16,paddingTop:25,color:'gray',fontWeight:'bold'}}>We are almost done, kindly help these few important details</Text>
            <Text style={{color:'#2E2E2E',fontSize:20,fontWeight:'bold',paddingTop:25}}>Next of kin Details </Text>
            <Text style={{color:'gray',paddingTop:15,fontWeight:'bold'}}>Name</Text>
            <View style={{paddingTop:10, flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
               
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(name) => this.setState({name})}
                      placeholder=''
                      placeholderTextColor='gray'/>
            </View>  

           
            <Text style={{color:'gray',paddingTop:15,fontWeight:'bold'}}>Phone Number</Text>
            <View style={{paddingTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                      placeholder=''
                      placeholderTextColor='gray'/>
            </View>  


            <Text style={{color:'gray',paddingTop:15,fontWeight:'bold'}}>Email</Text>
            <View style={{paddingTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(email) => this.setState({email})}
                      placeholder=''
                      placeholderTextColor='gray'/>
            </View>  

           
           
            <Text style={{color:'gray',paddingTop:15,fontWeight:'bold'}}>Address</Text>
            <View style={{paddingTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(address) => this.setState({address})}
                      placeholder=''
                      placeholderTextColor='gray'/>
            </View>  




            
            <TouchableOpacity  onPress= {() => this.props.navigation.navigate('SignIn')}
                    style={{backgroundColor:'#2492D6',height:50,borderRadius:4,justifyContent:'center',marginTop:25,width:'100%'}} >
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                     <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Let's Go!</Text>
                    </View>
            </TouchableOpacity>

           
        </View>
        </ScrollView>
        
       


      </View>
      
    )
  }
}

