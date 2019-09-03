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
  
  loadData () {
    const action ={type:'SET_SEA_SHIPMENT_LIST',value:seaData}
    this.props.dispatch(action)
      }
componentDidMount() {
  this.loadData ()
}

  handlePress = () => {
    this.props.navigation.navigate('FlightItemDetail')
  }
  render() { 
    return (
      <View style={styles.main_container}>
        <FlightList handlePress={this.handlePress} data={this.props.seaShipmentList} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor:"#032343",
    paddingVertical:25,
    paddingHorizontal:15,
  }
});
const MapStateToProps = state => {
  return {
    SearchOptions: state.SearchOptions,
    seaShipmentList: state.seaShipmentList,
  }
}
export default connect(MapStateToProps)(Sea);
