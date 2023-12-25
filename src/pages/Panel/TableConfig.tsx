import { DeleteAdmin } from "components/ModalGroup/content";
import { EditIcon, DeleteIcon } from "assets/svg";
import { ReactNode } from "react";
import { IRow } from "utils/table";

let colors = {
    active: { bg: '#dcfbea', border: 'transparent', text: '#249f5d' },
    inactive: { bg: '#f7f7f9', border: '#e0e2e7', text: '#6f727a' }
};

export const TableConfig = (rows: IRow[] = [], showModal: (content: ReactNode) => void) => ({
    columns: [
        {
            title: 'Name',
            key: 'name',
            template: (row: IRow): JSX.Element => (
                <span className="flex flex-col">
                    <p className="text-base font-bold">{row.name}</p>
                    <p className="text-sm">{row.id}</p>
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
            template: (row: IRow): JSX.Element => {
                return (
                    <span className="flex flex-row gap-2">
                        <EditIcon
                            className="cursor-pointer"
                            onClick={() => { }}
                        />

                        <DeleteIcon
                            className="cursor-pointer"
                            onClick={() => showModal(<DeleteAdmin id={row.id}
                            />
                            )} />
                    </span>
                )
            }
        },
    ],
    rows
}
)