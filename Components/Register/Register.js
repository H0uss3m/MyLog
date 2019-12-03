// import React from 'react';
// import {Alert, StyleSheet, Image, View ,Text,TouchableOpacity,} from 'react-native';
// import { Input } from "react-native-elements";

// class Register extends React.Component {


//     constructor(props) {
//         super(props);
//         this.state = {
//           firstName: '',
//           lastName: '',
//           email: '',
//           password: '',
//           confirmPassword: ''
//         };
//     }

//     handleSubmit = () => {
        
//         const { firstName,lastName,email, password ,confirmPassword} = this.state;
//           if(firstName !="" && lastName !="" && email!="" && password !="" && confirmPassword!=""){
//             Alert.alert('successfully registered')
//             this.props.navigation.navigate('Login')
//           }
//           else {
//             Alert.alert('None')
//           }
//     }

//     render() {
//       return (

//        <View style={styles.container}> 

//             <Image 
//             style={styles.image}
//             source={require('../../image/login.png')} />

//             <Input 
//             style={styles.input}
//             leftIcon={{ marginRight: 10,type: "font-awesome", name: "user" , color :'#182B3A' }}
//             placeholder="First Name"
//             onChangeText={
//                 (value) => this.setState({ firstName: value })
//             }
//             /> 

//             <Input 
//             style={styles.input}
//             leftIcon={{ marginRight: 10,type: "font-awesome", name: "user" , color :'#182B3A' }}
//             placeholder="Last Name"
//             onChangeText={
//                 (value) => this.setState({ lastName: value })
//             }
//             /> 

//             <Input 
//             style={styles.input}
//             leftIcon={{ marginRight: 10,type: "font-awesome", name: "envelope" , color :'#182B3A' }}
//             placeholder="Email"
//             onChangeText={
//                 (value) => this.setState({ email: value })
//             }
//             /> 

//             <Input
//             style={styles.input}
//             leftIcon={{ marginRight: 10,type: "font-awesome", name: "lock" , color :'#182B3A'}}
//             placeholder="Password"
//             secureTextEntry
//             onChangeText={
//                 (value) => this.setState({ password: value })
//             }
//             />

//             <Input
//             style={styles.input}
//             leftIcon={{ marginRight: 10,type: "font-awesome", name: "lock" , color :'#182B3A'}}
//             placeholder="Confirm Password"
//             secureTextEntry
//             onChangeText={
//                 (value) => this.setState({ confirmPassword: value })
//             }
//             />


//               <TouchableOpacity 
//                   style={styles.submitButton}
//                   onPress={this.handleSubmit}
//                   >
//                   <Text style={styles.submitText}>SUBMIT</Text>
//                 </TouchableOpacity>
//         </View> 
//       );
//     }
//   }

//   const styles = StyleSheet.create({
  
//     container: {
//       paddingVertical:25,
//       paddingHorizontal:25,
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center",
//       justifyContent:'space-between',
       
//     },
//     image: {
//         // marginTop:55
//     } ,
//     input: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         flex: 1,
//         flexWrap: 'wrap',
//         paddingLeft : '20%'
//     } ,
//     submitButton: {
//       width: '80%',
//       backgroundColor: '#CD183F',
//       paddingTop: 20,
//       paddingBottom: 20,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderColor :'white',
//       borderWidth: 2,
//       borderRadius: 50,
//       marginBottom : 50
//     },
//     submitText: {
//       fontSize: 15,
//       color: 'white',
//       fontWeight: 'bold',
//     },
//   });
  // export default Register
import React,{Component} from 'react';
import { Button,View } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';
 
class Register extends Component {
    state = {
        email: '',
    }
 
    handleChange = (email) => {
        this.setState({ email });
    }
 
    submit = () => {
      // your submit logic
      console.log('submitted')
      this.props.navigation.navigate('Login')
      }
 
    handleSubmit = () => {
        this.refs.form.submit();
    }
 
    render() {
        const { email } = this.state;
        return (
        <View style={{marginTop:50}}>
            <Form
                ref="form"
                onSubmit={this.handleSubmit}
                
                >
                <TextValidator
                    name="email"
                    label="email"
                    validators={['required', 'isEmail']}
                    errorMessages={['This field is required', 'Email invalid']}
                    placeholder="Your email"
                    type="text"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={this.handleChange}
                    />
                 <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                    />
            </Form>
        </View>
        );
    }
}
export default Register
