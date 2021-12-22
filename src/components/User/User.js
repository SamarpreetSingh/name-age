import React from "react";
import styles from "./User.module.css";

const User = ({ user }) => {
  return (
    <div className={styles["user-div"]}>
      <p>
        {user.username} ({+user.age} years old){" "}
      </p>
    </div>
  );
};

export default User;
