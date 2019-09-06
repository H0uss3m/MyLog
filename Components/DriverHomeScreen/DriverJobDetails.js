import React, { Component } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";

const { width } = Dimensions.get("window");
const height = width * 0.8;

class FlightList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInEditMode: false,
      eta: "24/02/2015 at 15:14"
    };
    this.defaultValue = "24/02/2015 at 15:14";
  }
static navigationOptions = ({ navigation }) => {
    return {
      title: "Job Details",
      headerTitleStyle: { flex: 1, textAlign: "center" }
    };
  };
  render() {
    const {
      awb,
      to,
      status,
      depart,
      arrival,
      etd,
      eta,
      hwb,
      nbre,
      weight,
      volume
    } = this.props.navigation.state.params.flightData;
    return (
      <ScrollView>
        <View style={styles.main_container}>
          <View style={styles.detail_box_header}>
            <View style={styles.header_container}>
              <Text style={styles.text}>
                <Text style={styles.label}>DN </Text>
                {awb}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.label}>Status </Text>
                {status}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.label}>Plate </Text>
                {to}
              </Text>
            </View>
            <View style={styles.flight_card}>
              <View style={styles.flight_details}>
                <View style={styles.item}>
                  <Text style={styles.card_label}>Departure </Text>
                  <Text style={styles.card_text}>{depart}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.card_label}>Date & Time </Text>
                  <Text style={styles.card_text}>{etd}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.card_label}>Num.of.pcs </Text>
                  <Text style={styles.card_text}>{nbre}</Text>
                </View>
              </View>
              <View style={styles.flight_schedual}>
                <View style={styles.item}>
                  <Text style={styles.card_label}>Arrival </Text>
                  <Text style={styles.card_text}>{arrival}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.card_label}>Date & Time </Text>
                  <Text style={styles.card_text}>{eta}</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.card_label}>Gross Weight </Text>
                  <Text style={styles.card_text}>{weight} Kg</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.detail_box_body}>
            <View style={styles.card}>
              <View style={styles.card_title}>
                <Text style={styles.title}>Pick UP iso Removal</Text>
              </View>

              <View style={styles.card_item}>
                <View>
                  <Text style={styles.card_detail_label}>Shipper</Text>
                  <TextInput
                    style={styles.card_detail_schedual}
                    value={hwb.toString()}
                  />
                </View>
                <View>
                  <Text style={styles.card_detail_label}>Adresse</Text>
                  <TextInput
                    style={styles.card_detail_schedual}
                    value={nbre.toString()}
                  />
                </View>
                <View>
                  <Text style={styles.card_detail_label}>Contact Name</Text>
                  <TextInput
                    style={styles.card_detail_schedual}
                    value={weight.toString()}
                  />
                </View>
                <View>
                  <Text style={styles.card_detail_label}>Phone</Text>
                  <TextInput
                    style={styles.card_detail_schedual}
                    value={volume.toString()}
                  />
                </View>
              </View>

              <View style={styles.card_title_2}>
                <Text style={styles.title}>Delivery</Text>
              </View>
              <View style={styles.card_item}>
                <View>
                  <Text style={styles.card_detail_label}>Consignee</Text>
                  <TextInput
                    style={styles.card_detail_schedual}
                    value={hwb.toString()}
                  />
                </View>
                <View>
                  <Text style={styles.card_detail_label}>Adresse</Text>
                  <TextInput
                    style={styles.card_detail_schedual}
                    value={nbre.toString()}
                  />
                </View>
                <View>
                  <Text style={styles.card_detail_label}>Contact Name</Text>
                  <TextInput
                    style={styles.card_detail_schedual}
                    value={weight.toString()}
                  />
                </View>
                <View>
                  <Text style={styles.card_detail_label}>Phone</Text>
                  <TextInput
                    style={styles.card_detail_schedual}
                    value={volume.toString()}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.button}>
                <View>
                  <Icon type="font-awesome" name="check" color="#ffffff" />
                </View>
                <View>
                  <Text style={styles.buttonText}>Done</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  detail_box_header: {
    // width: width * 0.84,
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
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  header_container: {
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  flight_card: {
    backgroundColor: "#ffffff"
    // padding: 10
  },
  flight_details: {
    width: "75%",
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
    fontSize: 14,
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
  card: {
    flex: 1,

    flexDirection: "column",
    justifyContent: "space-between",
    padding: 11,
    marginLeft: 5,
    marginRight: 2,
    width: width * 0.942,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderRadius: 11
  },
  detail_box_body: {
    flex: 1,
    flexDirection: "column",
    padding: 5
  },
  card_detail_schedual: {
    color: "black",
    borderColor: "grey",
    borderBottomWidth: 1,
    fontSize: 18
  },
  card_detail_label: {
    fontSize: 12
  },
  card_detail: {
    flex: 1
  },
  card_item: {
    marginTop: 5,
    borderWidth: 1,
    padding: 12,
    borderColor: "grey"
  },
  card_title: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    left: width / 5.5,
    top: 25,
    zIndex: 1,
    textAlign: "center",
    width: width * 0.5,
    borderWidth: 1,
    borderColor: "grey"
  },
  card_title_2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    left: width / 4,
    zIndex: 1,
    top: 25,
    textAlign: "center",
    width: width * 0.35,
    borderWidth: 1,
    borderColor: "grey"
  },
  title: {
    fontSize: 18
  },
  button: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#CD183F",
    paddingTop: 20,
    marginTop:5,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 50
  },
  buttonText: {
    color: "#ffffff"
  }
});
const MapStateToProps = state => {
  return {
    userStatus: state.toggleUserStatus.userStatus
  };
};
export default connect(MapStateToProps)(withNavigation(FlightList));
