import { useState } from 'react';
import { DateRange, RangeKeyDict, Range } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DatePicker = ({
  date,
  setDate,
}: {
  date: Range[];
  setDate: React.Dispatch<React.SetStateAction<Range[]>>;
}): JSX.Element => {
  const [show, setShow] = useState(false);

  const { startDate, endDate = new Date() } = date[0] ?? [{}];

  return (
    <div className="relative flex flex-col">
      <div
        className="bg-white text-black text-sm cursor-pointer text-center flex flex-row justify-center items-center h-12 rounded-xl px-2"
        onClick={() => setShow(!show)}
      >
        {startDate?.toDateString()} - {endDate?.toDateString()}
      </div>

      {show && (
        <DateRange
          editableDateInputs
          onChange={(item: RangeKeyDict): void => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="absolute right-0 top-12"
        />
      )}
    </div>
  );
};

export default DatePicker;
