import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import styles from './FullInput.module.css'

type DefaultPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type PropsType = DefaultPropsType & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onEnter?: () => void
  type?: 'number' | 'phone' | 'email' | 'password'
  style?: string
}

const FullInput: React.FC<PropsType> = ({
                                          children,
                                          onChange,
                                          onKeyPress,
                                          onEnter,
                                          type,
                                          style,

                                          ...restProps
                                        }) => {

  const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
  }
  const onKeyPressCallBack = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  const fullStyle = `${styles.default} ${style && style}`

  return (
    <label>
      <legend>{children}</legend>
      <input
        className={fullStyle}
        type={type ? type : 'text'}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallBack}

        {...restProps}
      />
    </label>
  );
};

export default FullInput;