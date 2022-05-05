import React, {useEffect} from 'react';
import Counter from "./Counter";
import SettingsCounter from "./SettingsCounter";
import styles from './Counter.module.css'


const ContainerCounter = () => {

  return (
    <div className={styles.wrapper}>
      <SettingsCounter />
      <Counter/>
    </div>
  );
};

export default ContainerCounter