import React, { useState } from "react";
import Login from "./components/Login";
import Counter from "./components/Counter";
import User from "./components/User";
import Colors from "./components/Colors";
import Form from "./components/Form";
import Users from "./components/Users";

function Example() {
  const [isVisible, setIsVisible] = useState(true);
  // const user = {
  //   name: "Kerem Akbulut",
  //   age: 52,
  //   city: "Istanbul",
  // };
  return (
    <div>
      {/*<Form />*/}
      {/*isVisible && <Counter />
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button>*/}
      {<Users />}
      {/*<Colors />*/}
      {/*<Login />*/}
    </div>
  );
}

export default Example;
