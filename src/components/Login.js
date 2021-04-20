import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function Login(props) {
  const [user, setUser] = useState([{ userName: "", password: "" }]);

  const HandleLogin = () => {
    if (user.userName === "jyotirmoy" && user.password === "password") {
      props.history.push("/products");
    } else {
      alert("Wrong username or password!");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 p-5">
          <div className="row">
            <div className="col-md-6 mr-auto ml-auto">
              <form>
                <div className="form-group p-5">
                  <h3 className="text-center">Login</h3>
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) =>
                      setUser({ ...user, userName: e.target.value })
                    }
                    className="form-control"
                  ></input>
                  <br></br>
                  <br></br>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    className="form-control"
                  ></input>
                  <br></br>
                  <br></br>
                  <button
                    onClick={HandleLogin}
                    disabled={!user.userName || !user.password}
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
