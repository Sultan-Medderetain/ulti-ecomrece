const URL = `${process.env.NEXT_PUBLIC_API_AHADS_DASHBOARD_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;
