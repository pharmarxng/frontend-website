export interface IRow {
    id: string;
    product: string;
    date: string;
    customer: string;
    status: string;
    amount: string;
};

export interface IColumn {
    title: string;
    key: string;
    template?: any;
};

let colors = {
    pending: '#fc9a2e',
    delivered: '#4ce13f',
    cancelled: '#ef0606'
};

export const TableConfig = (rows: never[] | IRow[] = []) => ({
    columns: [
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
                    <p className="text-base capitalize">{row.status}</p>
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