"use client"
import React, {useState} from "react";
import arrow from "/public/arrow.png";
import geears from "/public/mechanism-gears.png"
import Image from "next/image";
import Link from "next/link";

const Catigory_controller = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="catigory_controller h-20 w-11/12 m-auto flex justify-between items-center" id={open ? "open": ""}>
      <button className="btnCat flex justify-between items-center px-2 relative">
        <span>All Categories</span>
        <Image src={arrow} width={15} alt="" />
        <div className="categories flex absolute bg-slate-500 w-full left-0">
          <Link className="text-start bg-slate-800 p-2 text-white" href={"/"}>
            all
          </Link>
          <Link className="text-start bg-slate-800 p-2 text-white" href={"/"}>
            Rings
          </Link>
          <Link className="text-start bg-slate-800 p-2 text-white" href={"/"}>
            Earings
          </Link>
          <Link className="text-start bg-slate-800 p-2 text-white" href={"/"}>
            Earings
          </Link>
        </div>
      </button>
      <div className="links flex gap-10" style={{ fontSize: "20px" }}>
        <Link href={"/"}>Trending</Link>
        <Link href={"/rings"}>Rings</Link>
        <Link href={"/necklaces"}>Necklaces</Link>
        <Link href={"/watches"}>Watches</Link>
        <Link href={"/"}>Earrings</Link>
        <Link href={"/"}>Braceletes</Link>
        <Link href={"/"}>Anklet</Link>
        <Link href={"/"}>Nos raings</Link>
      </div>
      <div className="setting p-2" style={{ display: "none" }} onClick={handleOpen}>
        <Image src={geears} width={25} alt="geears" />
      </div>
    </div>
  );
};

export default Catigory_controller;
