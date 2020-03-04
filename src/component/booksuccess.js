import React, { Component } from 'react'
import {Text,View,TextInput,TouchableOpacity,ScrollView,StatusBar,Dimensions,Image} from 'react-native'
import Entypo from "react-native-vector-icons/dist/Entypo";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export default class BookingsSuccessScreen extends Component {
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
        
     

       <View style={{backgroundColor:'#F0F0F0',height: Dimensions.get('screen').height,flex:1,paddingHorizontal:20}}>
       <View style={{alignItems:'center'}}>
        <Text style={{fontSize:19,paddingTop:65,fontWeight:'bold'}}>Booking Successful</Text>

        <View style={{paddingTop:20}}>
        <View style={{width:70,height:70,borderRadius:70,backgroundColor:'#D5E8F4',paddingTop:20}}></View>
        </View>
        </View>
        
          <View style={{marginTop: 20, backgroundColor: '#FAFAFA', borderRadius: 5, borderColor:'#C6E1F1',borderWidth:1}}>
         
         <View style={{paddingHorizontal:30,paddingVertical:20}}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'#515151'}}>GIG Jibowu Station</Text>
                <Text style={{fontSize:15,color:'#59ACDF',paddingRight:39}}>Lagos</Text>
                <Text style={{fontSize:15,color:'#59ACDF',paddingRight:39}}>Lagos</Text>
                {/* <View style={{borderColor:'red',borderWidth:30,height:1}}></View>
                 */}
             </View>
             
             
          </View>


           
         <View style={{paddingHorizontal:30,paddingVertical:0}}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:15,color:'#5B5B5B'}}>Reference Code</Text>
                 <Text style={{fontSize:16,fontWeight:'bold',color:'#515151'}}>1531GFA6718RQR</Text>
             </View>
             
            
          </View>

   

          <View style={{paddingHorizontal:30,paddingTop:10}}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:15,color:'#5B5B5B'}}>Price</Text>
                 <Text style={{fontSize:16,fontWeight:'bold',color:'#515151',paddingRight:55}}>500000</Text>
             </View>
          </View>

          <View style={{paddingHorizontal:30,paddingTop:10,paddingBottom:20}}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:15,color:'#5B5B5B'}}>Seat</Text>
                 <Text style={{fontSize:16,fontWeight:'bold',color:'#515151',paddingRight:55}}>5</Text>
             </View>
          </View>

         
        </View>    

        <View style={{paddingVertical:20}}>
          <TouchableOpacity  onPress= {() => this.props.navigation.navigate('SignIn')}
                    style={{backgroundColor:'#2492D6',height:50,borderRadius:4,justifyContent:'center',width:'100%',}} >
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                     <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Let's go home</Text>
                    </View>
            </TouchableOpacity>
            </View>
             
      


       </View>  
        </ScrollView>
      </View>
      
    )
  }
}

