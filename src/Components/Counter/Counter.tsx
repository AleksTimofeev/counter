import React, {useEffect, useState} from 'react';
import styles from './Counter.module.css'
import Display from "./Display/Display";
import FullButton from "../FullButton/FullButton";
import {CounterValueType} from "./ContainerCounter";


export type CounterType = number
export type MaxCounterValueType = number
export type StartAnimeType = boolean

type PropsType = {
  counterValue: CounterValueType
  counterInc: () => void
  counterReset: () => void
  start: boolean
  error: boolean
}

const Counter: React.FC<PropsType> = ({
                                        counterValue: {currentValue, maxValue, startValue},
                                        counterInc, counterReset, start, error
                                      }) => {

  const resetHandler = () => {
    counterReset()
  }
  const incHandler = () => {
    counterInc()
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
