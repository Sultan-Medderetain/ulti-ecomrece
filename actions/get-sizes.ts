const URL = `${process.env.NEXT_PUBLIC_API_AHADS_DASHBOARD_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getSizes;
