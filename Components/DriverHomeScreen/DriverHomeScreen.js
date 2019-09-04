import React, { Component } from "react";
import { View, StyleSheet} from "react-native";
import FlightList from "../FlightList/FlightList";
import driverData from '../Data/driverData'
import {connect} from 'react-redux'

class DriverHomeScreen extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
      }
    }
    
    loadData () {
      const action ={type:'SET_DRIVER_SHIPMENT_LIST',value:driverData}
      this.props.dispatch(action)
        }
  componentDidMount() {
    this.loadData()
  }
  
    handlePress = () => {
      this.props.navigation.navigate('DriverJobDetails')
    }
    render() { 
      return (
        <View style={styles.main_container}>
          <FlightList handlePress={this.handlePress}  data={this.props.driverShipmentList} />
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
      driverShipmentList: state.toggleShipment.driverShipmentList
    }
  }

export default connect(MapStateToProps)(DriverHomeScreen)
