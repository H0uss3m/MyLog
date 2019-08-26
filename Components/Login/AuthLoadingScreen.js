import React, { Component } from "react";
import { View,StyleSheet, ActivityIndicator, AsyncStorage, StatusBar } from "react-native";

class AuthLoadingScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.loadData()
  }
  // redirect the app to the right navigation Screen 
  loadData = async()=>{
    const Logged = await AsyncStorage.getItem('Logged')
    switch (Logged) {
      // if the user is admin redirect to the admin screen
      case 'adminConnected':
        return  this.props.navigation.navigate( 'App' )
        break;
      // if the user is a simple user redirect to the admin screen
      case 'userConnected':
         return this.props.navigation.navigate( 'clientInterface' )

        break;
      // default Screen 'Login'
      default:
      return this.props.navigation.navigate( 'Auth' )
        break;
    }
  }
  render () {
    return (
      <View>
        <ActivityIndicator style={styles.loading}/>
        <StatusBar barStyle='default' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    loading:{
        flex:1,
        justifyContent:'center',
        // alignItems:'center',
        marginTop:400,        
        backgroundColor:'#F5FCFF'
    }
})
export default AuthLoadingScreen
