import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const optionList = useMemo(() => {
    return options?.map((option) => (
      <option
        key={option.value}
        value={option.value}
        className={styles.option}
      >
        {option.content}
      </option>
    ));
  }, [options]);

  const mods: Mods = {};

  return (
    <div className={classNames(styles.Wrapper, mods, [className])}>
      {
        label && (
          <span className={styles.label}>{`${label}>`}</span>
        )
      }
      <select
        disabled={readonly}
        value={value}
        onChange={onChangeHandler}
        className={styles.select}
      >
        {optionList}
      </select>
    </div>
  );
});
