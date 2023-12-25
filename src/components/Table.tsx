import { IRow, ITable, IColumn } from "utils/table";

const Table = ({ config }: { config: ITable }): JSX.Element => {
    const { columns = [], rows = [] } = config || {};

    return (
        <table className="bg-white w-full">
            <thead>
                <tr className="h-16 border-solid border-b bg-[#f7f7f9]">
                    {
                        columns.map((header: IColumn, id: number) =>
                            <th
                                className="text-black text-base p-2 text-left capitalize"
                                key={`header-${id}`}
                            >
                                {header.headerTemplate ? header.headerTemplate() : header.title}
                            </th>)
                    }
                </tr>
            </thead>

            <tbody>
                {rows && rows.length > 0 && (
                    <>
                        {rows.map((row: IRow, key: number) => (
                            <tr key={`row-${key}`} className="h-20 border-solid border-b">
                                {columns.map((column: IColumn, id: number) =>
                                    <td key={`cell-${id}`} className="text-black capitalize p-2 text-left text-light">
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
    )
};

export default Table;