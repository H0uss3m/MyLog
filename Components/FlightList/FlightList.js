import React, { Component } from 'react'
import { View, StyleSheet, FlatList, AsyncStorage } from 'react-native'
import FlightItem from '../FlightItem/FlightItem'
import { withNavigation } from 'react-navigation';
import {connect} from 'react-redux'
import data from '../Data/data'
var _ = require('lodash');
class FlightList extends Component {
  state = {
    data:data,
    filtredData:data
  };
  handlePress = (flightData) => {
    // console.log("pressed props",flightData)
    this.props.navigation.navigate('FlightItemDetail',{flightData:flightData})
  }
  loadData (){
    const action = { type:'SET_SHIPMENT_LIST', value:data}
      // const action = { type: 'TOGGLE_FAVORITE', value: this.state.film }
      this.props.dispatch(action)
    //   // console.log('test')
    let filtredData=data.filter(el=>this.props.SearchOptions.includes(el.status))
 
      this.setState({filtredData,data})
    
//     let status= AsyncStorage.getItem('status')
//     let from= AsyncStorage.getItem('from')
// //  if (status.length>0 && from.length>0){

//    let filtredData=this.state.data.filter(el=>el.status !== 'Delivery')
//   //  console.log("filtredData",filtredData)
//    this.setState({filtredData})
  // }
    
  }
  componentDidMount(){
    console.log('render')
    // this.loadData()
  
  }
  render () {
    // console.log('this.props.shipmentList',this.props.shipmentList)
    // console.log("this.props",this.props.shipmentList)
    // console.log('params SearchOptions =',this.props.navigation.state.params)
    // console.log('params SearchOptions =',this.props.navigation.state.params)
    // console.log('this.FiltredState',this.state.data.filter(el=>el.status==="In Progress"))
    return (
      <View style={styles.flightList_container}>
        <FlatList
          data={data}
          keyExtractor={(item,index)=>item.id.toString()}
          // keyExtractor={({ item }) => item.id.toString()}
          renderItem={({ item }) => <FlightItem loadData={this.loadData} item={item} handlePress={this.handlePress}
          />}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  flightList_container: {
    flex: 1,
    margin: 10
  
  }
})
const MapStateToProps = (state) =>{
  // return state
  return {
    SearchOptions: state.SearchOptions,
    shipmentList: state.shipmentList
  }
}
export default withNavigation(connect(MapStateToProps)(FlightList))
