import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';
class FlightList extends Component {
  
  handlePress = flightData => {
    const userStatus=AsyncStorage.getItem('Logged')
    if(userStatus ==='adminConnected'){
      this.props.navigation.navigate("FlightItemDetail", {
        flightData: flightData
      });
    } else if(userStatus==='userConnected'){
      this.props.navigation.navigate("FlightItemDetail", {
        flightData: flightData
      });
    }
  };
  render() {
    // console.log('Item Id  =', this.props.item.id)
    const {
      id,
      awb,
      from,
      to,
      status,
      shipper,
      consignee,
      pics,
      weight,
      flight1,
      flight2
    } = this.props.item;

  
    // console.log('this.props.item',this.props.item)
    return (
      <TouchableOpacity onPress={() => this.handlePress(this.props.item)}>
        <View key={id} style={styles.main_container}>
          <View style={styles.header_container}>
            <Text style={styles.text}>
              <Text style={styles.label}>AWB:</Text>
              {awb}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>From:</Text>
              {from}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>To:</Text>
              {to}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Status:</Text>
              {status}
            </Text>
          </View>
          <View style={styles.flight_card}>
            <View style={{ flex: 2 }}>
              <Text style={styles.card_label}>Shipper:</Text>
              <Text style={styles.card_text}>{shipper}</Text>
              <Text style={styles.card_label}>Consignee:</Text>
              <Text style={styles.card_text}>{consignee}</Text>
            </View>
            <View style={styles.flight_details}>
              <Text style={styles.card_label}>Num.of.pcs:</Text>
              <Text style={styles.card_text}>{pics}</Text>
              <Text style={styles.card_label}>Gross Weight:</Text>
              <Text style={styles.card_text}>{weight} Kg</Text>
            </View>
            <View style={{ flex: 2, marginLeft: 20 }}>
              <Text style={styles.card_label}>Flight 1:</Text>
              <Text style={styles.card_text}>TK {flight1}</Text>
              <Text style={styles.card_label}>Flight 2:</Text>
              <Text style={styles.card_text}>TK {flight2}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 12,
    overflow: "hidden"
  },
  header_container: {
    flex: 1,
    backgroundColor: "grey",
    // opacity:0.7,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
    // borderRadius:50
  },
  flight_card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    // textAlign:'center',
    backgroundColor: "#ffffff",

    padding: 10
  },
  flight_details: {
    flex: 2,
    // textAlign:'center',
    // borderRightColor: 'black',
    // borderLeftColor: 'black',
    borderRightWidth: 2,
    borderLeftWidth: 2,
    padding: 10

    // backgroundColor:'blue'
  },
  label: {
    fontWeight: "bold",
    color: "#000000"
  },
  card_label: {},
  card_text: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  text: {
    color: "#ffffff",
    fontSize: 12
  }
});

export default withNavigation(FlightList);
