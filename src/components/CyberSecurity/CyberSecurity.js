import React from "react";
import "./CyberSecurity.css";
import data from "../../productsData";
import Card from "../Card/Card";

function CyberSecurity() {
  const CyberSecurityData = data.filter((item) => {
    return item.category === "Cyber Security";
  });
  console.log(CyberSecurityData);
  return (
    <div>
      <section className="container">
        <div className="Card-container">
          {CyberSecurityData &&
            CyberSecurityData.map((product, index) => {
              return <Card product={product} key={index} />;
            })}
        </div>
      </section>
    </div>
  );
}

export default CyberSecurity;
