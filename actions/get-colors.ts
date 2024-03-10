const URL = `${process.env.NEXT_PUBLIC_API_AHADS_DASHBOARD_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getColors;
