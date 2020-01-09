const initialState = {
  authenticated: true,
  role: 'District'
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, authenticated: true, role: action.payload }
    case 'USER_LOGOUT':
      return { ...state, authenticated: false, role: null }
    default:
      return state
  }
}
export default authReducer;