import React from "react";
import "./fullstack.css";
import data from "../../productsData";
import Card from "../Card/Card";

function FullStack() {
  const FullStackData = data.filter((item) => {
    return item.category === "Full Stak Development";
  });
  console.log(FullStackData);
  return (
    <>
      <section className="container">
        <div className="Card-container">
          {FullStackData &&
            FullStackData.map((product, index) => {
              return <Card product={product} key={index} />;
            })}
        </div>
      </section>
    </>
  );
}

export default FullStack;
