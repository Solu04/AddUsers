import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
// import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [click, setClick] = useState(false);

  const addUserHandler = (uName, uAge) => {
    setClick(true);
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} onError />
      {click && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
