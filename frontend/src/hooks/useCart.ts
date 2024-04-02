import { useToast } from "@/components/ui/use-toast";
import Cart from "@/interfaces/CartInterface";
import Product from "@/interfaces/ProductInterface";
import { useEffect, useState } from "react";

const useCart = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<Cart[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (product: Product, quantity: number = 1) => {
    if (product.availableStock < quantity) {
      toast({
        title: "Insufficient stock",
        description: `We currently don't have enough of this product in stock 😥`,
        variant: "destructive",
      });
      return;
    }

    const existingProduct = cart.find((c) => c.productId === product.productId);
    if (existingProduct) {
      setCart([
        ...cart.filter((c) => c.productId !== product.productId),
        { ...existingProduct, quantity: existingProduct.quantity + quantity },
      ]);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          cartId: Math.random().toString(),
          quantity: quantity,
          total: product.price * quantity,
        },
      ]);
    }
    toast({
      title: "Product added to cart",
      description: `${quantity} ${product.name} added to cart`,
    });
  };

  const removeItem = (cartId: string) =>
    setCart(cart.filter((c) => c.cartId !== cartId));

  const changeQty = (cartId: string, type: "plus" | "minus") => {
    setCart(
      cart.map((item): Cart => {
        if (item.cartId === cartId) {
          if (type === "plus") {
            let qty = item.quantity + 1;

            // Validate if the quantity is less than the available stock
            if (qty > item.availableStock) {
              toast({
                title: "Insufficient stock",
                description: `We currently don't have enough of this product in stock 😥`,
                variant: "destructive",
              });
              return item;
            }

            return { ...item, quantity: qty, total: Math.round(item.price * (qty)) };
          } else {
            if (item.quantity === 1) {
              removeItem(cartId); // Assuming you have a function to remove items
              return item; // Return unchanged for other items
            } else {
              let qty = item.quantity - 1;
              return { ...item, quantity: qty, total: Math.round(item.price * (qty)) };
            }
          }
        } else {
          return item; // Return unchanged for other items
        }
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return { cart, setCart, addToCart, removeItem, changeQty };
};

export { useCart };
