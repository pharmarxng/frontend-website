import { PageWrapper } from "../../components";
import { TableConfig as config, IRow, IColumn } from "./TableConfig";
import { data } from "./static";

const Orders = (): JSX.Element => {
    const { columns = [], rows = [] } = config(data) || {};

    function checkAll(): void {
        let elements = document.getElementsByTagName('input') ?? [];
        elements[0].checked = !elements[0].checked;
        for (let i = 0; i < elements.length; i++) {
            elements[i].checked = !elements[i].checked;
        }
    };

    return (
        <PageWrapper>
            <div className="flex-1 min-h-screen p-12">
                <header className="flex flex-row justify-between mb-7">
                    <h2 className="text-2xl text-black font-bold">Orders</h2>
                    <div>Dropdown</div>
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