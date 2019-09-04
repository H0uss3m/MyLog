import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import FlightItem from '../FlightItem/FlightItem'
// import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

var _ = require('lodash')

class FlightList extends Component {
  render () {
    // console.log('List Page Logged AsyncStorage = ',AsyncStorage.getItem('Logged'))

    // const { userStatus } = .userStatus
    let filtredData
    if (this.props.SearchOptions.length > 0) {
      filtredData = this.props.data.filter(el =>
        this.props.SearchOptions.includes(el.status)
      )
    } else {
      filtredData = this.props.data
    }
    return (
      <View style={styles.flightList_container}>
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
    SearchOptions: state.toggleShipment.SearchOptions
  }
}
export default connect(MapStateToProps)(FlightList)
