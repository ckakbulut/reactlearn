import React from "react";

function Login({ data, friends }) {
  // console.log(data);
  // console.log(friends);
  /* <Login data={user} friends={["Mehmet", "Ayşe", "Murat", "Fatma"]} /> */
  return (
    <div>
      Login Details
      <div>Name: {data.name}</div>
      <div>Age: {data.age}</div>
      <div>City: {data.city}</div>
      <h3>Friends</h3>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <hr />
    </div>
  );
}

export default Login;
