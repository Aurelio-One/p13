import { createSlice } from '@reduxjs/toolkit'

/**
 * Initial state for the user slice of the Redux store.
 *
 * @typedef {Object} UserState
 * @property {boolean} isConnected - Whether the user is currently connected or not.
 * @property {string|null} firstName - The first name of the user.
 * @property {string|null} lastName - The last name of the user.
 * @property {string|null} email - The email address of the user.
 * @property {string|null} token - The authentication token of the user.
 * @property {boolean} rememberMe - Whether the user chose to be remembered or not.
 *
 * @type {UserState}
 */
const initialState = {
  isConnected: false,
  firstName: null,
  lastName: null,
  email: null,
  token: null,
  rememberMe: false,
}

/**
 * Redux slice containing the user state and actions.
 *
 * @type {import('@reduxjs/toolkit').Slice<UserState, Record<string, never>>}
 */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**
     * Reducer function for updating the user's first and last names.
     *
     * @param {UserState} state - Current state of the user slice.
     * @param {import('@reduxjs/toolkit').PayloadAction<{firstName: string, lastName: string}>} action - Payload action containing the first and last names.
     * @returns {UserState} - The new state of the user slice.
     */
    getUser: (state, action) => {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      }
    },

    /**
     * Reducer function for updating the user's authentication token and email address.
     *
     * @param {UserState} state - Current state of the user slice.
     * @param {import('@reduxjs/toolkit').PayloadAction<{email: string, token: string}>} action - Payload action containing the email address and authentication token.
     * @returns {UserState} - The new state of the user slice.
     */
    getToken: (state, action) => {
      return {
        ...state,
        isConnected: true,
        email: action.payload.email,
        token: `${action.payload.token}`,
      }
    },

    /**
     * Reducer function for logging the user out of the application.
     *
     * @param {UserState} state - Current state of the user slice.
     * @returns {UserState} - The new state of the user slice.
     */
    logOut: (state) => {
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
