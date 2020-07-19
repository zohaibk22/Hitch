import React, { Component } from "react";
import { createProfile } from "../../services/profile";
import "./createProfile.css";
import {Redirect} from 'react-router-dom'


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
    const { name, value } = event.target;
    this.setState({
      profile: {
        ...this.state.profile,
        [name]: value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefualt()
    const {password, confirmPassword} = this.state.profile
    if(confirmPassword !== password){
      alert("Passwords do not match. Try Again")
    }
    else{
      const created = await createProfile(this.state.profile)
      this.setState ({
      created
     })
    }


  }

  render() {
    const { profile, created } = this.state;

    if(created) { 
      return <Redirect to={`/`} />

    }


    return (
      //<Layout>
      <>
        <h1>CREATE USER PAGE</h1>
        <form>
          <input
            type='text'
            placeholder="Email Address"
            className="user-email"
            value={profile.email}
            name="email"
            onChange={this.handleChange}
          />
          <input
            type='password'
            placeholder="Password"
            className="user-password"
            value={profile.password}
            name="password"
            required
            onChange={this.handleChange}
          />

          <input
            type='password'
            placeholder="Confirm Password"
            className="user-password"
            value={profile.confirmPassword}
            name="confirmPassword"
            onChange={this.handleChange}
          />

        
           <button  type= "submit" className="create-profile-button"
            onSubmit={this.handleSubmit}
          >Submit</button>
        </form>
      </>
      //</Layout>
    );
  }
}

export default CreateProfile;
