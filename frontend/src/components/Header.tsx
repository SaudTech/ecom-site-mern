import React, { useContext } from "react";
import { BsFillBagFill } from "react-icons/bs";
import CartContext from "@/context/CartContext.ts";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const boxStyle = {
  padding: "30px",
  width: "200px",
  border: "1px solid transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
};

const Header: React.FC = () => {
  const nav = useNavigate();
  const { cart } = useContext(CartContext);

  const links: { title: string; url: string }[] = [
    {
      title: "New",
      url: "/new",
    },
    {
      title: "Women",
      url: "/women",
    },
    {
      title: "Men",
      url: "/men",
    },
  ];

  return (
    <header className="w-full flex border-b text-primary-foreground border-black">
      <div className="h-full text-center w-2/4">
        <div
          onClick={() => nav("/")}
          className="uppercase cursor-pointer text-xl font-semibold bg-primary h-full"
          style={boxStyle}
        >
          t shop
        </div>
      </div>
      <div className="h-full text-center text-base font-extralight items-center w-2/4 md:flex hidden">
        {links.map((link, index) => (
          <div
            key={index}
            className="h-full cursor-pointer transition-all duration-300 hover:bg-accent-foreground hover:text-primary"
            style={{...boxStyle, borderRight: "1px solid black"}}
          >
            {link.title}
          </div>
        ))}
        <div
          className="flex gap-2 h-full"
          style={boxStyle}
        >
          <div className="flex gap-1 items-center cursor-pointer">
            <FaUserCircle size={20} />
            Log In
          </div>
          <Button onClick={() => nav('/cart')} className="relative cursor-pointer">
            <BsFillBagFill size={20} />
            <span className="text-[10px] pt-1 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-primary">
              {cart.length}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
