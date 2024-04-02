import React, { useContext } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useNavigate, useParams } from "react-router-dom";
import fake_products from "@/components/frontpage/Fake_Data_Products";
import { Button } from "@/components/ui/button";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Product from "@/interfaces/ProductInterface";
import { useToast } from "@/components/ui/use-toast";
import CartContext from "@/context/CartContext.ts";

const ProductPage: React.FC = () => {
  const { toast } = useToast();
  const nav = useNavigate();
  const { addToCart } = useContext(CartContext);

  const { productName } = useParams<{ productName: string }>();
  const product: Product | undefined = fake_products.find(
    (product) => product.name === productName
  );
  const [quantity, setQuantity] = React.useState(1);

  const changeQty = (action: "plus" | "minus") => {
    if (!product || !product.availableStock)
      return console.error("Product not found or available stock not found");

    if (action === "plus") {
      if (quantity < product?.availableStock) {
        setQuantity(quantity + 1);
      } else {
        toast({
          title: "Out of stock",
          description: `We only have ${product.availableStock} left in stock 😥`,
          variant: "destructive",
        });
      }
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const handleAddToCart = () => {
    if (!product) return toast({ title: "Product not found" });
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name} added to cart 🎉`,
    });
  };

  const buyNow = () => {
    if (!product) return toast({ title: "Product not found" });
    addToCart(product, quantity);
    nav("/cart");
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-5xl py-16 mx-auto flex flex-col gap-10 w-full h-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{productName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="flex">
        <div className="w-2/4">
          <img
            src={product.imageUrl}
            className="max-h-[600px] border border-black rounded-md"
          />
        </div>
        <div className="w-2/4 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p>{product.description}</p>
          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>

          <div className="flex justify-between items-center rounded-lg border border-primary-foreground">
            <Button
              className="bg-secondary w-24 text-black p-2 rounded-md"
              onClick={() => changeQty("minus")}
            >
              <CiCircleMinus size={20} />
            </Button>
            <span>{quantity}</span>
            <Button
              className="bg-secondary w-24 text-black p-2 rounded-md"
              onClick={() => changeQty("plus")}
            >
              <CiCirclePlus size={20} />
            </Button>
          </div>
          <Button
            onClick={handleAddToCart}
            className="bg-black text-white hover:bg-black hover:text-white p-2 rounded-md"
          >
            Add to cart
          </Button>
          <Button className="p-2 rounded-md" onClick={buyNow}>Buy Now</Button>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
