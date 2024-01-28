import React from "react";
import style from "./acco.module.css";

const SingleAccordia = ({ id, title, ans, dropHandler, select }) => {
  return (
    <div className={style.accor_main}>
      <div className={style.question} onClick={() => dropHandler(id)}>
        <p>{title}</p>
        <span>+</span>
      </div>
      {}
      {select === id ? (
        <div className={style.ans}>
          <p>{ans}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleAccordia;
