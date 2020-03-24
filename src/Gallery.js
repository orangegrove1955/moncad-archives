import React, { useEffect, useState } from "react";
import Menu from "./Menu";

const Gallery = ({ match, location }) => {
  const [images, setImages] = useState([]);

  const getImages = async _ => {
    console.log("getting" + location.pathname);
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
    <div>
      <div className="grid">
        {images.map(image => {
          console.log(image.endsWith(".mp4"));
          return <img src={`https://api.moncad.com.au/${image}`} alt=""></img>;
        })}
      </div>
    </div>
  );
};

export default Gallery;
