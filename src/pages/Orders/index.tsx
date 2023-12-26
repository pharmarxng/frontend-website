import { PageWrapper, DatePicker, Table } from "components";
import { TableConfig } from "./TableConfig";
import { data } from "./static";
import { Range } from 'react-date-range';
import { useState } from 'react';


const Orders = (): JSX.Element => {
    
    const [date, setDate] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: undefined,
            key: 'selection'
        }
    ])

    //on date change reload paginated data

    function checkAll(): void {
        let elements = document.getElementsByTagName('input') ?? [];
        for (let i = 1; i < elements.length; i++) {
            elements[i].checked = elements[0].checked;
        }
    };

    return (
        <PageWrapper>
            <div className="flex-1 min-h-screen p-6 lg:p-12">
                <header className="flex flex-row justify-between mb-7 items-center">
                    <h2 className="text-2xl text-black font-bold">Orders</h2>
                    <DatePicker date={date} setDate={setDate} />
                </header>

                <Table config={TableConfig(data, checkAll)} />
            </div> 

        </PageWrapper>
    )
};

export default Orders;