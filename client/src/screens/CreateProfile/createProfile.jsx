import React, { Component } from "react";
import { createProfile } from "../../services/profile";
import "./createProfile.css";
import {withRouter} from 'react-router-dom'
import Layout from "../../components/shared/Layout/Layout"
import Filter from "../../components/CreateProfile/Filter"




class CreateProfile extends Component {
  constructor() {
    super();

    this.state = {
      profile: {
        email: "",
        password: "",
        confirmPassword: "",
        match: false,
        id: '',
      },
      created: false,
      errors: {
        email: null,
        password: null,
        confirmPassword: null,
      },
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      formValid: false,
    };
  }

  validation = (name, value) => {
    let {emailValid, passwordValid, errors, profile, confirmPasswordValid} = this.state;

    switch(name) {
      case 'email':
        emailValid = value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        // errors.email = emailValid ? true : false;
        errors.email = emailValid ? true : false;
        break;

      case 'password':
        passwordValid = value.length >= 8;
        // errors.password = passwordValid ? true : false
        errors.password = passwordValid ? true : false
        break;

      case 'confirmPassword' :
        confirmPasswordValid = value.length >= 8;
        errors.confirmPassword = confirmPasswordValid ? true : false;

        if(profile.password === profile.confirmPassword){
         profile.match = true;
         console.log(profile.match);
        }
        else {
          profile.match = false;
        }
        break;
      
      default :
        break;
      
    }

    this.setState({
      errors: errors,
      emailValid: emailValid,
      passwordValid: passwordValid,
      confirmPasswordValid: confirmPasswordValid,
    }, this.formValidation)
    
  }

  formValidation() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid
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
     this.props.history.push(`/profile/update/${created._id}`)
    }
  }

   
  render() {
    const { profile, created } = this.state;



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

          {this.state.profile.match ? null : <p className = "error-message">Passwords do not match</p>}



        
           <button  type= "submit" className="create-profile-button" disabled={!this.state.formValid}
          >Create Account</button>
        </form>
        <Filter email={this.state.profile.email} />
      </div>
      </Layout>
    );
  }
}

export default withRouter(CreateProfile);
