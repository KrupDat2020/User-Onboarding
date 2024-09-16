import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Forms from './Forms';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues =  {
  username: '',
  email: '',
  password: '',
  yes: true,
  no: false,
};

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
};

const initialFriends = [];
const initialDisabled = true;

const [friends, setFriends] = useState(initialFriends);
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const[disabled, setDisabled] = useState(initialDisabled);

const getFriends = () => {
  axios
  .get('https://reqres.in/api/users')
  .then((res) => {
    setFriends(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
}

const postNewFriend = (newFriend) => {
  axios
  .post('https://reqres.in/api/users', newFriend)
  .then((res) => {
    setFriends([...friends, res.data]);
    setFormValues(initialFormValues);
  })
  .catch((err) => {
    console.log(err);
  });
};

const inputChange = (name, value) => {
  yup
  .reach(schema, name)
  .validate(value)
  .then(() => {
    setFormErrors ({
      ...formErrors,
      [name]: '',
    });
  })

  .catch((err) => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0],
    });
  });

  setFormValues({
    ...formValues,
    [name]: value,
  });
};

const formSubmit = () => {
  const newFriend = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
  };

  postNewFriend(newFriend);
};

useEffect(() => {
  getFriends();
}, []);

useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
