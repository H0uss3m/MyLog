import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import {CheckBox, Card, CardItem, Container} from "native-base";
import { withNavigation } from 'react-navigation';
import {connect} from 'react-redux'
var _ = require('lodash');

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pickUp: false,
      clearance: false,
      delivery: false,
      departure: false,
      arrival: false,
      docking: false
    };
    this.text=""
  }
  clearFilter = () =>{
    this.setState({
      text:"",
      pickUp: false,
      clearance: false,
      delivery: false,
      departure: false,
      arrival: false,
      docking: false
    })
    this.text=""
  }
  handleSearchOptions =(SearchOptions,text)=>{
  // fill the optionList the the selected Ones
   let OptionList = []
     if (SearchOptions.pickUp === true){
      OptionList.push('PickUp')
     }
     if (SearchOptions.clearance === true){
      OptionList.push('clearance')
   }
   if (SearchOptions.delivery === true){
    OptionList.push('Delivery')
    }
    if (SearchOptions.departure === true){
      OptionList.push('Departure')
    }
    if (SearchOptions.arrival === true){
      OptionList.push('Arrival')
    }
    if (SearchOptions.docking === true){
      OptionList.push('Docking')
    }

//     let filteredData = this.props.shipmentList.filter(el=>OptionList.includes(el.status))
    console.log('OptionList',OptionList)

const action = {type:"SET_FILTER_OPTIONS",value:OptionList}
this.props.dispatch(action)
// redirect to Home Screen
    this.props.navigation.navigate("AdminHomeScreen");
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: 'Search',
      headerTitleStyle: { flex: 1, textAlign: 'center' },
      headerRight: (
        <TouchableOpacity  onPress={() => params.clearFilter()} style={{ marginRight: 20, borderWidth: 1 }}>
             <Text>CLEAR ALL</Text>
          </TouchableOpacity>
       
      ),
    };
  };
  componentWillMount() {
    this.props.navigation.setParams({ clearFilter: this.clearFilter });
  }
  componentDidUpdate(){
    console.log("Render Search Component componentDidUpdate this.text = ",this.text)
  }
  render () {
    console.log("Render Search Component this.text = ",this.text)
    return (
      <Container>
        <View style={styles.main_search_container}>
          <View style={styles.search_bar}>
            <TextInput
              style={{
                height: 40,
                borderColor: "grey",
                borderWidth: 1,
                padding: 2,
                borderRadius: 12
              }}
              onChangeText={text => this.text= text }
              placeholder="Search"
              value={this.state.text}
            />
          </View>
          <View style={styles.filter_container}>
            <Text style={{ color: "grey" }}>FILTER BY</Text>
            <View>
              <Card>
                <TouchableOpacity>

                <CardItem body>
                  <Text style={{ color: "grey" }}>Air Waybill</Text>
                </CardItem>
                </TouchableOpacity>
                <TouchableOpacity>

                <CardItem style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'grey' }} body>
                  <Text style={{ color: "grey" }}>Shipper</Text>
                </CardItem>
                </TouchableOpacity>
                <TouchableOpacity>

                <CardItem style={{ borderBottomWidth: 1, borderColor: 'grey' }} body>
                  <Text style={{ color: "grey" }}>Consignee</Text>
                </CardItem>
                </TouchableOpacity>
                <TouchableOpacity>

                <CardItem body>
                  <Text style={{ color: "grey" }}>Vessel iso Boat</Text>
                </CardItem>
                </TouchableOpacity>
              </Card>
            </View>
            <Text style={{ color: "grey" }}>STATUS</Text>
            <Card>
                <TouchableOpacity
                 onPress={() => {
                  this.setState({ pickUp: !this.state.pickUp })
                }}>
              <CardItem body>
                <CheckBox
                  title="Pick Up"
                  color="red"
                  name="pickUp"
                  checkedColor="red"
                  checked={this.state.pickUp}
                  onPress={() => {
                    this.setState({ pickUp: !this.state.pickUp })
                  }}
                />
                <Text style={styles.CardItemText}>Pick Up</Text>
              </CardItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({ docking: !this.state.docking });
                  }}>
              <CardItem style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'grey' }}body>
                <CheckBox
                  title="Docking"
                  color="red"
                  name="docking"
                  checkedColor="red"
                  checked={this.state.docking}
                  onPress={() => {
                    this.setState({ docking: !this.state.docking });
                  }}
                />
                <Text style={styles.CardItemText}>Docking</Text>
              </CardItem>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => {
                    this.setState({ departure: !this.state.departure });
                  }}>
              <CardItem body>
                <CheckBox
                  title="Departure"
                  color="red"
                  name="departure"
                  checkedColor="red"
                  checked={this.state.departure}
                  onPress={() => {
                    this.setState({ departure: !this.state.departure });
                  }}
                />
                <Text style={styles.CardItemText}>Departure</Text>
              </CardItem>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => {
                    this.setState({ arrival: !this.state.arrival });
                  }}>
              <CardItem style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'grey' }} body>
                <CheckBox
                  title="Arrival"
                  color="red"
                  name="arrival"
                  checkedColor="red"
                  checked={this.state.arrival}
                  onPress={() => {
                    this.setState({ arrival: !this.state.arrival });
                  }}
                />
                <Text style={styles.CardItemText}>Arrival</Text>
              </CardItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({ clearance: !this.state.clearance });
                  }}>
              <CardItem body>
                <CheckBox
                  title="In Clearance"
                  color="red"
                  name="clearance"
                  checkedColor="red"
                  checked={this.state.clearance}
                  onPress={() => {
                    this.setState({ clearance: !this.state.clearance });
                  }}
                />
                <Text style={styles.CardItemText}>In Clearance</Text>
              </CardItem>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => {
                    this.setState({ delivery: !this.state.delivery });
                  }}>
              <CardItem style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'grey' }} body>
                <CheckBox
                  title="Delivery"
                  color="red"
                  name="delivery"
                  checkedColor="red"
                  checked={this.state.delivery}
                  onPress={() => {
                    this.setState({ delivery: !this.state.delivery });
                  }}
                />
                <Text style={styles.CardItemText}>Delivery</Text>
              </CardItem>
                </TouchableOpacity>

                <CardItem style={styles.button} body>
                <TouchableOpacity
                  style={styles.signInButton}
                  onPress={()=>{this.handleSearchOptions(this.state,this.text)}}
                >
                  <Text style={styles.signInText}>SHOW RESULTS</Text>
                </TouchableOpacity>
              </CardItem>
            </Card>
          </View>
        </View>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  main_search_container: {
    flex: 1,
    padding: "2%",
    backgroundColor: "#DCDCDC"
  },

  CardItemText: {
    color: "grey",
    fontSize: 16,
    marginLeft: 20
  },
  search_bar: {
    // flex: 1,
    // backgroundColor: 'blue',
    margin: 10
  },
  filter_container: {
    // flex: 1,
    // backgroundColor: 'yellow'
  },
  button: {
    justifyContent: "center",
    alignItems: "center"
  },
  signInButton: {
    width: "80%",
    backgroundColor: "#CD183F",
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 50
  },
  signInText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold"
  }
});
const MapStateToProps = (state) =>{
  // return state
  return {
    shipmentList: state.shipmentList
  }
}
export default withNavigation(connect(MapStateToProps)(Search));
