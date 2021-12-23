import React, { useRef } from "react";
import styles from "./UserForm.module.css";
import Button from "../UI/Button";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      props.setError("Please enter a valid name and age (non empty values) ");
    } else if (!Number.isInteger(+enteredAge) || +enteredAge <= 0) {
      props.setError("Please enter a valid age (> 0)");
    } else {
      props.addUser({ username: enteredName, age: enteredAge });
    }

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <div className={styles["user-form"]}>
      <form onSubmit={submitHandler}>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input type="text" name="username" ref={nameInputRef} />
        </div>
        <div className={styles["form-control"]}>
          <label>Age (years)</label>
          <input type="number" name="username" ref={ageInputRef} />
        </div>
        <div className={styles["form-submit"]}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
