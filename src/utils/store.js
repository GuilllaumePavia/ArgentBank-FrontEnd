import userReducer from '../features/userReducer'
import editingUserReducer from '../features/editingUserReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    user: userReducer,
    editingUser : editingUserReducer
  },
})

export default store