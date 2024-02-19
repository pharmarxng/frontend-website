import { ReactNode } from 'react';

export interface IRow {
  name?: string;
  role?: string;
  id?: string;
  product?: string;
  date?: string;
  customer?: string;
  status?: string;
  amount?: string;
  orderId?: string;
  total?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface IColumn {
  title: string;
  key: string;
  template?: (row: IRow) => ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headerTemplate?: any;
}

export interface ITable {
  rows: IRow[];
  columns: IColumn[];
  showModal?: (content: ReactNode) => void;
  checkAll?: () => void;
}
