import React, { Component } from 'react';
import { Dimensions, View ,ImageBackground,TouchableOpacity,Image,StatusBar,Text,StyleSheet} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import PersonalProfileScreen from '../Views/personalProfile'
import NextOfKinProfileScreen from '../Views/nextOfKinProfile'

export default class ProfileScreen extends Component {
  render() { 
    return ( 
      <View style={{flex:1 ,backgroundColor:'#f8f8f8' }}>
       <View style={{width: '100%'}}>
         <ImageBackground source={require('../assets/imgs/img.png.jpg')}
              style={{height: 165, width: Dimensions.get('screen').width }} resizeMode='cover'>
               <View style={{alignItems:'center',paddingTop:15,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
                 <AntDesign name='arrowleft' size={30} color='#333333' style={{}}/>
                 <Text style={{color:'#333333',fontWeight:'bold',fontSize:24}}>Profile</Text>
                 <Text></Text>
              </View>
              
         </ImageBackground>
         <ScrollableTabView
             style={{position:'relative',bottom:50 }}
             initialPage={0}
             tabBarActiveTextColor={'#5CAEE0'}
             tabBarInactiveTextColor='black'
             tabBarUnderlineStyle={styles.underlineStyle}
             tabBarTextStyle={styles.tabBarTextStyle}
             renderTabBar={() => <DefaultTabBar />}
         >
           <PersonalProfileScreen tabLabel='Personal' navigation= {this.props.navigation}/>
           <NextOfKinProfileScreen tabLabel='Next Of Kin' navigation= {this.props.navigation}/>
         </ScrollableTabView> 
           </View>    
           </View>    
    )
  }
} 

const styles = StyleSheet.create({
  underlineStyle: {
    height: 3,
    backgroundColor: '#3A9BD7',
    borderRadius: 3,
    // width: 15,  
  },

  tabBarTextStyle:{
    fontSize: 18,
    fontWeight: 'bold', 
  }
  
})


  



