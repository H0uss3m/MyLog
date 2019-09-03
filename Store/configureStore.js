import { createStore, combineReducers } from 'redux'
import toggleShipment from './Reducers/ShipmentReducer'
import toggleUserStatus from './Reducers/userStatusReducer'

export default createStore(combineReducers({ toggleShipment, toggleUserStatus }))
