import { createStore, combineReducers } from "redux";
import {counterReducer} from "./counterReducer";


const rootReducer = combineReducers({
  counter: counterReducer
})

export type StateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

export const counterSelector = (state: StateType) => state.counter
