import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fromUkDate, toUkDate } from "../../Helpers/DateHelpers";

export default forwardRef((props, ref) => {
  const [value, setValue] = useState((props.value === "" || props.value === undefined) ? "" : fromUkDate(props.value));
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      getValue() {
        return toUkDate(value);
      }
    };
  });

  return <DatePicker
    ref={inputRef}
    selected={value}
    dateFormat="dd/MM/yyyy"
    onChange={date => setValue(new Date(date))}
    autoFocus
  />
});