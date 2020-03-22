import React, { useEffect, useState } from "react";

const Gallery = ({ path }) => {
  const [images, setImages] = useState([]);

  const getImages = async _ => {
    const data = await fetch(
      `http://localhost:8080/getFiles/public/Dance/2019/Spring/Minerva`
    );
    const json = await data.json();
    setImages(json);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="grid">
      {images.map(image => (
        <img src={`http://localhost:8080/${image}`} alt=""></img>
      ))}
    </div>
  );
};

export default Gallery;
