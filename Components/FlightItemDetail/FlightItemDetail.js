import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { TextInput } from "react-native-gesture-handler";

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
    const { params } = navigation.state;
    // const {userStatus}=this.props.navigation.state.params
    // console.log("***********userStatus**********",userStatus)
// if(userStatus==='adminConnected'){
  if (!params.isInEditMode ) {
    return {
      title: "Log Reference",
      headerTitleStyle: { flex: 1, textAlign: "center" },
      headerRight: (
        <TouchableOpacity
        onPress={() => params.changeEditMode()}
        style={{ marginRight: 20, borderWidth: 1 }}
        >
            <Icon type="font-awesome" name="pencil" />
          </TouchableOpacity>
        )
      };
    } else {
      return {
        title: "Log Reference",
        headerTitleStyle: { flex: 1, textAlign: "center" },
        headerRight: (
          <TouchableOpacity
          onPress={() => params.changeEditMode()}
          style={{ marginRight: 20, borderWidth: 1 }}
          >
            <Text>Save</Text>
          </TouchableOpacity>
        )
      };
    // }
  } 
  };
  // handle edit mode
  changeEditMode = () => {
    this.setState(
      {
        isInEditMode: !this.state.isInEditMode,
      },
      () => {
        this.props.navigation.setParams({
          isInEditMode: this.state.isInEditMode
        });
      }
    );
  };

  // the view when the edit mode is off
  renderDefaultView = (
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
  ) => {
    return (
      <View style={styles.main_container}>
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
          <ScrollView
            style={styles.scroll}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {/* <View style={{width,height}}> */}
            <View style={styles.item_scroll_1}>
              <View style={styles.card_detail}>
                <Text style={styles.card_detail_label}>Pick Up :</Text>
                <Text style={styles.card_detail_schedual}>
                  {this.state.eta}
                </Text>
              </View>
              <View style={styles.card_detail}>
                <Text style={styles.card_detail_label}>Docking :</Text>
                <Text style={styles.card_detail_schedual}>{eta}</Text>
              </View>
              <View style={styles.card_detail}>
                <Text style={styles.card_detail_label}>Departure :</Text>
                <Text style={styles.card_detail_schedual}>{eta}</Text>
              </View>
              <View style={styles.card_detail}>
                <Text style={styles.card_detail_label}>Arrival :</Text>
                <Text style={styles.card_detail_schedual}>{eta}</Text>
              </View>
              <View style={styles.card_detail}>
                <Text style={styles.card_detail_label}>In Clearance :</Text>
                <Text style={styles.card_detail_schedual}>{eta}</Text>
              </View>
              <View style={styles.card_detail}>
                <Text style={styles.card_detail_label}>Delivery :</Text>
                <Text style={styles.card_detail_schedual}>{eta}</Text>
              </View>
            </View>
            <View style={styles.item_scroll}>
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
            {/* </View> */}
          </ScrollView>
        </View>
      </View>
    );
  };
  // the view when the edit mode is on
  renderEditView = (
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
  ) => {
    return (
      <View style={styles.main_container}>
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
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => this.setState({ etd: text })}
                  value={etd}
                />
              </View>
              <View style={styles.item}>
                <Text style={styles.card_label}>ETA :</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => this.setState({ eta: text })}
                  value={eta}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.detail_box_body}>
          <ScrollView
            style={styles.scroll}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {/* <View style={{width,height}}> */}
            <View style={styles.item_scroll_1}>
              <View style={styles.card_detail}>
                <Text style={styles.card_detail_label}>Pick Up :</Text>

                <View style={{flexDirection:'row'}} >
                 <View>

                  <TextInput
                    style={{
                      height: 40,
                      borderColor: "gray",
                      borderWidth: 1,
                      width:"85%"
                    }}
                    onChangeText={(text)=>this.defaultValue=text}
                    value={this.state.eta}
                    />
                    </View>
                    <View >
                    <Icon 
                    type="font-awesome" 
                    name="check"
                    onPress={() => console.log("save change ")} 
                    style={{color:'green'}}
                    />
                   
                    </View>
                    <View >
                    <Icon 
                    type="font-awesome" 
                    name="exclamation"
                    onPress={() => console.log("remove change ")}
                    style={{color:'red'}}
                    />
                   
                    {/* <Button
                    onPress={() => console.log("remove change ")}
                    style={{backgroundColor:'green',width:50}}
                    title="!"
                  /> */}
                    </View>
                  {/* <Button
                    onPress={() => console.log("save change ")}
                    title="V"
                  />

                  <Button
                    onPress={() => console.log("remove change ")}
                    style={{ backgroundColor: "red" }}
                    title="!"
                  /> */}
                </View>
              </View>
              {/* <View style={styles.card_detail}>
                <Text style={styles.card_detail_label}>Docking :</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => this.setState({ eta:text })}
                  value={eta}
                  />
              </View>
              <View style={styles.card_detail}>
                <Text style={styles.card_detail_label}>Departure :</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => this.setState({ eta:text })}
                  value={eta}
                  />
              </View>
              <View style={styles.card_detail}>
                <Text style={styles.card_detail_label}>Arrival :</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => this.setState({ eta:text })}
                  value={eta}
                  />
              </View>
              <View style={styles.card_detail}>
                <Text style={styles.card_detail_label}>In Clearance :</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => this.setState({ eta:text })}
                  value={eta}
                  />
              </View>
              <View style={styles.card_detail}>
                <Text style={styles.card_detail_label}>Delivery :</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => this.setState({ eta:text })}
                  value={eta}
                  />
              </View>
            </View>
            <View style={styles.item_scroll}>
              <View>
                <Text style={styles.card_detail_label}>House Way Bill :</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => this.setState({ hwb:text })}
                  value={hwb}
                  />
              </View>
              <View>
                <Text style={styles.card_detail_label}>Nbre of parcel :</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => this.setState({ nbre:text })}
                  value={nbre}
                  />
              </View>
              <View>
                <Text style={styles.card_detail_label}>Gross Weight :</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => this.setState({ weight:text })}
                  value={weight}
                  />
              </View>
              <View>
                <Text style={styles.card_detail_label}>Volume :</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => this.setState({ volume:text })}
                  value={volume}
                  />
              </View>
              <View>
                <Text style={styles.card_detail_label}>Carrier :</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => this.setState({ carrier:text })}
                  value={carrier}
                  />
              </View> */}
            </View>
            {/* </View> */}
          </ScrollView>
        </View>
      </View>
    );
  };
  componentWillMount() {
    // setting navigation params to use it on the edit button
    this.props.navigation.setParams({
      changeEditMode: this.changeEditMode,
      isInEditMode: this.state.isInEditMode,
      userStatus:AsyncStorage.getItem('Logged')
    });
  }

  render() {
    // console.log("proooooops", this.props.navigation.state.params);
    // // console.log('Detail flightData  =',flightData)
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
    return this.state.isInEditMode
      ? this.renderEditView(
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
        )
      : this.renderDefaultView(
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
        );
  }
}
const styles = StyleSheet.create({
  detail_box_header: {
    // flex: 1,
    width: width * 0.84,
    // marginLeft:15,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 12,
    overflow: "hidden"
    // backgroundColor:'red'
    // padding:5
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
    // borderColor: "grey",
    // borderWidth: 1,
    // borderRadius: 12,
    // overflow: "hidden",
    // flex: 1,
    backgroundColor: "grey",
    // opacity:0.7,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
    // borderRadius:50
  },
  flight_card: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // textAlign:'center',
    backgroundColor: "#ffffff",

    padding: 10
  },
  flight_details: {
    // flex: 2,
    // textAlign:'center',
    // borderRightColor: 'black',
    // borderLeftColor: 'black',
    // borderRightWidth: 2,
    // borderLeftWidth: 2,
    padding: 10,
    flexDirection: "row"
    // backgroundColor:'blue'
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
    // justifyContent:'space-between',
  },
  item_scroll_1: {
    padding: 11,
    marginLeft: 5,
    marginRight: 2,

    width: width * 0.835,
    //   width,

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
    // width,

    borderWidth: 1,
    borderRadius: 11
  },
  detail_box_body: {
    flex: 1,
    flexDirection: "column",
    //   justifyContent:"space-around",
    //   backgroundColor: "red",
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

export default withNavigation(FlightList);
