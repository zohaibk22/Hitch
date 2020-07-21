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
        match: true,
      },
      created: false,
      errors: {
        email: null,
        password: null,
      },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  validation = (name, value) => {
    let {emailValid, passwordValid, formValid, errors, profile} = this.state;

    switch(name) {
      case 'email':
        emailValid = value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        // errors.email = emailValid ? true : false;
        errors.email = emailValid ? '' :"is invalid"
        break;

      case 'password':
        passwordValid = value.length >= 8;
        // errors.password = passwordValid ? true : false
        errors.password = passwordValid ? '' : "is too short"

        if(profile.password !== profile.confirmPassword){
         profile.match = false;
         console.log(profile.match);
        }
        else {
          profile.match = true;
        }
        break;
      
      default :
        break;
      
    }

    this.setState({
      errors: errors,
      emailValid: emailValid,
      passwordValid: passwordValid,
    }, this.formValidation)
    

    
  }

  formValidation() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    })
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      profile: {
        ...this.state.profile,
        [name]: value,
      },
    }, () => {this.validation(name, value)});
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
    }



  }

  render() {
    const { profile, created } = this.state;

    if(created) { 
      return <Redirect to={`/`} />

    }


    return (
      <Layout>
      <div className = 'create-user-container'>
        <h1 className= "heading">Create an Account</h1>
        <form className="create-user-account" onSubmit={this.handleSubmit}>
          <label>Email Address</label>
          <input
            type='text'
            className="user-email input-field"
            value={profile.email}
            name="email"
            required
            onChange={this.handleChange}
          />
          {this.state.errors.email ? null : <p className="error-message">Incorrect Email input</p>}

          <label>Password</label>
          <input
            type='password'
            className="user-password input-field"
            value={profile.password}
            name="password"
            required
            onChange={this.handleChange}
          />
          {this.state.errors.password ? null : <p className = "error-message" >Password Must be Over 8 characters</p>}
          
          
          <label>Confirm Password</label>
          <input
            type='password'
            className="user-password input-field"
            value={profile.confirmPassword}
            name="confirmPassword"
            required
            onChange={this.handleChange}
          />

          {this.state.profile.match ? null : <p className = "error-message">Paswwords do not match</p>}



        
           <button  type= "submit" className="create-profile-button" disabled={!this.state.formValid}
          >Create Account</button>
        </form>
      </div>
      </Layout>
    );
  }
}

export default CreateProfile;
