import React from 'react';
import style from "./img.module.css";

const SingleImage = ({download_url}) => {
    // console.log(url);
  return (
    <div className={style.main_Card}>
        <div className={style.imge}>
            <img src={download_url} alt="" />
        </div>
    </div>
  )
}

export default SingleImage