import React, { Component } from 'react';
import { Dimensions, View ,ImageBackground,TouchableOpacity,Image,StatusBar,Text,StyleSheet} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';



export default class ProfileScreen extends Component {
  render() { 
    return ( 
       <View style={{width: '100%'}}>
         <ImageBackground source={require('../assets/imgs/img.png.jpg')}
              style={{height: 200, width: Dimensions.get('screen').width }} resizeMode='cover'>
               <View style={{alignItems:'center',paddingTop:20}}>
                 <Text style={{color:'white',fontWeight:'bold',fontSize:40}}>LOGO IN</Text>
              </View>
              
         </ImageBackground>
         <ScrollableTabView
             style={{marginHorizontal:10, }}
             initialPage={0}
             tabBarActiveTextColor={'red'}
             tabBarInactiveTextColor='#c4c4c4'
             tabBarUnderlineStyle={styles.underlineStyle}
             tabBarTextStyle={styles.tabBarTextStyle}
             renderTabBar={() => <DefaultTabBar />}
         >
           <Text tabLabel='Tab #1'>My</Text>
    <Text tabLabel='Tab #2'>favorite</Text>
    <Text tabLabel='Tab #3'>project</Text>
             {/* <PendingTransfer tabLabel="Pending" navigation= {this.props.navigation} />
             <ApprovedTransfer tabLabel="Approved" navigation= {this.props.navigation} /> */}
             {/* <AwaitingTransfer tabLabel="Awaiting" navigation= {this.props.navigation} /> */}
         </ScrollableTabView> 
           </View>

        
              
        
        
            
    )
  }
} 

const styles = StyleSheet.create({
  underlineStyle: {
    height: 3,
    backgroundColor: '#0c891d',
    borderRadius: 3,
    // width: 15,  
  },

  tabBarTextStyle:{
    fontSize: 15,
    fontWeight: 'bold', 
  }
  
})


  



