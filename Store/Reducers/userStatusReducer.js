const initialState = { userStatus: '' }

function toggleUserStatus (state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'SET_USER_STATUS':
      nextState = {
        ...state,
        userStatus: action.value
      }
      return nextState || state
    case 'SET_ADMIN_STATUS':
      nextState = {
        ...state,
        userStatus: action.value
      }
      return nextState || state
    case 'SET_DRIVER_STATUS':
      nextState = {
        ...state,
        userStatus: action.value
      }
      return nextState || state
    default:
      return state
  }
}

export default toggleUserStatus
