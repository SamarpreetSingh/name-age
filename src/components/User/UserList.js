import React from "react";
import styles from "./UserList.module.css";
import User from "./User";

const UserList = (props) => {
  return (
    <div className={styles["user-list"]}>
      {props.users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
