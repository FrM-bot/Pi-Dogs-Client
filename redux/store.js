import { configureStore } from '@reduxjs/toolkit'
import bredName from './nameState'
import dogDetails from './dogState'

export default configureStore({
  reducer: {
    bredName,
    dogDetails
  },
})