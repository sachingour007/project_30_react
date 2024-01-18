import React, { useEffect, useState } from "react";
import styles from "./clock.module.css";

const TimerApp = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
   
  }, []);

  return (
    <div className={styles.main_Container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <h1>Digital-Clock</h1>
          </div>
          <div className={styles.watch}>
            <h2>{time}</h2>
            <div className={styles.buttons}>
              <button className={styles.start}>Start</button>
              <button className={styles.stop}>Stop</button>
              <button className={styles.pause}>pause</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerApp;
