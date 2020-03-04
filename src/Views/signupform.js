import React, { Component } from 'react'
import {Text,View,TextInput,TouchableOpacity,ScrollView,Alert} from 'react-native'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';

export default class SignUpFormView extends Component {
    state = {
        fullName:'',
        phoneNumber:'',
        email:'',
        passWord:'',
        secureTextEntry:true,
        iconName:'eye',
        loading: false,
    };


    showPassword = () => {
      let iconName=(this.state.secureTextEntry ?  'eye-off':'eye')
        this.setState({
            secureTextEntry:!this.state.secureTextEntry,
            iconName:iconName
        });
    };


 next=async()=>{
  if(this.state.fullName==''){
    Alert.alert('Alert','fullName cannot be empty')
  }

  else if(this.state.phoneNumber==''){
    Alert.alert('Alert','Phone Number cannot be empty')
  }

  else if(this.state.email==''){
    Alert.alert('Alert','Email cannot be empty')
  }

  else if(this.state.passWord==''){
    Alert.alert('Alert','Password cannot be empty')
  }


  else
        this.props.navigation.navigate('NextOfKin',
        {
          details: {
          fullname : this.state.fullName,
          phonenumber: this.state.phoneNumber.replace(/^0+/, '+234'),
          email:this.state.email,
          password:this.state.passWord
                 },
       }        
        );    
    }
 
 

       
  render() { 
    return (    
      <View style={{flex:1}}>
         <View style={{paddingHorizontal:20, alignItems:'center', backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius:20,borderBottomColor:'#f8f8f8',borderBottomWidth:1,position:'relative',bottom:50}}>
            <Text style={{fontSize:25,fontWeight:'bold',paddingTop:15}}>Sign up</Text>
           
            <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(fullName) => this.setState({fullName})}
                      placeholder='Full name'
                      placeholderTextColor='gray'/>
            </View>  

            <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                      placeholder='Phone Number'
                      keyboardType='phone-pad'
                      placeholderTextColor='gray'/>
            </View>  

            <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(email) => this.setState({email})}
                      placeholder='E-mail (Optional)'
                      keyboardType="email-address"
                      placeholderTextColor='gray'/>
            </View>  

            <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#DAD9D9',paddingRight:20,paddingLeft:15,borderRadius:5}}>
                 <TextInput style={{flex:1,height: 50,color:'black',backgroundColor:'#DAD9D9',borderRadius:5,}}
                        onChangeText={(passWord) => this.setState({passWord})}
                        placeholder='Password' 
                        placeholderTextColor='gray' 
                        secureTextEntry={this.state.secureTextEntry}/>

                    <TouchableOpacity onPress={this.showPassword}>
                        <Feather name={this.state.iconName} size={25} color='gray' style={{}}/>
                    </TouchableOpacity>
                  </View>
                  </View>


            
            <TouchableOpacity  onPress= {this.next}
                    style={{backgroundColor:'#2492D6',height:50,borderRadius:4,justifyContent:'center',marginTop:25,width:'100%'}} >
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                     <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Next</Text>
                    </View>
            </TouchableOpacity>

            <Text style={{color:'gray',paddingTop:20,fontWeight:'bold',fontSize:14}}>Already have an account?</Text>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
              <TouchableOpacity onPress= {() => this.props.navigation.navigate('Login')}   style={{flexDirection:'row',}}>
               <Text style={{color:'#76BBE5',paddingTop:10,fontWeight:'bold',fontSize:15}}>Login Here</Text>
               <Ionicons name='ios-arrow-round-forward' size={40} color='#53A9DF' style={{alignItems:'center',paddingLeft:10}}/>
               </TouchableOpacity>
            </View>  
        </View>
      </View>
      
    )
  }
}

