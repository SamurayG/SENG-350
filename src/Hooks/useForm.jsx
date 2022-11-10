import React from "react";
import { USERS } from "./../pages/User/UserStatsGraphs.js";

const types = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: "Fill in a valid email",
  },
  password: {
    regex:
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,
    message:
      "Password must be at least 9 characters and 1 special character",
  },
  number: {
    regex: /^\d+$/,
    message: "It has to be a number",
  },
};

var confirmpassword = "";
var password = "";

var inputValue = "";

var validClubs = [];
for (let i = 0; i < USERS.length; i++) {
  validClubs.push(USERS[i].name.toLowerCase());
}

function useForm(type) {
  const [value, setValue] = React.useState("");
  const [erro, setError] = React.useState("");

  function onChange({ target }) {
    if (erro) {
      validate(target.value);
    }
    setValue(target.value);
  }

  if (type === "confirmpassword") {
    confirmpassword = value;
  } else if (type === "password") {
    password = value;
  }

  if (type === "whereToPost") {
    inputValue = value.toLowerCase();
  }

  function validate(value) {
    if (type === false) return true;
    if (password !== confirmpassword) {
      setError("Passwords do not match");
      return false;
    }
    if (type === "whereToPost" && validClubs.includes(inputValue) === false) {
      setError("Invalid club");
      return false;
    }
    if (value.length === 0) {
      setError("Fill in a value");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    erro,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
