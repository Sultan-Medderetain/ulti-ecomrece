import getProduct from "@/actions/get-product.action";
import getProducts from "@/actions/get-products.action";
import Gallery from "@/components/Gallery";
import Info from "@/components/Info";
import ProductList from "@/components/ProductList";
import Container from "@/components/layouts/Container";

export const revalidate = 0;

const SingleProductPage = async ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  console.log(suggestedProducts);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList data={suggestedProducts} title="Related Products" />
        </div>
      </Container>
    </div>
  );
};

export default SingleProductPage;
