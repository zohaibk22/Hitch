import React, { Component } from "react";
import { createProfile } from "../../services/profile";
import "./createProfile.css";

class CreateProfile extends Component {
  constructor() {
    super();

    this.state = {
      profile: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      created: false,
    };
  }

  handleChange = (event) => {
    const { input, value } = event.target;
    this.setState({
      profile: {
        ...this.state.profile,
        [input]: value,
      },
    });
  };

  render() {
    const { profile, created } = this.state;

    // if(created) {
    //     return <
    // }

    return (
      //<Layout>
      <>
        <h1>CREATE USER PAGE</h1>
        <form>
          <input
            type="text"
            placeholder="Email Address"
            className="user-email"
            input="email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            className="user-password"
            input="password"
            onChange={this.handleChange}
          />

          <input
            type="text"
            placeholder="Confirm Password"
            className="user-password"
            input="confirm-password"
            onChange={this.handleChange}
          />

          <input
            type="button"
            value="Submit"
            className="create-profile-button"
          />
        </form>
      </>
      //</Layout>
    );
  }
}

export default CreateProfile;
