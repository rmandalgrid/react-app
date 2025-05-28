import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const ShoppingDashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="selection-bar"></div>
      <div className="filter-list flex justify-center items-center mt-10">
        <ul className="flex gap-10 text-gray-600 text-sm">
          <li>WOMEN</li>
          <li>MEN</li>
          <li>KIDS</li>
          <li>HOME</li>
          <li>SALE</li>
          <li>ELECTRONICS</li>
        </ul>
      </div>
      <div className="horizental-line w-full h-0.5 bg-gray-300 mt-5"></div>
      <div className="product-list flex justify-center items-center gap-10">
          <Card bg="" image="/Bitmap.svg" description="Best of My Love Ruched Dress" price={50.00} />
          <Card bg="" image="/Bitmap1.svg" description="Best of My Love Ruched Dress" price={50.00} />
          <Card bg="" image="/Bitmap3.svg" description="Best of My Love Ruched Dress" price={50.00} />
          <Card bg="" image="/Bitmap2.svg" description="Best of My Love Ruched Dress" price={50.00} />
          <Card bg="/roll like.svg" image="/Bitmap2.svg" description="Best of My Love Ruched Dress" price={50.00} />
      </div>
    </div>
  );
};

export default ShoppingDashboard; 