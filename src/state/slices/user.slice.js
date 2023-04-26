import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isConnected: false,
  firstName: null,
  lastName: null,
  email: null,
  token: null,
  rememberMe: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      }
    },

    getToken: (state, action) => {
      return {
        ...state,
        isConnected: true,
        email: action.payload.email,
        token: `${action.payload.token}`,
      }
    },

    logOut: (state, action) => {
      if (state.rememberMe) {
        return {
          ...state,
          isConnected: false,
          token: null,
          firstName: null,
          lastName: null,
        }
      } else {
        return {
          ...state,
          rememberMe: false,
          isConnected: false,
          email: null,
          token: null,
          firstName: null,
          lastName: null,
        }
      }
    },
  },
})

export const { getUser, getToken, logOut } = userSlice.actions
export default userSlice.reducer
