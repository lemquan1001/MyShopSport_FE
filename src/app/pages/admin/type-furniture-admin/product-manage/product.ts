export interface Product {
  id: number;
  image: string | null;
  price: number;
  productCode: string;
  productName: string;
  description: string;
  brand: {
    id: number;
    brandName: string;
    brandCode: string;
    description: string;
  };
  category: {
    id: number;
    categoryCode: string;
    categoryName: string;
  };
  status: string;
}
