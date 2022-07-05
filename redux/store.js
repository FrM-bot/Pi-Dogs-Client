import { configureStore } from '@reduxjs/toolkit'
import bredName from './nameState'

export default configureStore({
  reducer: {
    bredName
  },
})