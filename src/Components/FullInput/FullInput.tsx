import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type PropsType = DefaultPropsType & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onEnter?: () => void
  type?: 'number' | 'phone' | 'email' | 'password'
}

const FullInput: React.FC<PropsType> = ({
                                          children,
                                          onChange,
                                          onKeyPress,
                                          onEnter,
                                          type,

                                          ...restProps
                                        }) => {

  const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
  }
  const onKeyPressCallBack = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  return (
    <label>
      <legend>{children}</legend>
      <input
        type={type ? type : 'text'}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallBack}

        {...restProps}
      />
    </label>
  );
};

export default FullInput;