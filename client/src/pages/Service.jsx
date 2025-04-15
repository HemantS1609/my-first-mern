import React from "react";

export const Service = () => {
  const services = [
    {
      price: "500",
      description: "Description",
      provider: "Provider",
      service: "Service",
    },
  ];
  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services </h1>
      </div>

      <div className="container grid grid-three-cols">
        {services?.map((curElem, index) => {
          const { price, description, provider, service } = curElem || {};

          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src="/images/design.png"
                  alt="our services info"
                  width="200"
                />
              </div>

              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider || "provider"}</p>
                  <p>{price || "price"}</p>
                </div>
                <h2>{service || "service"}</h2>
                <p>{description || "description"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
