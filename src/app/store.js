import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'

const store = configureStore({ reducer })
export const { dispatch } = store
export default store