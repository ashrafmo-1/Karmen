import stars from "../../../public/star.png";
import "../globals.css";
import Image from "next/image";
import product_1 from "../assets/home/home 1.jpeg";
import product_2 from "../assets/home/home 2.jpeg";
import product_3 from "../assets/home/home 3.jpg";
import product_4 from "../assets/home/home 4.jpeg";
import product_5 from "../assets/home/home 5.jpg";
import product_6 from "../assets/home/home 6.jpeg";
import product_7 from "../assets/home/home 7.jpg";
import product_8 from "../assets/home/home 8.jpeg";
import product_9 from "../assets/home/home 9.jpg";
import product_10 from "../assets/home/home 10.jpg";
import product_11 from "../assets/home/home 11.jpeg";
import product_12 from "../assets/home/home 12.jpeg";
import product_13 from "../assets/home/home 13.jpg";
import gold from "../assets/Gold Rings/Gold Rings 5.jpg";
import stacking from "../assets/stacking rings/stacking rings 3.jpg";
import gemstone from "../assets/gemstone rings/gemstone rings 7.jpg";
import Caterories_btn from "../components/categories_btn/caterories_btn";
import Link from "next/link";

const products = [
  { name: "Gold Rings", price: "1000", image: product_1 },
  { name: "Gold Rings", price: "5000", image: product_9 },
  { name: "Heart Necklaces", price: "7000", image: product_2 },
  { name: "small Hoop Earrings ", price: "5000", image: product_3 },
  { name: "Silver watch", price: "1000", image: product_4 },
  { name: "Gold Braceletes", price: "7000", image: product_5 },
  { name: "Gold Rings", price: "5000", image: product_6 },
  { name: "Gold Rings", price: "1000", image: product_7 },
  { name: "Gucci watch", price: "7000", image: product_8 },
  { name: "Gold Rings", price: "1000", image: product_10 },
  { name: "Silver Braceletes", price: "7000", image: product_11 },
  { name: "Gold watch", price: "5000", image: product_12 },
  { name: "Silver Rings", price: "1000", image: product_13 },
  { name: "Silver Rings", price: "7000", image: product_3 },
  { name: "Silver Braceletes", price: "5000", image: product_7 },
];

export default function Home() {
  return (
    <div className="page_content">
      <section className="btns_cat flex items-center gap-12 justify-center">
        <Caterories_btn path={"/silverEarrings"} photo={product_9} title={"silver Earrings"} />
        <Caterories_btn path={"/goldrings"} photo={gold} title={"Gold Rings"} />
        <Caterories_btn path={"/stackingrings"} photo={stacking} title={"silver Earrings"} />
        <Caterories_btn path={"/gemstonerings"} photo={gemstone} title={"gemstone rings"} />
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
              <p className="salary">{prod.price}</p>
              <Link href={"/"} className="cart">Add to Cart</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}