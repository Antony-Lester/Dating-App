/** @format */
// @ts-nocheck
import { createStore } from "redux";
import taskReducer from "./taskReducer";
let store = createStore(taskReducer)
export default store;