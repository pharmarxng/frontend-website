import { ReactNode } from "react";

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

export interface ITable {
    rows: never[] | IRow[];
    columns: never[] | IColumn[];
    showModal?: (content: ReactNode) => void;

};