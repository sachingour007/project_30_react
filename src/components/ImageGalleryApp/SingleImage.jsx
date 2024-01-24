import React from 'react';
import style from "./img.module.css";

const SingleImage = ({url}) => {
    // console.log(url);
  return (
    <div className={style.main_Card}>
        <div className={style.imge}>
            <img src={url} alt="" />
        </div>
    </div>
  )
}

export default SingleImage