import React from "react";
import "./style.scss";
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi modi
            perferendis repellendus. Tenetur dolor tempore doloribus saepe
            dolores quibusdam quis?
          </p>
          <span>Do you have an account</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />

            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
