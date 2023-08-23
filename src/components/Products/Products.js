import React from "react";
import Card from "../Card/Card";
import "./products.css";

import data from "../../productsData";

function Products() {
  console.log(data);
  return (
    <>
      <section className="container">
        <div className="Card-container">
          {data &&
            data.map((product, index) => {
              return <Card product={product} key={index} />;
            })}
        </div>
      </section>
    </>
  );
}

export default Products;
