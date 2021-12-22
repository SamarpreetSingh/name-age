import React, { useState } from "react";
import styles from "./UserForm.module.css";
import Button from "../UI/Button";

const UserForm = (props) => {
  const [user, setUser] = useState({ username: "", age: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.username.trim().length === 0 || user.age.trim().length === 0) {
      props.setError("Please enter a valid name and age (non empty values) ");
    } else if (!Number.isInteger(+user.age) || +user.age <= 0) {
      props.setError("Please enter a valid age (> 0)");
    } else {
      props.addUser(user);
      setUser({ username: "", age: "" });
    }
  };

  return (
    <div className={styles["user-form"]}>
      <form onSubmit={submitHandler}>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => {
              setUser((prev) => {
                return {
                  username: e.target.value,
                  age: prev.age,
                };
              });
            }}
          />
        </div>
        <div className={styles["form-control"]}>
          <label>Age (years)</label>
          <input
            type="number"
            name="username"
            value={user.age}
            onChange={(e) => {
              setUser((prev) => {
                return { username: prev.username, age: e.target.value };
              });
            }}
          />
        </div>
        <div className={styles["form-submit"]}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
