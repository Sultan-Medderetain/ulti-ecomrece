declare type Billboard = {
  label: string;
  id: string;
  imageUrl: string;
};

declare type Category = {
  id: string;
  name: string;
  billboard: Billboard;
};

declare type Size = {
  id: string;
  name: string;
  value: string;
};

declare type Color = {
  id: string;
  name: string;
  value: string;
};

declare type Image = {
  id: string;
  url: string;
};

declare type Product = {
  id: string;
  name: string;
  category: Category;
  price: string;
  isFeautured: boolean;
  size: Size;
  color: Color;
  images: Image[];
};
