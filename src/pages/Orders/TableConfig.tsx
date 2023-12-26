import { IRow } from "utils/table";

let colors = {
    pending: '#fc9a2e',
    delivered: '#4ce13f',
    cancelled: '#ef0606'
};

export const TableConfig = (rows: IRow[] = [], checkAll: () => void) => ({
    columns: [
        {
            title: '',
            key: '',
            template: () => <input type='checkbox' />,
            headerTemplate: () => <input type='checkbox' onClick={() => checkAll()} />
        },
        {
            title: 'Order ID',
            key: 'id',
            template: (row: IRow): JSX.Element => <span className="text-[#0b63f8]">{row.id}</span>
        },
        {
            title: 'Product',
            key: 'product'
        },
        {
            title: 'Date',
            key: 'date'
        },
        {
            title: 'Customer',
            key: 'customer'
        },
        {
            title: 'Status',
            key: 'status',
            template: (row: IRow): JSX.Element =>
                <span className="flex flex-row items-center gap-1">
                    <div
                        style={{ backgroundColor: colors[row.status as keyof typeof colors] }}
                        className={`rounded-full w-2 h-2`}
                    />
                    <p className="text-sm capitalize">{row.status}</p>
                </span>
        },
        {
            title: 'Amount',
            key: 'amount'
        },
    ],
    rows
}
)