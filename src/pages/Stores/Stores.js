import React from "react";

const Stores = () => {
  const images = [
    "/static/images/b1.png",
    "/static/images/b2.png",
    "/static/images/b3.png",
    "/static/images/b4.png",
  ];

  return (
    <div className="py-10">
      {images.map((el, index) => (
        <div key={index} className="py-10">
          <img src={el} className="rounded-xl mx-auto"/>
        </div>
      ))}
    </div>
  );
};

export default Stores;
