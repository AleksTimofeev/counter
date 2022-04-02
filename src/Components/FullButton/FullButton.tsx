import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type FullButtonPropsType = DefaultButtonPropsType & {
  title: string
  onClick?: () => void
  styles?: string
}

const FullButton: React.FC<FullButtonPropsType> = ({
  title, onClick, styles, ...restProps
                                                   }) => {


  return (
    <button
      className={styles ? styles: ''}
      onClick={onClick}

      {...restProps}
    >
      {title}
    </button>
  );
};

export default FullButton;