import React from "react";
import "./globals.css";
import Image from "next/image";
import stars from "../../public/star.png";
import product_1 from "./assets/trending/trending.jpg";
import product_2 from "./assets/trending/trending2.jpg";
import product_3 from "./assets/trending/trending3.jpg";
import product_4 from "./assets/trending/trending4.jpg";
import product_5 from "./assets/trending/trending5.jpg";
import product_6 from "./assets/trending/trending6.jpg";
import product_7 from "./assets/trending/trending7.jpg";
import product_8 from "./assets/trending/trending8.jpg";
import product_9 from "./assets/trending/trending9.jpg";
import product_10 from "./assets/trending/trending10.jpg";
import product_11 from "./assets/trending/trending11.jpg";
import product_12 from "./assets/trending/trending12.jpg";
import product_13 from "./assets/trending/trending13.jpg";
import product_14 from "./assets/trending/trending14.jpg";
import Btncart from "./components/addCartBtn/btncart";

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
  { name: "Silver Rings", price: "5000", image: product_13 },
  { name: "Silver Rings", price: "5000", image: product_14 },
];

const page = () => {
  return (
    <div> 
      <section className="Products_boxes mb-20">
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
