import Product from "@/interfaces/ProductInterface";

const fake_products: Product[] = [
  {
    productId: Math.random().toString(),
    name: "Smiling Shirt",
    description: "Our Smiling Shirt is a perfect blend of comfort and style. Made from high-quality materials, it ensures a soft and comfortable fit. The unique smiling design adds a touch of joy to your everyday wardrobe. With a stock limited to just 6 pieces, grab yours before it's gone!",
    price: 10,
    imageUrl:
      "https://static.wixstatic.com/media/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg/v1/fill/w_1008,h_1244,al_c,q_85,usm_0.66_1.00_0.01/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg",
    availableStock: 6,
  },
  {
    productId: Math.random().toString(),
    name: "Heart Shirt",
    description: "Our Heart Shirt is a perfect blend of comfort and style. Made from high-quality materials, it ensures a soft and comfortable fit. The unique heart design adds a touch of love to your everyday wardrobe. With a stock limited to just 3 pieces, grab yours before it's gone!",
    price: 12,
    imageUrl:
      "https://static.wixstatic.com/media/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpg",
    availableStock: 3,
  },
  {
    productId: Math.random().toString(),
    name: "Gradient Shirt",
    description: "Our Gradient Shirt is a perfect blend of comfort and style. Made from high-quality materials, it ensures a soft and comfortable fit. The unique gradient design adds a touch of elegance to your everyday wardrobe. With a stock limited to just 10 pieces, grab yours before it's gone!",
    price: 10,
    imageUrl:
      "https://static.wixstatic.com/media/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpg",
    availableStock: 10,
  },
  {
    productId: Math.random().toString(),
    name: '"yeah well, whatever." Shirt',
    description: "Our \"yeah well, whatever.\" Shirt is a perfect blend of comfort and style. Made from high-quality materials, it ensures a soft and comfortable fit. The unique design adds a touch of attitude to your everyday wardrobe. With a stock limited to just 1 piece, grab yours before it's gone!",
    price: 15,
    imageUrl:
      "https://static.wixstatic.com/media/c837a6_2308b08ad22c4e4aa919906536a1b5d1~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_2308b08ad22c4e4aa919906536a1b5d1~mv2.jpg",
    availableStock: 1,
  },
  {
    productId: Math.random().toString(),
    name: "Coconut Shirt",
    description: "Our Coconut Shirt is a perfect blend of comfort and style. Made from high-quality materials, it ensures a soft and comfortable fit. The unique coconut design adds a touch of tropical vibes to your everyday wardrobe. With a stock limited to just 10 pieces, grab yours before it's gone!",
    price: 13,
    imageUrl:
      "https://static.wixstatic.com/media/c837a6_944cb31b5c7d4659b7a0c6612b4df573~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_944cb31b5c7d4659b7a0c6612b4df573~mv2.jpg",
    availableStock: 10,
  },
  {
    productId: Math.random().toString(),
    name: "Beach Shirt",
    description: "Our Beach Shirt is a perfect blend of comfort and style. Made from high-quality materials, it ensures a soft and comfortable fit. The unique beach design adds a touch of summer vibes to your everyday wardrobe. With a stock limited to just 5 pieces, grab yours before it's gone!",
    price: 15,
    imageUrl:
      "https://static.wixstatic.com/media/c837a6_fd300737ecf3406b83fd9be5d67463e4~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_fd300737ecf3406b83fd9be5d67463e4~mv2.jpg",
    availableStock: 0,
    isBestSeller: true,
  },
];

export default fake_products;
