import React, { Component } from "react";
import "./Register.css";
import Tilt from "react-tilt";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      message: "",
    };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onSubmitRegister = () => {
    if (this.state.email && this.state.email.includes("@")) {
      this.setState({ message: "" });
      if (this.state.password && this.state.password.length >= 8) {
        this.setState({ message: "" });
        fetch("https://agile-tundra-79227.herokuapp.com/register", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
          }),
        })
          .then((response) => response.json())
          .then((user) => {
            if (user.id) {
              // console.log("user: ", user);
              this.props.loadUser(user);
              this.setState({ message: "" });
              //  console.log("success!");
              this.props.onRouteChange("home");
            } else {
              this.setState({
                message:
                  "Oops!, something went wrong!, You may have already registered try to signin",
              });
            }
          });
        /*console.log(
          JSON.stringify({
            email: this.state.email,
            password: this.state.password,
          })
        );*/
      } else {
        this.setState({
          message: "Oops! password is too small",
        });
      }
    } else {
      this.setState({
        message: "Oops! incorrect email address",
      });
    }
    //this.props.onRouteChange("home");
  };
  render() {
    const { onRouteChange } = this.props.onRouteChange;
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw5 center">
        <Tilt className="Tilt br2 " options={{ max: 15 }}>
          <main className="pa4 black-80 main">
            <div className="measure ">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw9 ph0 mh0 signintxt">Sign Up</legend>
                <div className="mt3">
                  <label
                    className="db fw6 lh-copy f9 email"
                    htmlFor="email-address"
                  >
                    User name
                  </label>
                  <input
                    onChange={this.onNameChange}
                    className="pa2 input-reset ba bg-transparent  hover-white w-100 inBox"
                    type="text"
                    name="user-name"
                    id="user-name"
                  />
                </div>
                <div className="mv3">
                  <label
                    className="db fw6 lh-copy f9 email"
                    htmlFor="email-address"
                  >
                    Email
                  </label>
                  <input
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent  hover-white w-100 inBox"
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </div>
                <div className="mv3">
                  <label
                    className="db fw6 lh-copy f9 password"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent  hover-white w-100 inBox"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitRegister}
                  className="b ph3 pv2 input-reset ba grow pointer f6 dib signinBttn"
                  type="submit"
                  value="Sign up"
                />
              </div>
              <p style={{ color: "red" }}>{this.state.message}</p>
              <div className="lh-copy mt3">
                <p>
                  Already have an account?{" "}
                  <a
                    onClick={() => onRouteChange("signin")}
                    href="#0"
                    className="f6 link pointer dim black db"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </main>
        </Tilt>
      </article>
    );
  }
}
export default Register;
