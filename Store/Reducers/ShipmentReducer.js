const initialState = {
  airShipmentList: [],
  seaShipmentList: [],
  driverShipmentList: [],
  SearchOptions: []
};

function toggleShipment(state = initialState, action) {
  let nextState;
  switch (action.type) {
    // set air shipment
    case "SET_AIR_SHIPMENT_LIST":
      nextState = {
        ...state,
        airShipmentList: action.value
      };
      return nextState || state;
    // set sea shipment
    case "SET_SEA_SHIPMENT_LIST":
      nextState = {
        ...state,
        seaShipmentList: action.value
      };
      return nextState || state;
    case 'SET_DRIVER_SHIPMENT_LIST':
      nextState = {
        ...state,
        driverShipmentList: action.value
      };
      return nextState || state
    // set search options
    case "SET_FILTER_OPTIONS":
      nextState = {
        ...state,
        SearchOptions: action.value
      };
      return nextState || state;
    case "EDIT_SHIPMENT_ITEM":
      nextState = {
        ...state,
        isInEditMode: action.value
      };
      return nextState || state;
    default:
      return state;
  }
}
export default toggleShipment;
