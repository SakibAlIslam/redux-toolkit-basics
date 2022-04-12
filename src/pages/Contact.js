import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const { isAuth, phone } = useSelector((state) => state.auth);

  return (
    <>
      <div>Is Login: {isAuth ? 'true' : 'false'}</div>
      <div>Contact: {phone}</div>
    </>
  );
};

export default Contact;
