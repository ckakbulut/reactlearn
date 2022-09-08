import React, { useState } from "react";

function User() {
  const [user, setUser] = useState({ name: "Kerem", surname: "Akbulut" });
  return (
    <div>
      <h2>User</h2>
      {user.name} {user.surname}
      <br />
      <br />
      <div>
        <button onClick={() => setUser({ ...user, name: "Kaan" })}>
          Change Name
        </button>
        <button onClick={() => setUser({ ...user, surname: "Alptekin" })}>
          Change Surname
        </button>
      </div>
    </div>
  );
}

export default User;
