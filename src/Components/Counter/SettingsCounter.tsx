import React, {ChangeEvent, useEffect} from 'react'
import styles from './Counter.module.css'
import FullButton from "../FullButton/FullButton";
import FullInput from "../FullInput/FullInput";
import {
  changeMaxValue,
  changeStartValue,
  getLocalStorageCounterValue,
  startCounter
} from "../../store/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {counterSelector} from "../../store/store";


const SettingsCounter = () => {

  const dispatch = useDispatch()
  const counterValue = useSelector(counterSelector)
  const {maxValue, startValue} = counterValue.counterValue

  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    let value: number = Number(e.currentTarget.value)
    dispatch(changeStartValue(value))
  }
  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    let value: number = Number(e.currentTarget.value)
    dispatch(changeMaxValue(value))
  }
  const startCounterHandler = () => {
    dispatch(startCounter(counterValue.counterValue))
  }

  useEffect(() => {
    if(localStorage.getItem('counterValues')){
      const value = localStorage.getItem('counterValues')
      value && dispatch(getLocalStorageCounterValue(JSON.parse(value)))
    }
  },[])

  return (
    <div className={styles.counterWrapper}>
      <FullInput
        style={styles.input}
        type={'number'}
        value={maxValue}
        onChange={onChangeMaxValue}
      >
        max value
      </FullInput>
      <FullInput
        style={styles.input}
        type={'number'}
        value={startValue}
        onChange={onChangeStartValue}
      >
        start value
      </FullInput>
      <div className={styles.buttons}>
        <FullButton
          title={'set'}
          onClick={startCounterHandler}
          disabled={counterValue.error}
        />
      </div>
    </div>
  );
};

export default SettingsCounter;