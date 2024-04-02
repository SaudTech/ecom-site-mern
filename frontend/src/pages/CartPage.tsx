import React, { useContext, useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CartContext from "@/context/CartContext";
import { CiCircleMinus, CiCirclePlus, CiDiscount1 } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

type OrderSummary = {
  subtotal: number;
  shipping: number;
  discount: {
    name: string;
    discount: number;
  }[];
  roundOff: number;
  total: number;
};

const CartPage: React.FC = () => {
  const { cart, changeQty } = useContext(CartContext);
  const coupon = {
    code: "TEES25",
    discountPercent: 25,
  };
  // This is a placeholder for the user's first order
  const isFirstOrder: boolean = true;
  const [couponInput, setCouponInput] = useState("" as string);
  const [discountApplied, setDiscountApplied] = useState(false as boolean);
  const [orderSummary, setOrderSummary] = useState({
    subtotal: cart.reduce((acc, item) => acc + item.total, 0),
    shipping: 0,
    discount: [
      {
        name: "First Order",
        discount: 0,
      },
      {
        name: "Coupon",
        discount: 0,
      },
    ],
    total: cart.reduce((acc, item) => acc + item.total, 0),
  } as OrderSummary);

  useEffect(() => {
    if (isFirstOrder) {
      setOrderSummary({
        ...orderSummary,
        discount: [
          {
            name: "First Order",
            discount: orderSummary.subtotal * 0.1,
          },
          orderSummary.discount[1],
        ],
        total: orderSummary.total - orderSummary.subtotal * 0.1,
      });
    }
  }, []);

  const applyCoupon = () => {
    let discount = 0;
    if (couponInput === coupon.code) {
      discount =
        (cart.reduce((acc, item) => acc + item.total, 0) *
          coupon.discountPercent) /
        100;
      toast({
        title: "Coupon applied",
        description: `You saved ₹${discount} on your order`,
      });
    } else {
      toast({
        title: "Invalid coupon",
        description: "The coupon you entered is invalid",
        variant: "destructive",
      });
    }
    setOrderSummary({
      ...orderSummary,
      discount: [
        ...orderSummary.discount,
        {
          name: "Coupon",
          discount,
        },
      ],
      total: orderSummary.total - discount,
    });
  };

  const removeDiscount = () => {
    setOrderSummary({
      ...orderSummary,
      discount: [
        ...orderSummary.discount,
        {
          name: "Coupon",
          discount: 0,
        },
      ],
      total: orderSummary.total + orderSummary.discount[1].discount,
    });
    setDiscountApplied(false);
    toast({
      title: "Coupon removed",
      description: "The coupon has been removed from your order",
    });
  };

  return (
    <div className="max-w-5xl py-16 mx-auto flex flex-col gap-10 w-full h-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <h1 className="text-4xl">Your Cart</h1>
        <h5>
          Total ({cart.length} items):{" "}
          <span className="font-bold">
            ₹{cart.reduce((acc, item) => acc + item.total, 0)}
          </span>
        </h5>
      </div>
      <div className="flex flex-wrap">
        <div className="pr-4 w-3/5">
          <div className="flex w-full flex-col gap-2">
            {cart.map((item) => (
              <div
                key={item.cartId}
                className="flex items-center justify-between border border-gray-200 p-4 rounded-lg"
              >
                <div className="w-1/4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 object-cover"
                  />
                </div>
                <div className="w-9/12">
                  <div className="flex justify-between">
                    <h3 className="text-lg">{item.name}</h3>

                    <p className="text-lg font-bold">₹{item.total}</p>
                  </div>
                  <div className="flex items-end gap-2">
                    <p className="text-sm">₹{item.price}</p>
                    <p className="text-xs line-through text-gray-500">
                      ₹{item.price + 8}
                    </p>
                  </div>

                  <div className="flex justify-between items-center rounded-lg border mt-3">
                    <Button
                      className="bg-secondary w-24 text-black p-2 rounded-md"
                      onClick={() => changeQty(item.cartId, "minus")}
                    >
                      <CiCircleMinus size={20} />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      className="bg-secondary w-24 text-black p-2 rounded-md"
                      onClick={() => changeQty(item.cartId, "plus")}
                    >
                      <CiCirclePlus size={20} />
                    </Button>
                  </div>

                  {/* <p className="text-sm text-gray-500">Qty: {item.quantity}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {Object.entries(orderSummary).map(([key, value], index) => {
                if (key !== "discount") {
                  return (
                    <div key={index} className="flex justify-between">
                      <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                      <p>₹{value.toString()}</p>
                    </div>
                  );
                } else {
                  return orderSummary.discount.map((discount, innerIndex) => (
                    <div
                      key={innerIndex + discount.name}
                      className="flex justify-between"
                    >
                      <p>
                        {discount.name.charAt(0).toUpperCase() +
                          discount.name.slice(1)}
                      </p>
                      <p>₹{discount.discount}</p>
                    </div>
                  ));
                }
              })}
              <Button className="bg-black text-primary w-full mt-4">
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
          {!discountApplied ? (
            <div className="flex mt-4 w-full items-center space-x-2">
              <Input
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                type="text"
                className="w-full"
                width={"100%"}
                placeholder="Enter your promo code"
              />
              <Button type="submit" onClick={applyCoupon}>
                Apply
              </Button>
            </div>
          ) : (
            <div className="flex mt-4 w-full items-center space-x-2">
              <p className="text-green-500">Coupon applied</p>
              <Button type="submit" onClick={removeDiscount}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
