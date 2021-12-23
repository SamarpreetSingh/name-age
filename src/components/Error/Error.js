import React from "react";
import styles from "./Error.module.css";
import Button from "../UI/Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className={styles["backdrop"]}
      onClick={() => props.setError(null)}
    ></div>
  );
};

const ErrorModal = (props) => {
  return (
    <div className={styles["error-modal"]}>
      <div className={styles["error-head"]}>Invalid Input</div>
      <div className={styles["error-msg"]}>
        <p>{props.msg}</p>
      </div>
      <div className={styles["cancel-div"]}>
        {/* <button onClick={clickHandler}>Okay</button> */}
        <Button onClick={props.clickHandler}>Okay</Button>
      </div>
    </div>
  );
};

const Error = (props) => {
  const clickHandler = (e) => {
    e.preventDefault();
    props.setError(null);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setError={props.setError} />,
        document.getElementById("backdrop-div")
      )}
      {ReactDOM.createPortal(
        <ErrorModal msg={props.msg} clickHandler={clickHandler} />,
        document.getElementById("modal-div")
      )}
    </>
  );
};

export default Error;
