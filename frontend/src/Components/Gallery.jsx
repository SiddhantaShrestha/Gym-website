import React from "react";

const Gallery = () => {
  //Storing all images in an array
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => {
            return <img key={index} src={element} alt="image"></img>;
          })}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => {
            return <img key={index} src={element} alt="image"></img>;
          })}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => {
            return <img key={index} src={element} alt="image"></img>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
