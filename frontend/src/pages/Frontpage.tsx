import React from "react";
import "@/components/frontpage/Frontpage.css";
import ProductItem from "@/components/frontpage/ProductItem";
import fake_products from "@/components/frontpage/Fake_Data_Products";
import { Button } from "@/components/ui/button";
import { SiSparkfun } from "react-icons/si";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Frontpage: React.FC = () => {
  const categories = [
    {
      name: "Shop women",
      backgroundImage:
        "https://images.unsplash.com/photo-1556304044-0699e31c6a34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tZW4sZmFzaGlvbnx8fHx8fDE3MTE4OTYxNDI&ixlib=rb-4.0.3&q=80&w=1080",
      url: "https://youtube.com",
    },
    {
      name: "New",
      backgroundImage:
        "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dHNoaXJ0fHx8fHx8MTcxMTg4ODA1NQ&ixlib=rb-4.0.3&q=80&w=1080",
      url: "https://youtube.com",
    },
    {
      name: "Shop Men",
      backgroundImage:
        "https://images.unsplash.com/photo-1489370603040-dc6c28a1d37a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGJyYW5kfHx8fHx8MTcxMTg4Nzk1Mw&ixlib=rb-4.0.3&q=80&w=1080",
      url: "https://youtube.com",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-10">
      <section className="w-full text-center h-40 grid place-items-center">
        <div>
          <h1 className="text-6xl font-black text-center">T SHOP</h1>
          <p className="text-center bg-primary text-primary-foreground tracking-widest px-10 mt-6">
            There’s One for Everyone
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category) => (
            <a key={category.name} href={category.url}>
              <div
                className="text-center relative hover-effect z-10"
                style={{
                  background: `url(${category.backgroundImage})`,
                  minHeight: "450px",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <div className="name__text z-20 absolute bottom-10 left-1/2 -translate-x-1/2 text-xl text-primary-foreground">
                  {category.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <div className="w-full text-center">
          <h1 className="text-3xl font-bold">New Drops</h1>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
          {fake_products.map((product) => (
            <ProductItem key={product.name} product={product} />
          ))}
        </div>
      </section>

      <div className="w-full text-center">
        <Button size={"lg"} className="scale-150">
          View All
        </Button>
      </div>

      <section>
        <div className="flex flex-wrap">
          <div className="w-3/5 grid place-items-center bg-gradient-to-t from-primary to-transparent">
            <div className="text-center flex flex-col gap-4">
              <SiSparkfun size={40} className="mx-auto" />
              <h5 className="text-2xl">SALE IS ON!</h5>
              <h1 className="text-8xl font-black">25% OFF</h1>
              <p className="text-lg">
                25% off sitewide using TEES25 at checkout
              </p>
            </div>
          </div>
          <div className="w-2/5">
            <img
              src="https://static.wixstatic.com/media/c837a6_2749f733af59407699862291aaef4b44~mv2.jpg/v1/fill/w_745,h_888,al_c,q_85,enc_auto/c837a6_2749f733af59407699862291aaef4b44~mv2.jpg"
              alt="Image"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center gap-20 text-3xl">
          <FaLongArrowAltRight size={50} />
          <span>GET 10% OFF YOUR FIRST ORDER!</span>
          <FaLongArrowAltLeft size={50} />
        </div>
      </section>
    </div>
  );
};

export default Frontpage;
