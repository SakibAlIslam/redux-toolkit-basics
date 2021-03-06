import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Contact from "./pages/Contact";
import { loginActions,logOutActions } from "./redux/action";

function App() {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h3>Please Login</h3>
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={e => {
          setPhone(e.target.value);
        }}
      />
      <button onClick={() => dispatch(loginActions(phone))}>Login</button>
      <button onClick={() => dispatch(logOutActions(phone))}>Logout</button>
      <Contact />
    </div>
  );
}

export default App;
