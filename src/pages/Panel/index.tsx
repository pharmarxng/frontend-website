import { PageWrapper } from "../../components";
import { TableConfig as config, IRow, IColumn } from "./TableConfig";
import { data } from "./static";
import { PlusIcon } from "../../assets/svg";


const Panel = (): JSX.Element => {
    const { columns = [], rows = [] } = config(data) || {};

    return (
        <PageWrapper>
            <div className="flex-1 min-h-screen p-6 lg:p-12">
                <header className="flex flex-row justify-between mb-7 items-center">
                    <h2 className="text-2xl text-black font-bold">Administrative Panel</h2>
                    <button className="capitalize flex flex-row items-center gap-3 bg-white br-2 text-black font-bold p-4 text-base rounded-xl"><PlusIcon /> Add new user</button>
                </header>

                <table className="bg-white w-full">
                    <thead>
                        <tr className="h-16 border-solid border-b bg-[#f7f7f9]">
                            {
                                columns.map((header: IColumn, id: number) =>
                                    <th
                                        className="text-black text-base p-2 text-left capitalize"
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
            </div>

        </PageWrapper>
    )
};

export default Panel;