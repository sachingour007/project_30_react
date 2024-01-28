import React, { useState } from "react";
import style from "./acco.module.css";
import { helpData } from "./data";
import SingleAccordia from "./SingleAccordia";

const Accordian = () => {
  const [select, setSelect] = useState(null);
  const [flag, setFlag] = useState(false);

  const dropHandler = (id) => {
    console.log(id);
    setSelect(select === id ? null : id);
    // setFlag(true)
  };

  return (
    <div className={style.main_container}>
      <header>
        <h1>Accordian Project</h1>
      </header>
      <div className={style.wrapper}>
        {helpData && helpData.length > 0 ? (
          helpData.map((data) => {
            return (
              <SingleAccordia
                key={data.id}
                {...data}
                dropHandler={dropHandler}
                select={select}
              />
            );
          })
        ) : (
          <div>Data Not available</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
