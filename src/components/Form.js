import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  return (
    <div>
      <div>Name</div>
      <input
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder="Surname"
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
      />
      <br />
      <div>
        <div>Gender</div>
        <select
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="">Select an option...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <hr />
      <div>
        Fullname:
        <strong>
          {" "}
          {name} {surname}
        </strong>
      </div>
      <br />
      <div>
        Gender:
        <strong> {gender}</strong>
      </div>
    </div>
  );
}

export default Form;
