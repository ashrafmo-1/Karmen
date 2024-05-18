import React from "react";
import "../globals.css";
import Image from "next/image";
import stars from "../../../public/star.png";
import Caterories_btn from "../components/categories_btn/caterories_btn";
import product_1 from "../assets/necklaces/Necklaces.jpg";
import product_2 from "../assets/necklaces/Necklaces2.jpg";
import product_3 from "../assets/necklaces/Necklaces3.jpg";
import product_4 from "../assets/necklaces/Necklaces4.jpg";
import product_5 from "../assets/necklaces/Necklaces5.jpg";
import product_6 from "../assets/necklaces/Necklaces6.jpg";
import product_7 from "../assets/necklaces/Necklaces7.jpg";
import product_8 from "../assets/necklaces/Necklaces8.jpg";
import product_9 from "../assets/necklaces/Necklaces9.jpg";
import product_10 from "../assets/necklaces/Necklaces10.jpg";
import product_11 from "../assets/necklaces/Necklaces11.jpg";
import product_12 from "../assets/necklaces/Necklaces12.jpg";
import product_13 from "../assets/necklaces/Necklaces13.jpg";
import product_14 from "../assets/necklaces/Necklaces14.jpg";
import gold from "../assets/Gold Rings/Gold Rings 5.jpg";
import stacking from "../assets/stacking rings/stacking rings 3.jpg";
import gemstone from "../assets/gemstone rings/gemstone rings 7.jpg";
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
  { name: "Silver Necklaces", price: "1000", image: product_10 },
  { name: "Silver Necklaces", price: "7000", image: product_11 },
  { name: "Silver Necklaces", price: "5000", image: product_12 },
  { name: "Silver Necklaces", price: "1000", image: product_13 },
  { name: "Silver Necklaces", price: "7000", image: product_14 },
  { name: "Silver Necklaces", price: "5000", image: product_1 },
];

const page = () => {
  return (
    <div>
      <section className="btns_cat flex items-center gap-12 justify-center">
        <Caterories_btn path={"/silvernecklaces"} photo={product_9} title={"silver Necklaces"} />
        <Caterories_btn path={"/goldnecklaces"} photo={gold} title={"Gold Necklaces"} />
        <Caterories_btn path={"/necklacesset"} photo={stacking} title={"silver set"} />
        <Caterories_btn path={"/"} photo={gemstone} title={"gemstone pearl"} />
      </section>
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
