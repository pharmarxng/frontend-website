import { IRow } from 'utils/table';

const colors = {
  ongoing: '#fc9a2e',
  paid: '#3c78e0',
  completed: '#4ce13f',
  cancelled: '#ef0606',
};

export const TableConfig = (rows: IRow[] = [], checkAll: () => void) => ({
  columns: [
    {
      title: '',
      key: '',
      template: () => <input type="checkbox" />,
      headerTemplate: () => (
        <input type="checkbox" onClick={() => checkAll()} />
      ),
    },
    {
      title: 'Order ID',
      key: 'orderId',
      template: (row: IRow): JSX.Element => (
        <span className="text-[#0b63f8]">#{row.orderId}</span>
      ),
    },
    {
      title: 'Products',
      key: 'product',
    },
    {
      title: 'Date',
      key: 'createdAt',
    },
    {
      title: 'Customer',
      key: 'customer',
    },
    {
      title: 'Status',
      key: 'status',
      template: (row: IRow): JSX.Element => (
        <span className="flex flex-row items-center gap-1">
          <div
            style={{
              backgroundColor: colors[row.status as keyof typeof colors],
            }}
            className={`rounded-full w-2 h-2`}
          />
          <p className="text-sm capitalize">{row.status}</p>
        </span>
      ),
    },
    {
      title: 'Amount',
      key: 'total',
      template: (row: IRow): JSX.Element => (
        <span className="">
          &#x20A6;
          {row.total!.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      ),
    },
  ],
  rows,
});
