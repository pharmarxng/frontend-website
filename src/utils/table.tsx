import { ReactNode } from "react";

export interface IRow {
    name?: string;
    role?: string;
    id?: string;
    product?: string;
    date?: string;
    customer?: string;
    status?: string;
    amount?: string;
};

export interface IColumn {
    title: string;
    key: string;
    template?: (row: IRow) => ReactNode;
    headerTemplate?: any;
};

export interface ITable {
    rows: IRow[];
    columns: IColumn[];
    showModal?: (content: ReactNode) => void;
    checkAll?: () => void;
};