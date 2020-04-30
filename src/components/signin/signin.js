import React, { Component } from "react";
import "./signin.css";
import Tilt from "react-tilt";
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinEmail: "",
      signinPassword: "",
      message: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ signinEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signinPassword: event.target.value });
  };
  onSubmitSignin = () => {
    fetch("https://agile-tundra-79227.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signinEmail,
        password: this.state.signinPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.setState({ message: "" });
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        } else {
          this.setState({
            message:
              "Oops! something went wrong, check your username and password",
          });
        }
      });
    /*  console.log(
      JSON.stringify({
        email: this.state.signinEmail,
        password: this.state.signinPassword,
      })
    );*/
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
                <legend className="f4 fw9 ph0 mh0 signintxt">Sign In</legend>
                <div className="mt3">
                  <label
                    className="db fw6 lh-copy f9 email"
                    htmlFor="email-address"
                  >
                    Email
                  </label>
                  <input
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent  hover-white w-100 inpBox"
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
                    className="b pa2 input-reset ba bg-transparent  hover-white w-100 inpBox"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitSignin}
                  className="b ph3 pv2 input-reset ba grow pointer f6 dib signinBttn"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <p>
                  Not yet registered?{" "}
                  <a
                    onClick={() => onRouteChange("register")}
                    href="#0"
                    className="f6 link pointer dim black db"
                  >
                    Sign up
                  </a>
                </p>
                <p style={{ color: "red" }}>{this.state.message}</p>
              </div>
            </div>
          </main>
        </Tilt>
      </article>
    );
  }
}
export default Signin;
