import React from "react";
import NavgationBar from "./components/nav/Nav";
import Footer from "./components/footer/footer";
import Filter from "./components/filter/Filter";
import "./globals.css"

import Catigory_controller from "./components/catigory_controller/catigory_controller";

export const metadata = {
  title: "Karmen",
  description: "technical exam rmoz tecno",
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavgationBar />
        <div className="page_content">
          <div style={{ background: "#ce96f9" }}>
            <Catigory_controller />
          </div>
          <section className="products_page_content flex justify-between gap-2" style={{ width: "90%", margin: "auto" }}>
            <Filter cureentLink={"home"} />
            <div className="mt-10 products_container" style={{ width: "73%" }}> { children} </div>
          </section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
