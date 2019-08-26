const initialState = { shipmentList: [], SearchOptions: [] };

function toggleShipment(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "SET_SHIPMENT_LIST":
      nextState = {
        ...state,
        shipmentList: action.value
      };
      return nextState || state;
    case "FILTERED_SHIPMENT":
      let filtredData = state.shipmentList.filter(el =>
        action.value.includes(el.status)
      );
      nextState = {
        ...state,
        SearchOptions: action.value,
        shipmentList: filtredData
      };
      return nextState || state;
    default:
      return state;
  }
}
export default toggleShipment;
