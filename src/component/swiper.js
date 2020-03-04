import React, { Component } from 'react';
import { StyleSheet,Text,View,TouchableOpacity,StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';
// import ViewPager from '@react-native-community/viewpager';

export default class SwiperScreen extends Component {

    render(){
        return (
            <View style={{backgroundColor:'#1a8cff',width:'100%',height:'100%',flex:1}} >
              <StatusBar backgroundColor='#007bff' barStyle="light-content" />
              
                <Swiper style={styles.wrapper} autoplay={true}
                   dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5,}} />}
                   activeDot={<View style={{backgroundColor: '#fff', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5,}} />}
                   showsButtons={false}  bounces={true}>


              <View style={styles.slide1}>
                  <View  style={{alignItems:'center'}}>
                    
               <View style={{height:200,width:200,color:'red',backgroundColor: 'rgba(255,255,255,0.2)',borderRadius:8,marginTop:100,borderWidth:15,borderColor:'rgba(255,255,255,0.1)'}}></View> 
               
                    <Text style={{  color:'#fff',fontSize:23,fontWeight:'bold',alignItems:'center',justifyContent:'center',paddingTop:50}}>Book bus rides</Text>
                    <Text style={{color:'rgba(255, 255, 255, 0.7)',fontSize:15,fontWeight:'bold',paddingTop:15 }}>lorem    ipsum,ipsum</Text>
                    <Text style={{color:'rgba(255, 255, 255, 0.7)',fontSize:15,fontWeight:'bold' }}>meridinus poractus</Text>
                  </View>

                <TouchableOpacity  onPress= {() => this.props.navigation.navigate('SignUp')}
                    style={{backgroundColor:'white',height:50,borderRadius:4,justifyContent:'center',marginTop:100}} >
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                     <Text style={{color:'#1a8cff',fontSize:20,fontWeight:'bold'}}>Let's ride</Text>
                    </View>
                  </TouchableOpacity>

              </View>


              <View style={styles.slide1}>
                  <View  style={{alignItems:'center'}}>
                    
               <View style={{height:200,width:200,color:'red',backgroundColor: 'rgba(255,255,255,0.2)',borderRadius:8,marginTop:100,borderWidth:15,borderColor:'rgba(255,255,255,0.1)'}}></View> 
               
                    <Text style={{  color:'#fff',fontSize:23,fontWeight:'bold',alignItems:'center',justifyContent:'center',paddingTop:50}}>Book bus rides</Text>
                    <Text style={{color:'rgba(255, 255, 255, 0.7)',fontSize:15,fontWeight:'bold',paddingTop:15 }}>lorem    ipsum,ipsum</Text>
                    <Text style={{color:'rgba(255, 255, 255, 0.7)',fontSize:15,fontWeight:'bold' }}>meridinus poractus</Text>
                  </View>

                <TouchableOpacity  onPress= {() => this.props.navigation.navigate('SignUp')}
                    style={{backgroundColor:'white',height:50,borderRadius:4,justifyContent:'center',marginTop:100}} >
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                     <Text style={{color:'#1a8cff',fontSize:20,fontWeight:'bold'}}>Let's ride</Text>
                    </View>
                  </TouchableOpacity>

              </View>




              
              <View style={styles.slide1}>
                  <View  style={{alignItems:'center'}}>
                    
               <View style={{height:200,width:200,color:'red',backgroundColor: 'rgba(255,255,255,0.2)',borderRadius:8,marginTop:100, borderWidth:15,borderColor:'rgba(255,255,255,0.1)'}}></View>  
               
                    <Text style={{  color:'#fff',fontSize:23,fontWeight:'bold',alignItems:'center',justifyContent:'center',paddingTop:50}}>Book bus rides</Text>
                    <Text style={{color:'rgba(255, 255, 255, 0.7)',fontSize:15,fontWeight:'bold',paddingTop:15 }}>lorem    ipsum,ipsum</Text>
                    <Text style={{color:'rgba(255, 255, 255, 0.7)',fontSize:15,fontWeight:'bold' }}>meridinus poractus</Text>
                  </View>

                <TouchableOpacity  onPress= {() => this.props.navigation.navigate('SignUp')}
                    style={{backgroundColor:'white',height:50,borderRadius:4,justifyContent:'center',marginTop:100}} >
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                     <Text style={{color:'#1a8cff',fontSize:20,fontWeight:'bold'}}>Let's ride</Text>
                    </View>
                  </TouchableOpacity>

              </View>


          


          </Swiper>
          </View>
  
        //     <ViewPager style={{flex:1}} initialPage={0} showPageIndicator={true}>
        //         <StatusBar backgroundColor='#007bff' barStyle="light-content" />
           
        //     <View style={{backgroundColor:'#1a8cff',width:'100%',height:'100%'}} key="1">
        //     <View style={{paddingHorizontal:20,paddingTop:70}}>
                    
        //             <View style={{alignItems:'center'}}> 

        //         <View style={{height:'56%',width:'60%',borderColor:'red',backgroundColor:'#4da3ff',borderRadius:8}}>
        //         </View>
        //          <Text style={{color:'white',fontWeight:'bold',fontSize:18,paddingTop:20}}>Book  bus rides</Text> 
        //          <Text style={{color:'lightgray',fontSize:13,paddingTop:10}}>Good quality ride</Text> 
        //          <Text style={{color:'lightgray',fontSize:13}}>And very affordable</Text> 
        //          </View>

        //           <TouchableOpacity  onPress= {() => this.props.navigation.navigate('SignIn')}
        //             style={{backgroundColor:'white',height:50,borderRadius:3,justifyContent:'center'}} >
        //             <View style={{flexDirection:'row',justifyContent:'center',}}>
        //              <Text style={{color:'#1a8cff',fontSize:20,fontWeight:'bold'}}>Let's ride</Text>
        //             </View>
        //           </TouchableOpacity>

        //        </View>
           
        //     </View>
        //     <View style={{backgroundColor:'#1a8cff',width:'100%',height:'100%'}} key="2">
        //       <Text>Second page</Text>
        //     </View>
        //   </ViewPager>
    
        )

        
    }}

    const styles = StyleSheet.create({
        wrapper: {
        },
        slide1: {
          flex: 1,
          backgroundColor: '#2492D6',
          paddingHorizontal: 20
        },
        slide2: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#97CAE5',
        },
        slide3: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#92BBD9',
        },
       
      
      })
           
           



