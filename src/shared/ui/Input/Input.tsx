import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    autoFocus,
    readonly,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (event: any) => {
    setCaretPosition(event?.target?.selectionStart || 0);
  };

  const mods: Mods = {
    [styles.readonly]: readonly,
  };

  return (
    <div className={classNames(styles.InputWrapper, mods, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={styles.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {
          isCaretVisible && (
            <span
              style={{ left: `${caretPosition * 9}px` }}
              className={styles.caret}
            />
          )
        }
      </div>
    </div>
  );
});
