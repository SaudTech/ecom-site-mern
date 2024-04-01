import Product from "@/interfaces/ProductInterface"

export default interface Cart extends Product {
  cartId: string;
  quantity: number;
  total: number;
}