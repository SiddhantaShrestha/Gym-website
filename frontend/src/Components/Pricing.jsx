import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "Quarterly",
      price: 10000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "Semi-annually",
      price: 18000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "Yearly",
      price: 32000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>POWER GYM FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title}></img>
              <div className="title">
                <h1>{element.title}</h1>
                <h1>Package</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Equipment
                </p>
                <p>
                  <Check /> Free Training
                </p>
                <p>
                  <Check /> Free Rest Room
                </p>
                <p>
                  <Check /> 24/7 Skilled Support
                </p>
                <p>
                  <Check /> 15 days Freezing Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
