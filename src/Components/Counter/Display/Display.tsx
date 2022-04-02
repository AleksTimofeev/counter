import React, {useEffect} from 'react';
import styles from '../Counter.module.css'

type PropsType = {
  currentValue: number
  style?: string
  start: boolean
  error: boolean
}

const Display: React.FC<PropsType> = ({currentValue, style, start, error}) => {


  return (
    <div className={styles.displayWrapper}>

      {error ? <span className={styles.error}>Incorrect value!</span> :
        start ? <span className={style && style}>
          {currentValue}
        </span> :
        <span className={styles.start}>enter values and press set</span>
      }
    </div>
  );
};

export default Display;