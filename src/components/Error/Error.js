import React from "react";
import styles from "./Error.module.css";
import Button from "../UI/Button";

const Error = (props) => {
  const clickHandler = (e) => {
    e.preventDefault();
    props.setError("");
  };

  return (
    <div className={styles["overlay"]}>
      <div className={styles["error-div"]}>
        <div className={styles["error-head"]}>Invalid Input</div>
        <div className={styles["error-msg"]}>
          <p>{props.msg}</p>
        </div>
        <div className={styles["cancel-div"]}>
          {/* <button onClick={clickHandler}>Okay</button> */}
          <Button onClick={clickHandler}>Okay</Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
