import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/mainReducer";
import { loginUser } from "../../redux/userSlices";
import axios from "axios";

function Login({ history }) {
  const [state, setState] = useState({
    email: "",
    password: "",
    errors: [""],
  });
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (
      user.loginData.loginstate === null ||
      user.loginData.loginstate === false
    ) {
      console.log("before getting data!");
    } else if (user.loginData.loginstate === true) {
      history.push("/");
    }
  }, [user.loginData]);

  const InputBarMaker = (typeDef) => {
    return (
      <>
        <div className="row">
          <div className="input-field col s12">
            <input
              nmae={typeDef}
              id={typeDef}
              type={typeDef}
              className="validate"
              placeholder={typeDef}
              value={state[typeDef] || ""}
              onChange={(e) => {
                setState({ ...state, [typeDef]: e.target.value });
              }}
            />
          </div>
        </div>
      </>
    );
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (state.email === "" || state.password === "") {
      setState({ errors: ["there is no enouph information"] });
    } else {
      let dataForm = {
        email: state.email,
        password: state.password,
      };

      /* dispatch(loginUser(dataForm)); */

      await axios.post("/api/users/login", dataForm).then((res) => {
        dispatch(loginUser(res.data));
        setState({ email: "", password: "", errors: [] });
      });
    }
  };

  return (
    <div className="container">
      <h2>Log In</h2>

      <div className="row">
        <form className="col s12" onSubmit={(event) => submitForm(event)}>
          {InputBarMaker("email")}
          {InputBarMaker("password")}

          {state.errors.length > 0 &&
            state.errors.map((err, i) => <p key={i}>{err}</p>)}

          <div className="row">
            <div className="col 12">
              <button
                className="btn waves-effect red lighten-2"
                type="submit"
                name="action"
                onClick={submitForm}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
