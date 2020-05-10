import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";

const Gallery = ({ location }) => {
  let [images, setImages] = useState([]);

  const getImages = async (_) => {
    const data = await fetch(
      `https://api.moncad.com.au/getFiles/public/${location.pathname}`
    );
    const json = await data.json();
    setImages(json);
  };

  useEffect(() => {
    getImages();
  }, []);

  let video = images.filter((image) => image.endsWith(".mp4"));
  images = images.filter((image) => !image.endsWith(".mp4"));

  return (
    <div>
      {video.length > 0 && (
        <LazyLoad key={video[0]} offset={1000}>
          <video src={`https://api.moncad.com.au/${video[0]}`} controls></video>
        </LazyLoad>
      )}
      <div className="grid">
        {images.map((image) => {
          return (
            <LazyLoad key={image} offset={1000}>
              <img src={`https://api.moncad.com.au/${image}`} alt=""></img>
            </LazyLoad>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
