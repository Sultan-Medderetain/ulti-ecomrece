import NoResult from "./ui/NoResult";
import ProductCard from "./ui/ProductCard";

interface ProductListProps {
  title: string;
  data: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ data, title }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {data.length === 0 && <NoResult title="No products available" />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
