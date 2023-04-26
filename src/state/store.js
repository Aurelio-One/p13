/**
 * The store of the application that holds the global state.
 * @module store
 */

import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user.slice'

/**
 * The store instance for the application.
 * @constant
 * @type {import('@reduxjs/toolkit').EnhancedStore}
 * @default
 */
const store = configureStore({
  reducer: { user: userSlice },
})

export default store
