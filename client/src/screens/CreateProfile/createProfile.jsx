import React, { Component } from "react";
import { createProfile } from "../../services/profile";
import "./createProfile.css";
import {Redirect} from 'react-router-dom'
import Layout from "../../components/shared/Layout/Layout"


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
    console.log(password)
    if(confirmPassword !== password){
      alert("Passwords do not match. Try Again")
      console.log("password incorrect")
    }
    else{
      const created = await createProfile(this.state.profile)
      this.setState ({
      created:true
     })
    }


  }

  render() {
    const { profile, created } = this.state;

    if(created) { 
      return <Redirect to={`/profiles`} />

    }


    return (
      <Layout>
      <>
        <h1>CREATE USER PAGE</h1>
        <form>
          <input
            type='text'
            placeholder="Email Address"
            className="user-email"
            value={profile.email}
            name="email"
            required
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
            required
            onChange={this.handleChange}
          />

        
           <button  type= "submit" className="create-profile-button"
            onSubmit={this.handleSubmit}
          >Submit</button>
        </form>
      </>
      </Layout>
    );
  }
}

export default CreateProfile;
