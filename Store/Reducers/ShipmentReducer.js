const initialState = { shipmentList: [], filtredData: [], SearchOptions: [] }

function toggleShipment (state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'SET_SHIPMENT_LIST':
      nextState = {
        ...state,
        shipmentList: action.value,
        filtredData: action.value
      }
      return nextState || state
    case 'FILTERED_SHIPMENT':
    // if options exist than filter the list else return the full list
      // if (action.value.length > 0) {
      //   let filtredData = state.shipmentList.filter(el =>
      //     action.value.includes(el.status)
      //   )
        nextState = {
          ...state,
          SearchOptions: action.value,
          // filtredData: filtredData
        }
      // } else {
      //   nextState = {
      //     ...state,
      //     SearchOptions: action.value,
      //     filtredData: state.shipmentList
      //   }
      // }
      return nextState || state
    default:
      return state
  }
}
export default toggleShipment
