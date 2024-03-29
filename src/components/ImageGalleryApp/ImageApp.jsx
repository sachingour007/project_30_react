import React, { useEffect, useState } from "react";
import style from "./img.module.css";
import SingleImage from "./SingleImage";
import axios from "axios";

const ImageApp = () => {
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    getData();
    // imageData();
  }, []);

  console.log(picture);
  //Fetch with async/await
  const getData = async () => {
    const res = await fetch("https://api.slingacademy.com/v1/sample-data/photos");
    const data = await res.json();
    setPicture(data.photos);
    // console.log(data);
  };

  // axios with async/await
  /*
  const imageData = async () => {
    try {
      const res = await axios.get("https://picsum.photos/v2/list");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  */
  return (
    <div className={style.main_container}>
        <header>
            <h1>Image Gallery</h1>
        </header>
      <div className={style.wrraper}>
        {picture.map((img) => {
          return <SingleImage key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};

export default ImageApp;
