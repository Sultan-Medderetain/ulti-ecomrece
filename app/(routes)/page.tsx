import getBillboard from "@/actions/get-billboard.action";
import getProducts from "@/actions/get-products.action";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/layouts/Container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("9c50351c-f85d-4a96-be3e-9e047d42e9e8");

  return (
    <Container>
      <div className="space-y-2 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" data={products} />
      </div>
    </Container>
  );
};

export default HomePage;
