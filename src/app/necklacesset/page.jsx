import React from "react";
import "../globals.css";
import Image from "next/image";
import stars from "../../../public/star.png";

import product_1 from "../assets/necklacesset/necklacesset.jpg";
import product_2 from "../assets/necklacesset/necklacesset2.jpg";
import product_3 from "../assets/necklacesset/necklacesset3.jpg";
import product_4 from "../assets/necklacesset/necklacesset4.jpg";
import product_5 from "../assets/necklacesset/necklacesset5.jpg";
import product_6 from "../assets/necklacesset/necklacesset6.jpg";
import product_7 from "../assets/necklacesset/necklacesset7.jpg";
import product_8 from "../assets/necklacesset/necklacesset8.jpg";
import product_9 from "../assets/necklacesset/necklacesset9.jpg";
import product_10 from "../assets/necklacesset/necklacesset10.jpg";
import Link from "next/link";


const products = [
  { name: "Silver Necklaces", price: "1000", image: product_1 },
  { name: "Silver Necklaces", price: "7000", image: product_2 },
  { name: "Silver Necklaces ", price: "5000", image: product_3 },
  { name: "Silver Necklaces", price: "1000", image: product_4 },
  { name: "Silver Necklaces", price: "7000", image: product_5 },
  { name: "Silver Necklaces", price: "5000", image: product_6 },
  { name: "Silver Necklaces", price: "1000", image: product_7 },
  { name: "Silver Necklaces", price: "7000", image: product_8 },
  { name: "Silver Necklaces", price: "5000", image: product_9 },
  { name: "Silver Necklaces", price: "5000", image: product_10 },
];

const page = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Necklaces set</h2>
      <section className="Products_boxes my-20">
        {products.map((prod) => (
          <div className="Productbox">
            <Image className="product_pic" src={prod.image} alt="" />
            <div className="info p-4">
              <h2 className="product_title">{prod.name}</h2>
              <div className="rate flex gap-1">
                <Image src={stars} width={20} alt="" />
                <Image src={stars} width={20} alt="" />
                <Image src={stars} width={20} alt="" />
                <Image src={stars} width={20} alt="" />
              </div>
              <p className="salary py-1">{prod.price}</p>
              <Link href={"/"} className="cart">Add to Cart</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;