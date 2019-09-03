import React, { Component } from "react";
import { View, StyleSheet, Text,TouchableOpacity,AsyncStorage } from "react-native";
import FlightList from "./FlightList/FlightList";
import data from './Data/data'
import {connect} from 'react-redux'

class Air extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[]
    }
  }
  
  loadData () {
    const action ={type:'SET_AIR_SHIPMENT_LIST',value:data}
    this.props.dispatch(action)
      }
componentDidMount() {
  this.loadData()
}

  handlePress = () => {
    this.props.navigation.navigate('FlightItemDetail')
  }
  render() { 
    return (
      <View style={styles.main_container}>
        <FlightList handlePress={this.handlePress}  data={this.props.airShipmentList} />
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
const MapStateToProps = state => {
    // return state
    return {
      SearchOptions: state.toggleShipment.SearchOptions,
      airShipmentList: state.toggleShipment.airShipmentList
    }
  }
export default connect(MapStateToProps)(Air);