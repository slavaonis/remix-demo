import {MouseEventHandler, useState} from 'react';

//
//

export const useToggle = (
  defaultValue: boolean = false,
): {
  value: boolean;
  toggle: () => void;
  setValue: (value: boolean) => void;
  preventEventDefault: MouseEventHandler<HTMLButtonElement>;
} => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    toggle: () => setValue(v => !v),
    setValue: (val: boolean) => setValue(val),
    preventEventDefault: event => event?.preventDefault?.(),
  };
};
