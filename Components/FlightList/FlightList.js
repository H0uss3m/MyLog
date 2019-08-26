import React, { Component } from "react";
import { View, StyleSheet, FlatList, AsyncStorage } from "react-native";
import FlightItem from "../FlightItem/FlightItem";
// import { withNavigation } from 'react-navigation';
import { connect } from "react-redux";
import data from "../Data/data";
var _ = require("lodash");


class FlightList extends Component {
  loadData() {
    const action = { type: "SET_SHIPMENT_LIST", value: data };
    // const action = { type: 'TOGGLE_FAVORITE', value: this.state.film }
    this.props.dispatch(action);
    //   // console.log('test')
    let filtredData = data.filter(el =>
      this.props.SearchOptions.includes(el.status)
    );

    this.setState({ filtredData, data });


  }
  componentDidMount() {
    console.log("render");
    this.loadData()
  }
  render() {
    return (
      <View style={styles.flightList_container}>
        <FlatList
          data={this.props.shipmentList}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => <FlightItem item={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flightList_container: {
    flex: 1,
    margin: 10
  }
});
const MapStateToProps = state => {
  // return state
  return {
    SearchOptions: state.SearchOptions,
    shipmentList: state.shipmentList
  };
};
export default connect(MapStateToProps)(FlightList);
