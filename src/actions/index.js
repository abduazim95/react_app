export const login = (role) => ({
  type: 'USER_LOGIN',
  payload: role
})

export const logout = () => ({
  type: 'USER_LOGOUT'
})