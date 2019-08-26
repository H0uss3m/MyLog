import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import FlightList from "./FlightList/FlightList";
class Sea extends Component {
  state = {
    data: [
      {
        key: Math.random().toString(),
        awb: 1452136416,
        from: "TN",
        to: "Rome",
        status: "In Progress",
        shipper:'Example 1',
        consignee:'Example*',
        pics:1,
        weight:48,
        flight1:'0054',
        flight2:'4850'
      },{
        key: Math.random().toString(),
        awb: 1021549956,
        from: "Paris",
        to: "New York",
        status: "Delivery",
        shipper:'Example 2',
        consignee:'Example*',
        pics:5,
        weight:290,
        flight1:'1398',
        flight2:'0125'
      },{
        key: Math.random().toString(),
        awb: 1021549956,
        from: "LA",
        to: "Moscow",
        status: "Delivery",
        shipper:'Example 3',
        consignee:'Example*',
        pics:2,
        weight:65,
        flight1:'1398',
        flight2:'0125'
      },{
        key: Math.random().toString(),
        awb: 1021549956,
        from: "Berlin",
        to: "Pekin",
        status: "Delivery",
        shipper:'Example 4',
        consignee:'Example*',
        pics:3,
        weight:159,
        flight1:'1398',
        flight2:'0125'
      },{
        key: Math.random().toString(),
        awb: 1021549956,
        from: "London",
        to: "Dublin",
        status: "Delivery",
        shipper:'Example 5',
        consignee:'Example*',
        pics:1,
        weight:10,
        flight1:'1398',
        flight2:'0125'
      },{
        key: Math.random().toString(),
        awb: 1452136416,
        from: "TN",
        to: "Rome",
        status: "In Progress",
        shipper:'Example 1',
        consignee:'Example*',
        pics:1,
        weight:48,
        flight1:'0054',
        flight2:'4850'
      },{
        key: Math.random().toString(),
        awb: 1021549956,
        from: "Paris",
        to: "New York",
        status: "Delivery",
        shipper:'Example 2',
        consignee:'Example*',
        pics:5,
        weight:290,
        flight1:'1398',
        flight2:'0125'
      },{
        key: Math.random().toString(),
        awb: 1021549956,
        from: "LA",
        to: "Moscow",
        status: "Delivery",
        shipper:'Example 3',
        consignee:'Example*',
        pics:2,
        weight:65,
        flight1:'1398',
        flight2:'0125'
      },{
        key: Math.random().toString(),
        awb: 1021549956,
        from: "Berlin",
        to: "Pekin",
        status: "Delivery",
        shipper:'Example 4',
        consignee:'Example*',
        pics:3,
        weight:159,
        flight1:'1398',
        flight2:'0125'
      },{
        key: Math.random().toString(),
        awb: 1021549956,
        from: "London",
        to: "Dublin",
        status: "Delivery",
        shipper:'Example 5',
        consignee:'Example*',
        pics:1,
        weight:10,
        flight1:'1398',
        flight2:'0125'
      }
    ]
  };

  handlePress = () => {
    // console.log("this.props",this.props)
    this.props.navigation.navigate('FlightItemDetail')
  }
  render() { 
    return (
      <View style={styles.main_container}>
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
export default Sea;
