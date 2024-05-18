import Link from 'next/link'
import React from 'react'

const Btncart = () => {
  return (
    <Link href={"/products_info"} className="cart">Add to Cart</Link>
  )
}

export default Btncart