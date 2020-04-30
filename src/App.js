import React, { Component } from "react";
import "./App.css";

import Navigation from "./components/navigation/navigation";
import Logo from "./components/Logo/logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import FaceDetection from "./components/faceDetection/faceDetection";
import Signin from "./components/signin/signin";
import Register from "./components/Register/Register";

const initialState = {
  input: "",
  imgUrl: "",
  coords: [],
  hasToWait: true,
  errorCatch: null,
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };
  calcFaceLoc = (data) => {
    let k = JSON.parse(JSON.stringify(data));
    let d = k.outputs[0].data.regions;
    let obj = {};
    const img = document.getElementById("InpImg");
    const width = Number(img.width);
    const height = Number(img.height);
    d.map((ele, i) => {
      ele.region_info.bounding_box.left_col =
        ele.region_info.bounding_box.left_col * width;

      ele.region_info.bounding_box.top_row =
        ele.region_info.bounding_box.top_row * height;

      ele.region_info.bounding_box.right_col =
        width - ele.region_info.bounding_box.right_col * width;

      ele.region_info.bounding_box.bottom_row =
        height - ele.region_info.bounding_box.bottom_row * height;

      return (obj[i] = ele.region_info.bounding_box);
    });
    return this.setState({ coords: obj });
  };

  displayFaceBounds = (box) => {
    this.setState({ box: box });
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onSubmit = () => {
    this.setState({ coords: [] });
    document.querySelectorAll(".boundingBox").forEach(function (a) {
      a.remove();
    });

    this.setState({ errorCatch: "" });
    this.setState({ hasToWait: true });
    this.setState({ imgUrl: this.state.input });

    fetch("https://agile-tundra-79227.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          /*  console.log(
            "id",
            "https://agile-tundra-79227.herokuapp.com/image/" +
              this.state.user.id
          );*/
          fetch("https://agile-tundra-79227.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              //console.log("count: ", count);
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }
        // console.log("Rank in App.js: ", this.state.user.entries);
        //  console.log("user: ", this.state.user);
        this.displayFaceBounds(this.calcFaceLoc(response));
        this.setState({ hasToWait: false });
      })
      .catch((err) => {
        this.setState({
          errorCatch: "OOps! Something's wrong, Check your network",
        });
      });
  };
  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };
  render() {
    return (
      <div className="App">
        <Particles
          className="Particles"
          params={{
            particles: {
              number: {
                value: 30,
              },
              size: {
                value: 3,
              },
              density: {
                enable: true,
                value_area: 800,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />

        <Navigation
          isSignedIn={this.state.isSignedIn}
          onRouteChange={this.onRouteChange}
        ></Navigation>
        {this.state.route === "signin" || this.state.route === "signout" ? (
          <Signin
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          ></Signin>
        ) : this.state.route === "home" ? (
          <div>
            <Logo></Logo>
            <Rank
              userName={this.state.user.name}
              Rank={this.state.user.entries}
            ></Rank>
            <ImageLinkForm
              onSubmit={this.onSubmit}
              onInputChange={this.onInputChange}
            ></ImageLinkForm>

            <FaceDetection
              imgUrl={this.state.imgUrl}
              coords={this.state.coords}
              hasToWait={this.state.hasToWait}
              errorCatch={this.state.errorCatch}
            ></FaceDetection>
          </div>
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          ></Register>
        )}
      </div>
    );
  }
}

export default App;
