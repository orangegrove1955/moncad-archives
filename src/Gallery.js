import React, { useEffect, useState } from "react";

const Gallery = ({ match, location }) => {
  const [images, setImages] = useState([]);

  const getImages = async _ => {
    const data = await fetch(
      `https://api.moncad.com.au/getFiles/public/${location.pathname}`
    );
    const json = await data.json();
    setImages(json);
    console.log(location);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="grid">
      {images.map(image => (
        <img src={`https://api.moncad.com.au/${image}`} alt=""></img>
      ))}
    </div>
  );
};

export default Gallery;
