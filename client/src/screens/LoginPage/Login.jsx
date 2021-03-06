import React, {Component} from "react"
import "../LoginPage/Login.css"
import {getProfiles} from "../../services/profile"
import Layout from "../../components/shared/Layout/Layout"
import {Link} from "react-router-dom"

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {
                emailAddress:'',
                password: ''
            },
            signIn: false,
            account: []
        }

    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({
            profile: {
                ...this.state.profile,
                 [name]: value,

            }
            
        })
    
        
    }

    handSubmit = async (e) => {

         e.preventDefault();
        let {profile, signIn, account } = this.state;
        // const data = await getProfiles(this.state.profile)
        // console.log(data);


        // this.setState({
        //     account: data
        // })
    }




    render(){

        let {profile} = this.state;
        return(
            
                <Layout>
                <div className = "main-login-container">
                    <div className="signin-option-container">
                        <h1 className="signin-header">Sign In</h1>
                        <form className="signin-form" onSubmit={this.handleSubmit}>
                            <label>School Email:</label>

                            <input type="text"
                            className = "input-field-signin"
                            onChange={this.handleChange}
                            name="emailAddress"
                            value={profile.emailAddress}
                            required/>

                            <label>Password:</label>

                            <input type="password" 
                            className = "input-field-signin" 
                            name="password"
                            value={profile.password}
                            onChange={this.handleChange}
                            required />
                    
                            <label>Forgot Password?</label>

                        <button className = "signin-button">Sign In</button>

                        <div className="desktop-view">
                        <p className="create-account-header-desktop combination-desktop">Do you have an Account?</p>
                        <Link  to="/create/profile"><p className ="create-account-link-desktop combination-desktop">Create an Account</p></Link>
                        </div>
                        </form>
                    </div>
                    <div className="create-account">
                        <p className="create-account-header combination">Do you have an Account?</p>
                        <Link  to="/create/profile"><p className ="create-account-link combination">Create an Account</p></Link>


                    </div>

                    

                </div>
                </Layout>
            
        )
    }
}

export default Login