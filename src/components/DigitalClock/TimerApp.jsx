import React, { useEffect, useState } from "react";
import styles from "./clock.module.css";

const TimerApp = () => {
  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let timer;
    if (flag) {
      timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  });

  const startHanlder = () => {
    setFlag(true);
  };
  const stopHandler = () => {
    setTime(0);
    setFlag(false);
  };
  const pauseHandler = () => {
    setFlag(false);
  };

  //Helper Function

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div className={styles.main_Container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <h1>Digital-Clock</h1>
          </div>
          <div className={styles.watch}>
            <h2> {formatTime(time)}</h2>
            <div className={styles.buttons}>
              <button className={styles.start} onClick={startHanlder}>
                Start
              </button>
              <button className={styles.stop} onClick={stopHandler}>
                Stop
              </button>
              <button className={styles.pause} onClick={pauseHandler}>
                pause
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerApp;
