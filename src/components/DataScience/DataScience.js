import React from "react";
import "./datascience.css";

import data from "../../productsData";
import Card from "../Card/Card";

function DataScience() {
  const DataScienceData = data.filter((item) => {
    return item.category === "Data Science";
  });
  console.log(DataScienceData);
  return (
    <div>
      <section className="container">
        <div className="Card-container">
          {DataScienceData &&
            DataScienceData.map((product, index) => {
              return <Card product={product} key={index} />;
            })}
        </div>
      </section>
    </div>
  );
}

export default DataScience;
