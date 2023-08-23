import React from "react";
import "./Carrier.css";
import data from "../../productsData";
import Card from "../Card/Card";

function Carrier() {
  const CarrierData = data.filter((item) => {
    return item.category === "Carrier";
  });
  console.log(CarrierData);
  return (
    <div>
      <section className="container">
        <div className="Card-container">
          {CarrierData &&
            CarrierData.map((product, index) => {
              return <Card product={product} key={index} />;
            })}
        </div>
      </section>
    </div>
  );
}

export default Carrier;
