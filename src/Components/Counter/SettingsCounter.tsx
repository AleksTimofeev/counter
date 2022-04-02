import React, {ChangeEvent, useState} from 'react'
import styles from './Counter.module.css'
import FullButton from "../FullButton/FullButton";
import FullInput from "../FullInput/FullInput";
import {CounterValueType} from "./ContainerCounter";

type PropsType = {
  // settingsError: (value: boolean) => void
  // startCounter: (maxValue: number, startValue: number) => void
  // error: boolean
  changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
  changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
  startCounter: () => void
  counterValue: CounterValueType
  error: boolean
}

const SettingsCounter: React.FC<PropsType> = ({
                                                changeStartValue, changeMaxValue, counterValue,
                                                startCounter, error
}) => {


  return (
    <div className={styles.counterWrapper}>
      <FullInput
        type={'number'}
        value={counterValue.maxValue}
        onChange={changeMaxValue}
      >
        max value
      </FullInput>
      <FullInput
        type={'number'}
        value={counterValue.startValue}
        onChange={changeStartValue}
      >
        start value
      </FullInput>
      <div className={styles.buttons}>
        <FullButton
          title={'set'}
          onClick={startCounter}
          disabled={error}
        />
      </div>
    </div>
  );
};

export default SettingsCounter;