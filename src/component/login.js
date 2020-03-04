import React, { Component } from 'react';
import { Dimensions, View ,ImageBackground,TouchableOpacity,Image,StatusBar,Text,StyleSheet} from 'react-native';
import SignUpFormView from '../Views/signupform'
import { ScrollView } from 'react-native-gesture-handler';
import LoginFormView from '../Views/loginform'



export default class LoginScreen extends Component {
  render() {
    console.log(this.props);
    return ( 
        <ScrollView style={{backgroundColor:'white'}}>
      <View style={{flex:1 ,backgroundColor:'white' }}> 
      <StatusBar backgroundColor='#007bff' barStyle="light-content" />  
       <View style={{width: '100%'}}>
         <ImageBackground source={require('../assets/imgs/img.png.jpg')}
              style={{height: 250, width: Dimensions.get('screen').width }} resizeMode='cover'>
               <View style={{alignItems:'center',paddingTop:20}}>
                 <Text style={{color:'white',fontWeight:'bold',fontSize:40}}>LOGO IN</Text>
              </View>
              
         </ImageBackground>
         <LoginFormView navigation={this.props.navigation}/>

           </View>

        
              
          </View>
          </ScrollView>
            
    )
  }
} 




