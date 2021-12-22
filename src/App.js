import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";
import Error from "./components/Error/Error";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const addUser = (user) => {
    setUsers((prev) => [{ ...user, id: Math.random().toString() }, ...prev]);
  };

  return (
    <div className="App">
      <UserForm addUser={addUser} setError={setError} />
      {error && <Error msg={error} setError={setError} />}
      {users.length && <UserList users={users} />}
    </div>
  );
}

export default App;
