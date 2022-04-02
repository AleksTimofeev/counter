import React, {ChangeEvent, useState} from 'react';
import Counter from "./Counter";
import SettingsCounter from "./SettingsCounter";
import counter from "./Counter";

export type CounterValueType = {
  maxValue: number
  startValue: number
  currentValue: number
}

const ContainerCounter = () => {

  let [counterValue, setCounterValue] = useState<CounterValueType>({
    maxValue: 1,
    startValue: 0,
    currentValue: 0
  })
  let [start, setStart] = useState<boolean>(false)
  let [error, setError] = useState<boolean>(false)

  const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.currentTarget.value)
    if (value >= counterValue.maxValue){setError(true)}else{setError(false)}
      setCounterValue({...counterValue, startValue: value})
  }
  const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.currentTarget.value)
    if (value <= counterValue.startValue){setError(true)}else{setError(false)}
    setCounterValue({...counterValue, maxValue: value})
  }

  const startCounter = () => {
    setCounterValue({...counterValue, currentValue: counterValue.startValue})
    setStart(true)
  }

  const counterInc = () => {
    if (counterValue.currentValue < counterValue.maxValue) {
      setCounterValue({...counterValue, currentValue: counterValue.currentValue+1})
  }}

  const counterReset = () => {
    setCounterValue({...counterValue, currentValue: counterValue.startValue})
  }

  return (
    <>
      <SettingsCounter
        changeStartValue={changeStartValue}
        changeMaxValue={changeMaxValue}
        startCounter={startCounter}
        counterValue={counterValue}
        error={error}
      />
      <Counter
        error={error}
        start={start}
        counterValue={counterValue}
        counterInc={counterInc}
        counterReset={counterReset}
      />
    </>
  );
};

export default ContainerCounter