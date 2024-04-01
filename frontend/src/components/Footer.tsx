import React from "react";
import { FaInstagram, FaStrikethrough, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiExpress, SiMui, SiNodedotjs, SiReact, SiReactrouter, SiTailwindcss, SiUpwork } from "react-icons/si";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Shop",
      links: [
        {
          name: "New",
          url: "https://youtube.com",
        },
        {
          name: "Women",
          url: "https://youtube.com",
        },
        {
          name: "Men",
          url: "https://youtube.com",
        },
      ],
    },
    {
      title: "Our store",
      links: [
        {
          name: "Store Policy",
          url: "https://youtube.com",
        },
        {
          name: "Shipping & Returns",
          url: "https://youtube.com",
        },
        {
          name: "Payment Methods",
          url: "https://youtube.com",
        },
      ],
    },
    {
      title: "Terms & Conditions",
      links: [
        {
          name: "About Us",
          url: "https://youtube.com",
        },
        {
          name: "Subcribe",
          url: "https://youtube.com",
        },
        {
          name: "FAQ",
          url: "https://youtube.com",
        },
      ],
    },
  ];
  return (
    <footer className="w-full">
      <div className="flex h-[200px]">
        <div className="w-[30%] h-full bg-black text-white grid place-items-center">
          <div className="flex flex-col items-start">
            <h4 className="font-bold">T SHOP</h4>
            <a href="mail:help@tshop.com" className="font-serif">help@tshop.com</a>
            <a href="tel:1234567890" className="font-serif">123-456-7890</a>
          </div>
        </div>
        <div className="w-[70%] border-black border-t border-solid text-center flex justify-center gap-24 items-center">
          {footerLinks.map((link) => (
            <div key={link.title}>
              <p className="font-medium">{link.title}</p>
              <ol>
                {
                  link.links.map(innerLink => (
                    <li key={innerLink.name}>
                      <a href={innerLink.url}>{innerLink.name}</a>
                    </li>
                  ))
                }
              </ol>
            </div>

          ))}
        </div>
      </div>
      <div className="flex border-black border-t border-solid">
        <div className="w-[30%] py-3 h-full flex gap-4 justify-center items-center">
          <SiUpwork />
          <SiExpress />
          <SiNodedotjs />
          <SiReactrouter />
          <SiReact />
          <SiTailwindcss />
        </div>
        <div className="w-[70%] py-3 bg-primary text-primary-foreground text-xs text-center flex justify-center gap-24 items-center">
        © T Shop 2024. Created with MERN stack
        </div>
      </div>
    </footer>
  );
};

export default Footer;
