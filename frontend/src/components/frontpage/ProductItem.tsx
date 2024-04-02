import React, { useContext } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Product from "@/interfaces/ProductInterface";
import { IoBagAdd } from "react-icons/io5";
import { Button } from "../ui/button";
import CartContext from "@/context/CartContext.ts";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <Card className="w-[350px] min-w-[200px] mx-auto shadow-none">
      <a target="_blank" href={`product/${encodeURIComponent(product.name)}`}>
        <CardContent className="relative p-0 overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full aspect-square h-[400px] hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <div className="absolute top-1 left-0">
            {product.isBestSeller && (
              <span className="bg-primary-foreground text-primary px-3 py-1 rounded-md">
                Best Seller
              </span>
            )}
          </div>
        </CardContent>
      </a>
      <CardFooter className="py-4 flex justify-between">
        <span>{product.name}</span>
        <div className="flex gap-2 items-center">
          <span>₹{product.price}</span>
          <Button variant={"outline"} onClick={() => addToCart(product)}>
            <IoBagAdd size={20} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
