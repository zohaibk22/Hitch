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
    const {password, confirmPassword} = this.state.profile
    console.log(password)
    if(confirmPassword !== password){
       event.preventDefault()
      alert("Passwords do not match. Try Again")
      console.log("password incorrect")
    }
    else{
       event.preventDefault()
      const created = await createProfile(this.state.profile)
      this.setState ({
      created
     })
     alert("Created")
     console.log(created)
    }



  }

  render() {
    const { profile, created } = this.state;

    if(created) { 
      return <Redirect to={`/Home`} />

    }


    return (
      <Layout>
      <div className = 'create-user-container'>
        <h1 className= "heading">Create an Account</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder="Email Address"
            className="user-email input-field"
            value={profile.email}
            name="email"
            required
            onChange={this.handleChange}
          />
          <input
            type='password'
            placeholder="Password"
            className="user-password input-field"
            value={profile.password}
            name="password"
            required
            onChange={this.handleChange}
          />

          <input
            type='password'
            placeholder="Confirm Password"
            className="user-password input-field"
            value={profile.confirmPassword}
            name="confirmPassword"
            required
            onChange={this.handleChange}
          />

        
           <button  type= "submit" className="create-profile-button"
          >Create Account</button>
        </form>
      </div>
      </Layout>
    );
  }
}

export default CreateProfile;
