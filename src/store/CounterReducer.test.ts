import {
  changeMaxValue,
  changeStartValue,
  counterReducer,
  CounterStateType, getLocalStorageCounterValue,
  incrementCounter,
  resetCounter
} from "./counterReducer";

let state: CounterStateType

beforeEach(() => {
  state = {
    counterValue: {
      maxValue: 5,
      startValue: 2,
      currentValue: 0
    },
    error: false,
    start: false,
  }
})

test('change start value counter', () => {
  const action = changeStartValue(1)
  const newState = counterReducer(state, action)
  expect(newState.counterValue.startValue).toBe(1)
})
test('incorrect start value counter (start value === max value)', () => {
  const action = changeStartValue(5)
  const newState = counterReducer(state, action)
  expect(newState.counterValue.startValue).toBe(2)
})
test('incorrect start value counter (start value > max value)', () => {
  const action = changeStartValue(6)
  const newState = counterReducer(state, action)
  expect(newState.counterValue.startValue).toBe(2)
})
test('change max value counter', () => {
  const action = changeMaxValue(6)
  const newState = counterReducer(state, action)
  expect(newState.counterValue.maxValue).toBe(6)
})
test('incorrect max value counter (max value === start value)', () => {
  const action = changeMaxValue(2)
  const newState = counterReducer(state, action)
  expect(newState.counterValue.maxValue).toBe(5)
})
test('incorrect max value counter (max value < start value)', () => {
  const action = changeMaxValue(1)
  const newState = counterReducer(state, action)
  expect(newState.counterValue.maxValue).toBe(5)
})
test('start counter', () => {

  const newState = counterReducer(state, {type: "START_COUNTER"})

  expect(newState.counterValue.currentValue).toBe(2)
  expect(newState.start).toBe(true)
})
test('increment counter', () => {
  const action = incrementCounter()
  const newState = counterReducer(state, action)
  expect(newState.counterValue.currentValue).toBe(1)
})
test('increment counter max value', () => {
  const action = incrementCounter()
  const state = {
    counterValue: {
      maxValue: 5,
      startValue: 2,
      currentValue: 5
    },
    error: false,
    start: false,
  }
  const newState = counterReducer(state, action)
  expect(newState.counterValue.currentValue).toBe(5)
  expect(newState.error).toBe(true)
})
test('reset counter', () => {
  const action = resetCounter()
  state = {
    counterValue: {
      maxValue: 5,
      startValue: 2,
      currentValue: 4
    },
    error: true,
    start: false,
  }
  const newState = counterReducer(state, action)
  expect(newState.counterValue.currentValue).toBe(2)
  expect(newState.error).toBe(false)
})
test('get counter value from localstorage', () => {
  const localValue = {startValue: 4, maxValue: 10, currentValue: 7}
  const action = getLocalStorageCounterValue(localValue)
  const newState = counterReducer(state, action)
  expect(newState.counterValue).toEqual(localValue)
})