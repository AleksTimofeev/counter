export type CounterValueType = {
  maxValue: number
  startValue: number
  currentValue: number
}
export type CounterStateType = {
  counterValue: CounterValueType
  error: boolean
  start: boolean
}
type ActionsType =
  ReturnType<typeof startCounter> |
  ReturnType<typeof changeStartValue> |
  ReturnType<typeof changeMaxValue> |
  ReturnType<typeof incrementCounter> |
  ReturnType<typeof resetCounter> |
  ReturnType<typeof getLocalStorageCounterValue>

let initialState: CounterStateType = {
  counterValue: {
    maxValue: 1,
    startValue: 0,
    currentValue: 0
  },
  error: false,
  start: false,
}

export const counterReducer = (state = initialState, action: ActionsType): CounterStateType => {
  switch (action.type) {

    case 'CHANGE_START_VALUE':
      return {
        ...state,
        start: false,
        counterValue: {
          ...state.counterValue, startValue:
            action.value < state.counterValue.maxValue ? action.value : state.counterValue.startValue
        }
      }
    case 'CHANGE_MAX_VALUE':
      return {
        ...state,
        start: false,
        counterValue: {
          ...state.counterValue, maxValue:
            action.value > state.counterValue.startValue ? action.value : state.counterValue.maxValue
        }
      }
    case 'START_COUNTER':
      return {
        ...state,
        counterValue: {...state.counterValue, currentValue: state.counterValue.startValue},
        start: true
      }
    case "INCREMENT_COUNTER":
      if (state.counterValue.currentValue < state.counterValue.maxValue) {
        return {
          ...state,
          counterValue: {...state.counterValue, currentValue: state.counterValue.currentValue += 1}
        }
      }
      if (state.counterValue.currentValue === state.counterValue.maxValue) {
        return {...state, error: true}
      } else {
        return {...state}
      }
    case "RESET_COUNTER": return {...state,
      error: false,
      counterValue: {...state.counterValue, currentValue: state.counterValue.startValue}
    }
    case "GET_LOCALSTORAGE_COUNTER_VALUE": return {...state,
      counterValue: {...action.value}
    }

    default:
      return state
  }
}

export const changeStartValue = (value: number) => {
  return {type: 'CHANGE_START_VALUE', value} as const
}
export const changeMaxValue = (value: number) => {
  return {type: 'CHANGE_MAX_VALUE', value} as const
}
export const startCounter = (value: CounterValueType) => {
  localStorage.setItem('counterValues', JSON.stringify(value))
  return {
    type: 'START_COUNTER'
  } as const
}
export const incrementCounter = () => {
  return {type: 'INCREMENT_COUNTER'} as const
}
export const resetCounter = () => {
  return {type: 'RESET_COUNTER'} as const
}
export const getLocalStorageCounterValue = (value: CounterValueType) => {
  return {type: 'GET_LOCALSTORAGE_COUNTER_VALUE', value} as const
}