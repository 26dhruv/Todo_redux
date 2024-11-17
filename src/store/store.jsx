import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/slicer'
//Creating store

const store=configureStore({reducer:{todos:todoReducer}})

export default store