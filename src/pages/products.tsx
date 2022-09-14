import { useModel } from 'umi';
import ProductList from '@/components/ProductList';

const Products = () => {
  const { dataSource, reload, deleteProducts, loading } =
    useModel('useProductList');
  return (
    <div>
      <a onClick={() => reload()}>reload</a>
      <ProductList
        loading={loading}
        onDelete={deleteProducts}
        products={dataSource}
      />
    </div>
  );
};

export default Products;
