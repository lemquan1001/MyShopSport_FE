export interface Product {
  id: number;
  image: string | null;
  price: number;
  productCode: string;
  productName: string;
  description: string;
  brand: string;
  category: {
    id: number;
    categoryCode: string;
    categoryName: string;
  };
  //categoryId: number;
  status: string;
  //   isActive: number;
  //   image_overlay: string | null;
  //   createdDate: string | null;
  //   updatedDate: string | null;
  //   createdBy: string | null;
  //   updatedBy: string | null;
}
