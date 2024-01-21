import React from "react";
import style from "./user.module.css";

const Card = ({ login, name, email, dob, location, picture, phone }) => {
    
  return (
    <div className={style.cardContainer}>
      <h2>USER :{login?.username} </h2>

      <div className={style.dataCon}>
        <div className={style.content}>
          <h2>
            {name?.title} {name?.first} {name?.last}
          </h2>
          <p>Email: {email}</p>
          {/* <p>User For 17 Years</p> */}
          <p>Age: {dob?.age}</p>
          <p>Nationality: {location?.country} </p>
          <p>Phone: {phone} </p>
        </div>
        <div className={style.image}>
          <img src={picture?.large} alt="" />
          <p>
            Address:
            {`${location?.street?.number}, ${location?.street?.name}, ${location?.city} ${location?.postcode}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
