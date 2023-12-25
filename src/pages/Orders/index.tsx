import { PageWrapper, DatePicker } from "components";
import { TableConfig as config, IRow, IColumn } from "./TableConfig";
import { data } from "./static";
import { Range } from 'react-date-range';
import { useState } from 'react';


const Orders = (): JSX.Element => {
    const { columns = [], rows = [] } = config(data) || {};

    const [date, setDate] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: undefined,
            key: 'selection'
        }
    ])

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

                <table className="bg-white w-full ">
                    <thead>
                        <tr className="h-20 border-solid border-b">
                            <th className="p-2">
                                <input type="checkbox" className="bg-white w-6 h-6" onClick={() => checkAll()} />
                            </th>
                            {
                                columns.map((header: IColumn, id: number) =>
                                    <th
                                        className="text-black text-base p-2 text-left"
                                        key={`header-${id}`}
                                    >
                                        {header.title}
                                    </th>)
                            }
                        </tr>
                    </thead>

                    <tbody>
                        {rows && rows.length > 0 && (
                            <>
                                {rows.map((row: IRow, key: number) => (
                                    <tr key={`row-${key}`} className="h-20 border-solid border-b">
                                        <td className="p-2 text-center">
                                            <input type="checkbox" className="bg-white w-6 h-6" />
                                        </td>
                                        {columns.map((column: IColumn, id: number) =>
                                            <td key={`cell-${id}`} className="text-black p-2 text-left text-light">
                                                {column.template
                                                    ? column.template(row)
                                                    : row[column.key as keyof typeof row]
                                                }
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </>
                        )}
                    </tbody>
                </table>
            </div>

        </PageWrapper>
    )
};

export default Orders;