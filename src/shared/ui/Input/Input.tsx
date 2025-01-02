import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  onChange?: (value: string) => void;
  value?: string;
}

export const Input: FC<IInput> = (props) => {
  const { value, onChange, className, ...otherProps } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      className={className}
      onChange={onChangeHandler}
      value={value}
      {...otherProps}
    />
  );
};
