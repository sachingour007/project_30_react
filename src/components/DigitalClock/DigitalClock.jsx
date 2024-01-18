import React, { useEffect, useState } from "react";
import styles from "./clock.module.css";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.main_Container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <h1>Digital-Clock</h1>
          </div>
          <div className={styles.watch}>
            <h2>{time.toLocaleTimeString()}</h2>
            <div className={styles.buttons}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
