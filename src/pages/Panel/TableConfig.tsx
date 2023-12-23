export interface IRow {
    name: string;
    id: number;
    role: string;
    status: string;
};

export interface IColumn {
    title: string;
    key: string;
    template?: any;
};

let colors = {
    active: { bg: '#dcfbea', border: 'transparent', text: '#249f5d' },
    inactive: { bg: '#f7f7f9', border: '#e0e2e7', text: '#6f727a' }
};

export const TableConfig = (rows: never[] | IRow[] = []) => ({
    columns: [
        {
            title: 'Name',
            key: 'name',
            template: (row: IRow): JSX.Element => (
                <span className="flex flex-col">
                    <p className="text-lg font-bold">{row.name}</p>
                    <p className="text-base">{row.id}</p>
                </span>
            )
        },
        {
            title: 'role',
            key: 'role'
        },
        {
            title: 'Status',
            key: 'status',
            template: (row: IRow): JSX.Element =>
                <span
                    className="border p-3 rounded-3xl w-16"
                    style={{
                        color: colors[row.status as keyof typeof colors].text,
                        background: colors[row.status as keyof typeof colors].bg,
                        borderColor: colors[row.status as keyof typeof colors].border,
                    }}
                >
                    {row.status}
                </span>
        },
        {
            title: 'Actions',
            key: 'actions',
            template: (row: IRow): JSX.Element => (
                <span className="flex flex-row gap-2">
                    <p onClick={() => { }}>E</p>
                    <p onClick={() => { }}>D</p>
                </span>
            )
        },
    ],
    rows
}
)