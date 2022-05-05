import React from 'react';
import styles from './Counter.module.css'
import Display from "./Display/Display";
import FullButton from "../FullButton/FullButton";
import {useDispatch, useSelector} from "react-redux";
import {counterSelector} from "../../store/store";
import {incrementCounter, resetCounter} from "../../store/counterReducer";


const Counter = () => {
  const dispatch = useDispatch()
  const {error, start, counterValue} = useSelector(counterSelector)
  const {startValue, maxValue, currentValue} = counterValue

  const resetHandler = () => {
    dispatch(resetCounter())
  }
  const incHandler = () => {
    dispatch(incrementCounter())
  }


  return (
    <>
      <div className={styles.counterWrapper}>
        <Display
          error={error}
          start={start}
          currentValue={currentValue}
          style={maxValue === currentValue ? styles.maxCounterStyle : ''}
        />
        <div className={styles.buttons}>
          <FullButton
            title={'inc'}
            onClick={incHandler}
            disabled={error || !start || currentValue === maxValue}
          />
          <FullButton
            title={'reset'}
            onClick={resetHandler}
            disabled={error || currentValue === startValue}
          />
        </div>
      </div>
    </>
  );
};

export default Counter;
