import React, { Component } from "react";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import FlightList from "./FlightList/FlightList";
import seaData from './Data/seaData'
import {connect} from 'react-redux'
class Sea extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[]
    }
  }
  
componentDidMount() {
  // const action = { type: 'SET_SHIPMENT_LIST', value: this.props.data }
  // this.props.dispatch(action)
  this.setState({
    data:seaData,
  })
}

  handlePress = () => {
    this.props.navigation.navigate('FlightItemDetail')
  }
  render() { 
    return (
      <View style={styles.main_container}>
      <Text>Sea Page</Text>
        <FlightList handlePress={this.handlePress} data={this.state.data} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    // marginTop: 20,
    backgroundColor:"#032343",
    paddingVertical:25,
    paddingHorizontal:15,
    // opacity:0.3
  }
});
export default connect()(Sea);
