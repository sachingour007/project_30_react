import React, { useState, useEffect } from "react";
import style from "./user.module.css";
import Card from "./Card";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    setUser(data.results);
    console.log(data.results);
  };

  return (
    <div>
      <h1 className={style.heading}>USER DATA FEED</h1>
      <div className={style.cards}>
        {user.map((emp) => {
          return <Card key={emp.cell} {...emp} />;
        })}
      </div>
    </div>
  );
};

export default User;
