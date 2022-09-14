import { Table, Popconfirm, Button } from 'antd';

const ProductList: React.FC<{
  loading: boolean;
  products: { name: string }[];
  onDelete: (id: number) => void;
}> = ({ loading, onDelete, products }) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text: string, record: any) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return (
    <Table
      rowKey="id"
      loading={loading}
      dataSource={products}
      columns={columns}
    />
  );
};

export default ProductList;
