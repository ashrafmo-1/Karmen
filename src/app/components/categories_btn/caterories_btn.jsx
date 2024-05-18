import Image from "next/image";
import Link from "next/link";
import React from "react";

const Caterories_btn = ({ path, photo, title }) => {
  return (
    <Link href={ path } className="catBtn flex items-center gap-4" >
      <Image src={ photo } width={50} alt="" />
      { title }
    </Link>
  );
};
export default Caterories_btn;