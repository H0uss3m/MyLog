import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux'


const { width } = Dimensions.get("window");
const height = width * 0.8;

class FlightList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInEditMode: false,
      eta: "24/02/2015 at 15:14"
    };
    this.defaultValue="24/02/2015 at 15:14"
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Job Details",
        headerTitleStyle: { flex: 1, textAlign: "center" },
      }
  }
  render() {
    const {
      awb,
      from,
      to,
      status,
      depart,
      arrival,
      etd,
      eta,
      hwb,
      nbre,
      weight,
      volume,
      carrier
    } = this.props.navigation.state.params.flightData;
    return (
      <View style={styles.main_container}>
        <Text>Driver Details</Text>
        <View style={styles.detail_box_header}>
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
            <View style={styles.flight_details}>
              <View style={styles.item}>
                <Text style={styles.card_label}>From :</Text>
                <Text style={styles.card_text}>{depart}</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.card_label}>To :</Text>
                <Text style={styles.card_text}>{arrival}</Text>
              </View>
            </View>
            <View style={styles.flight_schedual}>
              <View style={styles.item}>
                <Text style={styles.card_label}>ETD :</Text>
                <Text style={styles.card_text_schedual}>{etd}</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.card_label}>ETA :</Text>
                <Text style={styles.card_text_schedual}>{eta}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.detail_box_body}>
            <View style={styles.item_scroll_1}>
              <View>
                <Text style={styles.card_detail_label}>House Way Bill :</Text>
                <Text style={styles.card_detail_schedual}>{hwb}</Text>
              </View>
              <View>
                <Text style={styles.card_detail_label}>Nbre of parcel :</Text>
                <Text style={styles.card_detail_schedual}>{nbre} pcs</Text>
              </View>
              <View>
                <Text style={styles.card_detail_label}>Gross Weight :</Text>
                <Text style={styles.card_detail_schedual}>{weight} Kg</Text>
              </View>
              <View>
                <Text style={styles.card_detail_label}>Volume :</Text>
                <Text style={styles.card_detail_schedual}>{volume} Cbm</Text>
              </View>
              <View>
                <Text style={styles.card_detail_label}>Carrier :</Text>
                <Text style={styles.card_detail_schedual}>{carrier}</Text>
              </View>
            </View>
        </View>
      </View>
    );
     
  }
}
const styles = StyleSheet.create({
  detail_box_header: {
    width: width * 0.84,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 12,
    overflow: "hidden"
  },
  main_container: {
    backgroundColor: "#d9d9d9",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 25
  },
  header_container: {
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  flight_card: {
    backgroundColor: "#ffffff",
    padding: 10
  },
  flight_details: {
    padding: 10,
    flexDirection: "row"
  },
  flight_schedual: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "grey"
  },
  label: {
    fontWeight: "bold",
    color: "#000000"
  },
  card_label: {
    fontWeight: "bold",
    color: "#000000"
  },
  card_text_schedual: {
    color: "orange",
    borderWidth: 1,
    borderColor: "grey"
  },
  card_text: {
    color: "#000000",
    fontSize: 12
  },
  text: {
    color: "#ffffff",
    fontSize: 12
  },
  item: {
    marginRight: 15
  },
  item_scroll_1: {
    padding: 11,
    marginLeft: 5,
    marginRight: 2,
    width: width * 0.835,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderRadius: 11
  },
  item_scroll: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 11,
    marginRight: 5,
    marginLeft: 2,
    width: width * 0.84,
    borderWidth: 1,
    borderRadius: 11
  },
  detail_box_body: {
    flex: 1,
    flexDirection: "column",
    padding: 5
  },
  scroll: {
    flex: 1,
    height,
    width: width * 0.872
  },
  card_detail_schedual: {
    color: "grey"
  },
  card_detail_label: {
    fontSize: 22
  },
  card_detail: {
    flex: 1,
    marginBottom: "2%"
  }
});
const MapStateToProps = state =>{
  return {
    userStatus:state.toggleUserStatus.userStatus
  }
}
export default connect(MapStateToProps)(withNavigation(FlightList));
