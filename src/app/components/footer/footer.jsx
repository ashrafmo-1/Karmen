import React from "react";

const sections = [
  { desc: "An accessories store offers" },
  { desc: "a wide range of items that" },
  { desc: "complement and enhance one's" },
  { desc: "appearance or lifestyle" },
];
const menu = [
  { desc: "Home" },
  { desc: "Necklaces" },
  { desc: "Braceletes" },
  { desc: "Rings" },
  { desc: "Earrings" },
  { desc: "Watches" },
];
const SUPPORT = [
  { desc: "Frequently Asked Qustion" },
  { desc: "Returns and refunds" },
  { desc: "CGV" },
  { desc: "Legal Notice" },
  { desc: "Track my order" },
];

const Footer = () => {
  return (
    <footer className="flex" style={{ backgroundColor: "#F5F4F2" }}>
      <div className="boxes flex justify-between w-10/12 py-10 m-auto flex-wrap gap-4">
        <ul>
          <h3 className="uppercase text-2xl mb-4 font-bold" style={{color: "var(--main_color)"}}>about the shop</h3>
          {sections.map((section, index) => (
            <li key={index}>{section.desc}</li>
          ))}
        </ul>
        <ul>
          <h3 className="uppercase text-2xl mb-4 font-bold" style={{color: "var(--main_color)"}}>menu</h3>
          {menu.map((menu, index) => (
            <li key={index}>{menu.desc}</li>
          ))}
        </ul>
        <ul>
          <h3 className="uppercase text-2xl mb-4 font-bold" style={{color: "var(--main_color)"}}>SUPPORT</h3>
          {SUPPORT.map((SUPPORT, index) => (
            <li key={index}>{SUPPORT.desc}</li>
          ))}
        </ul>
        <ul>
          <h3 className="uppercase text-2xl mb-4 font-bold" style={{color: "var(--main_color)"}}>REACHABLE 24/7</h3>
          <li>
            A question? we can be <br /> reached by email 24/7<br /> do not hesitate to send <br />
            us a message for any request
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
