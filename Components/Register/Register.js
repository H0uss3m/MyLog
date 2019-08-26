import React from 'react';
import {Alert, StyleSheet, Image, View ,Text,TouchableOpacity,} from 'react-native';
import { Input } from "react-native-elements";

class Register extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        };
    }

    handleSubmit = () => {
        
        const { firstName,lastName,email, password ,confirmPassword} = this.state;
        if(firstName !="" && lastName !="" 
            && email!="" && password !="" 
            && confirmPassword!=""  ){

           
            this.props.navigation.navigate('AppNavigator');
        }else{
            Alert.alert('None ' )
        }
   
        }

    render() {
      return (

       <View style={styles.container}> 

            <Image 
            style={styles.image}
            source={require('../../image/login.png')} />

            <Input 
            style={styles.input}
            leftIcon={{ marginRight: 10,type: "font-awesome", name: "user" , color :'#182B3A' }}
            placeholder="First Name"
            onChangeText={
                (value) => this.setState({ firstName: value })
            }
            /> 

            <Input 
            style={styles.input}
            leftIcon={{ marginRight: 10,type: "font-awesome", name: "user" , color :'#182B3A' }}
            placeholder="Last Name"
            onChangeText={
                (value) => this.setState({ lastName: value })
            }
            /> 

            <Input 
            style={styles.input}
            leftIcon={{ marginRight: 10,type: "font-awesome", name: "envelope" , color :'#182B3A' }}
            placeholder="Email"
            onChangeText={
                (value) => this.setState({ email: value })
            }
            /> 

            <Input
            style={styles.input}
            leftIcon={{ marginRight: 10,type: "font-awesome", name: "lock" , color :'#182B3A'}}
            placeholder="Password"
            secureTextEntry
            onChangeText={
                (value) => this.setState({ password: value })
            }
            />

            <Input
            style={styles.input}
            leftIcon={{ marginRight: 10,type: "font-awesome", name: "lock" , color :'#182B3A'}}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={
                (value) => this.setState({ confirmPassword: value })
            }
            />


              <TouchableOpacity 
                  style={styles.submitButton}
                  onPress={this.handleSubmit}
                  >
                  <Text style={styles.submitText}>SUBMIT</Text>
                </TouchableOpacity>
        </View> 
      );
    }
  }

  const styles = StyleSheet.create({
  
    container: {
      paddingVertical:25,
      paddingHorizontal:25,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      justifyContent:'space-between',
       
    },
    image: {
        // marginTop:55
    } ,
    input: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingLeft : '20%'
    } ,
    submitButton: {
      width: '80%',
      backgroundColor: '#CD183F',
      paddingTop: 20,
      paddingBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor :'white',
      borderWidth: 2,
      borderRadius: 50,
      marginBottom : 50
    },
    submitText: {
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold',
    },
  });
  export default Register