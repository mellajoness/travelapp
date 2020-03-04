import React, { Component } from 'react'
import {Text,View,TextInput,TouchableOpacity,ScrollView,Alert} from 'react-native'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import {SAVE_SESSION_ID, SAVE_FULL_NAME, SAVE_FIRST_NAME} from "../shared/storage";
import {POST_SERVICE} from '../shared/Backend'
export default class LoginFormView extends Component {
    state = {
        
        phoneNumber:'',
        passWord:'', 
        secureTextEntry:true,
        iconName:'eye',
        loading: false,
    };

    async componentDidMount(){
      await SAVE_SESSION_ID('')
    }

    showPassword = () => {
      let iconName=(this.state.secureTextEntry ?  'eye-off':'eye')
        this.setState({
            secureTextEntry:!this.state.secureTextEntry,
            iconName:iconName
        });
    };


    login = async () => {
         if(this.state.phoneNumber ==''){
           Alert.alert('Alert','Phone Number cannot be empty')
         }
 
         else if(this.state.passWord == ''){
           Alert.alert('Alert','Password cannot be empty')
         }

         else{
        
      const body = {    
          phonenumber :this.state.phoneNumber.replace(/^0+/, '+234'),
          password:this.state.passWord,
         
      };
         
      console.log('my  body',body)
      const endpoint = '/authenticate';
      
      try {
           const response = await POST_SERVICE (body, endpoint);
           console.log('SIGNUP URL', response);
          
            // this.setState({loading: false});
            if(response.data.jwt == null )
           {
              Alert.alert('Alert',response.data.message); 
           }

             else   
           {
            await this.saveUserDetail(response) 
             Alert.alert('Alert',response.data.jwt); 
           
           }
       } 
 
       catch (e) {
        Alert.alert('Alert',response.data.message); 
           // this.setState({loading: false});
           // InteractionManager.runAfterInteractions(() => {
           //     setTimeout(() => {
           //         Alert.alert('Login Error', "Error occurred while trying to login. Kindly check your internet connection.");
           //     });
           // }
           // );
           return e.response;
       }
      }
  };

        
  
  async saveUserDetail(resp){
   await SAVE_SESSION_ID(resp.data.jwt);
   
    // await SAVE_FIRST_NAME(resp.data.data.firstName);
    // await SAVE_FULL_NAME(`${resp.data.data.firstName} ${resp.data.data.lastName}`)
     this.props.navigation.navigate('Booking');
  }


  render() {
    return (  
      <View style={{flex:1}}>
         <View style={{paddingHorizontal:20, alignItems:'center', backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius:20,borderBottomColor:'#f8f8f8',borderBottomWidth:1,position:'relative',bottom:20}}>
            <Text style={{fontSize:25,fontWeight:'bold',paddingTop:20}}>Login</Text>
            
            <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                      placeholder='Phone Number'
                      placeholderTextColor='gray'/>
            </View>  

           

            <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#DAD9D9',paddingRight:20,paddingLeft:15,borderRadius:5}}>
                 <TextInput style={{flex:1,height: 50,color:'black',backgroundColor:'#DAD9D9',borderRadius:5}}
                        onChangeText={(passWord) => this.setState({passWord})}
                        placeholder='Password' 
                        placeholderTextColor='gray' 
                        secureTextEntry={this.state.secureTextEntry}/>

                    <TouchableOpacity onPress={this.showPassword}>
                    <Feather name={this.state.iconName} size={25} color='gray' style={{}}/>
                    </TouchableOpacity>
                  </View>
                  </View>


            
    
            <TouchableOpacity  onPress={this.login}
                    style={{backgroundColor:'#2492D6',height:50,borderRadius:4,justifyContent:'center',marginTop:25,width:'100%'}} >
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                     <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Login</Text>
                    </View>
            </TouchableOpacity>

            <Text style={{color:'gray',paddingTop:40,fontWeight:'bold',fontSize:14}}>Don't have an account?</Text>
            <View style={{flexDirection:'row',}}>
           <TouchableOpacity  onPress={()=>this.props.navigation.navigate('LoginFormView')} style={{flexDirection:'row',}} >
             <Text style={{color:'#76BBE5',paddingTop:10,fontWeight:'bold',fontSize:15}}>Register Here</Text>
             <Ionicons name='ios-arrow-round-forward' size={40} color='#53A9DF' style={{alignItems:'center',paddingLeft:10}}/>
           </TouchableOpacity>
            </View>
        </View>

        
       


      </View>
      
    )
  }
}

