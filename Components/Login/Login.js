import React from 'react';
import { Alert ,StyleSheet,AsyncStorage, Image, View ,Text,TouchableOpacity} from 'react-native';
import { Input } from "react-native-elements";

// uer data 
const userInfo={username:'user',password:'123456'} 
const adminInfo={ username:'admin',password:'123456'} 
export default class Authentication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
    }
   // check the type of user (admin , user , driver )
    checkLogin = async () => {
        const { username, password } = this.state;
        // console.log(username,' ',password)
        // console.log(userInfo.username,' ',userInfo.password)

        if(username.trim().toLocaleLowerCase()===adminInfo.username && password===adminInfo.password){
            // Alert.alert('Welcome', username, [{ text: 'Ok' }])
            await AsyncStorage.setItem('Logged',"adminConnected")
            this.props.navigation.navigate('App');
        }else if (username.trim().toLocaleLowerCase() === userInfo.username && password===userInfo.password ){
          await AsyncStorage.setItem('Logged',"userConnected")
          this.props.navigation.navigate('clientInterface');
        }
        else{
            Alert.alert('Error', 'UserName/Login mismatch', [{ text: 'Ok' }])
        }
      }

    handleRegister = () => {
     this.props.navigation.navigate('Register');

     }

    render() {

      return (

        
        <View style={styles.container}>
            <Image 
            style={styles.image}
            source={require('../../image/login.png')} />

                <Input 
                style={styles.input}
                leftIcon={{marginRight: 10, type: "font-awesome", name: "envelope" , color :'#182B3A' }}
                placeholder="User Name"
                type="username"
                onChangeText={
                    (username) => this.setState({ username })
                  }
                value={this.state.username}
                /> 
                

                <Input
                style={styles.input}
                leftIcon={{ marginRight: 10, type: "font-awesome", name: "lock" , color :'#182B3A'}}
                placeholder="Password"
                secureTextEntry
                onChangeText={
                    (password) => this.setState({ password })
                  }
                value={this.state.password}
                />
              <Text style={styles.textForgot} onPress={this.onPressTitle}>
                  Forgot your password?
              </Text>
        
            
              {/* <Button style={styles.signInButton} title={'Login'} onPress={() => this.checkLogin()} /> */}
            <TouchableOpacity 
              style={styles.signInButton}
              onPress={this.checkLogin}
            > 
               <Text style={styles.signInText}>SING IN</Text>
            </TouchableOpacity>

            <TouchableOpacity
             >

                <Text style={styles.textAccount} >
                    Don't have an account?
                </Text>
            </TouchableOpacity>


                <TouchableOpacity 
                  style={styles.registerButton}
                  onPress={this.handleRegister}
                >
                  <Text style={styles.registerText}>REGISTER NOW</Text>
                </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    //   justifyContent: "center",
      justifyContent:'space-around',
      paddingVertical:25,
      paddingHorizontal:25

       
    },
    image: {
    //    marginTop:55
    } ,
    input: {
        fontSize: 20,
        color :'#98A3BB',
        // width: 20,
        // paddingLeft:70,
        // marginLeft: 70
    } ,
    textForgot: {
        textDecorationLine: 'underline',
        marginLeft : 200,
        color :'#182B3A',
        fontWeight: 'bold',
    } ,
    textAccount: {
      color :'#ABB4C8',
      fontWeight: 'bold',
    } ,
    bouton :{

        width: '80%',
        backgroundColor: '#CD183F',
        margin : 20 ,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    signInButton: {
      width: '80%',
      backgroundColor: '#CD183F',
      paddingTop: 20,
      paddingBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor :'white',
      borderWidth: 2,
      borderRadius: 50,
    },
    signInText: {
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold',
    },
    registerText :{
      fontSize: 15,
      color: '#DD1E48',
      fontWeight: 'bold',
    },
    registerButton: {
      width: '80%',
      borderColor :'#DD1E48',
      borderWidth: 3,
      borderRadius: 50,
      backgroundColor: 'white',
      paddingTop: 20,
      paddingBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom : 20
    },
  });