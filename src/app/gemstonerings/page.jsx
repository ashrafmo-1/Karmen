import React from "react";
import "../globals.css";
import Image from "next/image";
import stars from "../../../public/star.png";
import product_1 from "../assets/gemstone rings/gemstone rings 1.jpg";
import product_2 from "../assets/gemstone rings/gemstone rings 2.jpg";
import product_3 from "../assets/gemstone rings/gemstone rings 3.jpg";
import product_4 from "../assets/gemstone rings/gemstone rings 4.jpg";
import product_5 from "../assets/gemstone rings/gemstone rings 5.jpg";
import product_6 from "../assets/gemstone rings/gemstone rings 6.jpg";
import product_7 from "../assets/gemstone rings/gemstone rings 7.jpg";
import product_8 from "../assets/gemstone rings/gemstone rings 8.jpg";
import product_9 from "../assets/gemstone rings/gemstone rings 9.jpg";
import product_10 from "../assets/gemstone rings/gemstone rings 10.jpg";
import product_11 from "../assets/gemstone rings/gemstone rings 11.jpg";
import product_12 from "../assets/gemstone rings/gemstone rings 12.jpg";
import Btncart from "../components/addCartBtn/btncart";

const products = [
  { name: "Silver Rings", price: "1000", image: product_1 },
  { name: "Silver Rings ", price: "5000", image: product_2 },
  { name: "Silver Rings", price: "7000", image: product_3 },
  { name: "Silver Rings", price: "1000", image: product_4 },
  { name: "Silver Rings", price: "7000", image: product_5 },
  { name: "Silver Rings", price: "7000", image: product_6 },
  { name: "Silver Rings", price: "1000", image: product_7 },
  { name: "Silver Rings", price: "7000", image: product_8 },
  { name: "Silver Rings", price: "5000", image: product_9 },
  { name: "Silver Rings", price: "5000", image: product_10 },
  { name: "Silver Rings", price: "5000", image: product_11 },
  { name: "Silver Rings", price: "5000", image: product_12 },
];

const page = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Silver Rings</h2>
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
              <p className="salary">{prod.price}</p>
                <Btncart />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
