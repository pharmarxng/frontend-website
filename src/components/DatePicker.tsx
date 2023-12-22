// import { DateRange, RangeKeyDict, Range } from 'react-date-range';

const DatePicker = (): JSX.Element => {
    return (
        <>
            {/* pending due to library issue */}
            {/* <DateRange
                editableDateInputs
                onChange={(item: RangeKeyDict): void => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
            /> */}
            <p>Date ranger</p>
        </>
    )
}

export default DatePicker;