export default interface Product {
  productId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  availableStock: number;
  isBestSeller?: boolean;
}
