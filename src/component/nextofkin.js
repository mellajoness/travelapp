import React, { Component } from 'react'
import {Text,View,TextInput,TouchableOpacity,ScrollView,StatusBar,Dimensions,InteractionManager,Alert} from 'react-native'
import Feather from "react-native-vector-icons/dist/Feather";
import {POST_SERVICE} from '../shared/Backend'
// import {CustomLoader} from "../shared/customloader" ;
export default class NextOfKinScreen extends Component {
    state = {
     fullName:'',
     phoneNumber:'',
     email:'',
     passWord:'',
     // loading:false,
     nextOfKinName:'',
     nextOfKinPhoneNumber:'',
     nextOfKinEmail:'',
     nextOfKinAddress:'',
     body:{}
    };

    componentDidMount(){
          this.signUp()
    }

  

    signUp = async () => {
     if(this.state.nextOfKinName==''){
          Alert.alert('Alert','Next Of kin Name cannot be empty')
        }

     else if(this.state.nextOfKinPhoneNumber==''){
          Alert.alert('Alert','Next Of kin Phone Number cannot be empty')
        } 

     
     else if(this.state.nextOfKinEmail==''){
          Alert.alert('Alert','Next Of kin Email cannot be empty')
        }   
     
     
     else if(this.state.nextOfKinAddress==''){
          Alert.alert('Alert','Next Of kin Address cannot be empty')
        }  
    
     let details = this.props.navigation.getParam('details')
     console.log('my details object is',details)
     // this.setState({loading: true});
     const body = {  
         fullname:details.fullname,
         phonenumber: details.phonenumber,
         email:details.email,
         password:details.password,

         kinname:this.state.nextOfKinName,
         kinphonenumber:this.state.nextOfKinPhoneNumber,
         kinaddress:this.state.nextOfKinAddress,
         kinemail:this.state.nextOfKinEmail,
     };
    
     console.log('my  body',body)
     const endpoint = '/registeruser';
     
     try {
          const response = await POST_SERVICE (body, endpoint);
          console.log('SIGNUP URL', response);
         
          //  this.setState({loading: false});
           if(response.data.status === 'NOT_FOUND')
          {
              
          //     Alert.alert('Alert', response.data.message);
          //     this.saveUserDetail(response);
          }
          else
          {
               //  this.props.navigation.navigate('SignUpScreen')
          //     InteractionManager.runAfterInteractions(() => {
          //         setTimeout(() => {
          //           //   Alert.alert('Login Error', response.data.message);
          //         });
          //     }
              
          //     );
          }
      } 

      catch (e) {
          // this.setState({loading: false});
          // InteractionManager.runAfterInteractions(() => {
          //     setTimeout(() => {
          //         Alert.alert('Login Error', "Error occurred while trying to login. Kindly check your internet connection.");
          //     });
          // }
          // );
          return e.response;
      }
 };


       
  render() {
     // let details = this.props.navigation.getParam('details')
     // console.log('my details object is',details)
    return (
        
      <View style={{flex:1}}>
           <StatusBar backgroundColor='#DAD9D9' barStyle="light-content" />  
        <ScrollView>
        
        
         <View style={{paddingRight:30,paddingLeft:20, backgroundColor:'white',height:50,justifyContent:'center'}}>
               <View style={{ flexDirection:'row',alignItems:'center' }}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} >
                  <Feather name='arrow-left' size={30} color='black' style={{}}/> 
               </TouchableOpacity>
           
           </View>
       </View>

   
       <View style={{backgroundColor:'#F0F0F0',height: Dimensions.get('screen').height,flex:1,paddingHorizontal:20}}>
       
      
            <Text style={{fontSize:19,fontWeight:'bold',paddingTop:40,color:'#2E2E2E',}}>Next of Kin Details</Text> 
            <Text style={{color:'gray',paddingTop:15}}>Name</Text>     
            <View style={{paddingTop:10, flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
               
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(nextOfKinName) => this.setState({nextOfKinName})}
                      placeholder=''
                      placeholderTextColor='gray'/>
            </View>  

           
            <Text style={{color:'gray',paddingTop:15}}>Phone Number</Text>
            <View style={{paddingTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(nextOfKinPhoneNumber) => this.setState({nextOfKinPhoneNumber})}
                      placeholder=''
                      placeholderTextColor='gray'/>
            </View>  


            <Text style={{color:'gray',paddingTop:15}}>Email</Text>
            <View style={{paddingTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(nextOfKinEmail) => this.setState({nextOfKinEmail})}
                      placeholder=''
                      placeholderTextColor='gray'/>
            </View>  

           
           
            <Text style={{color:'gray',paddingTop:15}}>Address</Text>
            <View style={{paddingTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                 <TextInput style={{flex:1,height: 50,color:'gray',paddingLeft:20,backgroundColor:'#DAD9D9',borderRadius:5,borderRightColor:'#979797'}}
                      onChangeText={(nextOfKinAddress) => this.setState({nextOfKinAddress})}
                      placeholder=''
                      placeholderTextColor='gray'/>
            </View>  




            <View style={{paddingTop:20}}>
            <TouchableOpacity  onPress= { this.signUp}
                    style={{backgroundColor:'#CBCBCB',height:50,borderRadius:4,justifyContent:'center',marginTop:25,width:'100%'}} >
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                     <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Save Changes</Text>
                    </View>
            </TouchableOpacity>
            </View>

           
        </View>
        </ScrollView>
        {/* <CustomLoader visible={this.state.loading}/> */}
      </View>
      
    )
  }
}

