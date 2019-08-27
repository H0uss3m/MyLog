import React, { Component } from 'react'
import { View, StyleSheet, FlatList,Text } from 'react-native'
import FlightItem from '../FlightItem/FlightItem'
// import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'
var _ = require('lodash')


class FlightList extends Component {
  
  
  // loadData () {
    
    //   this.setState({
      //     data: 
      //     filtredData:
      //   })
      // }
      componentDidMount () {
        // this.loadData()
        
        
        // console.log('componentDidMount',this.props.SearchOptions)
      }
      
      componentDidUpdate () {
        console.log(' */*/*/* flightlist Data /*/*/*/*', this.props.data)
        // console.log(' this.props.data', this.props.data)
        
        // console.log('*******Did Update SearchOptions*******Update',this.props.shipmentList)
        // console.log('Did Update filtredData',this.props.filtredData.status)
        // console.log('Did Update shipmentList',this.props.shipmentList)
        // if (this.props.SearchOptions.length > 0) {
          //   let filtredData = this.state.data.filter( el => this.props.SearchOptions.includes(el.status))
          //   console.log('filtredData',filtredData)
          //   this.setState({
            //     filtredData
            //   })
            // }
            // console.log('params',this.props.navigation.state.params)
          }
          render () {
            let filtredData
            if (this.props.SearchOptions.length > 0){
              filtredData=this.props.data.filter(el => this.props.SearchOptions.includes(el.status))
            }else{

             filtredData=this.props.data
            }
            return (
              <View style={styles.flightList_container}>
      <Text>this.props.SearchOptions : {this.props.SearchOptions}</Text>
        <FlatList
          data={filtredData}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => <FlightItem item={item} />}
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
const MapStateToProps = state => {
  // return state
  return {
    SearchOptions: state.SearchOptions,
    filtredData: state.filtredData,
    shipmentList: state.shipmentList
  }
}
export default connect(MapStateToProps)(FlightList)
