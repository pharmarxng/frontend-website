import { DateRange, RangeKeyDict, Range } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DatePicker = ({date, setDate}: {date: Range[],setDate: React.Dispatch<React.SetStateAction<Range[]>>}): JSX.Element => {
    return (
        <>
            <DateRange
                editableDateInputs
                onChange={(item: RangeKeyDict): void => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
            />
        </>
    )
}

export default DatePicker;