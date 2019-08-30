import React from 'react'
import { TouchableOpacity, AsyncStorage } from 'react-native'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import Air from '../Components/Air'
import ClientHomeScreen from '../Components/ClientHomeScreen/ClientHomeScreen'
import Sea from '../Components/Sea'
import Search from '../Components/Search'
import FlightItemDetail from '../Components/FlightItemDetail/FlightItemDetail'
import AuthLoadingScreen from '../Components/Login/AuthLoadingScreen'
import { Icon } from 'react-native-elements'

const ShipmentNavigator = createMaterialTopTabNavigator(
  {
    Air: {
      screen: Air,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon type='font-awesome' name='plane' />
        }
      }
    },
    Sea: {
      screen: Sea,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon type='font-awesome' name='ship' />
        }
      }
    }
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      labelStyle: {
        fontSize: 18
      },
      tabStyle: {
        flex: 1,
        flexDirection: 'row'
      },
      style: {
        marginTop: 26
        //   backgroundColor: 'red'
      }
    }
  }
)
const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null
    }
  }
})
const AppStack = createStackNavigator({
  AdminHomeScreen: {
    screen: ShipmentNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'ShipmentList',
      headerTitleStyle: { flex: 1, textAlign: 'center' },
      headerLeft: (
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Icon
            type='font-awesome'
            onPress={async () => {
              await AsyncStorage.clear()
              navigation.navigate('AuthLoading')
              // console.log('logout')
            }}
            name='ban'
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity style={{ marginRight: 20 }}>
          <Icon
            type='font-awesome'
            onPress={() => {
              navigation.navigate('Search')
            }}
            name='search'
          />
        </TouchableOpacity>
      )
    })
  },
  FlightItemDetail: {
    screen: FlightItemDetail,
    navigationOptions: {
      title: 'Log Reference',
      headerTitleStyle: { flex: 1, textAlign: 'center' },
      headerRight: (
        <TouchableOpacity style={{ marginRight: 20 }}>
          <Icon type='font-awesome' name='pencil' />
        </TouchableOpacity>
      )
    }
  },
  Search: {
    screen: Search
  }
})

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      clientInterface: ClientHomeScreen,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
)
