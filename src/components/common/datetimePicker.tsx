import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function CustomDateTimePicker({value,onChange}:any) {

  return (
    <div className="mt-3">
      <DateTimePicker className="w-full rounded-md" onChange={onChange} value={value} />
    </div>
  );
}

export default CustomDateTimePicker;