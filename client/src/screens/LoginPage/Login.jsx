import React, {Component} from "react"
import "../LoginPage/Login.css"
import {getProfile} from "../../services/profile"
import Layout from "../../components/shared/Layout/Layout"
import {Link} from "react-router-dom"

class Login extends Component {
    constructor() {
        super();

        this.state = {
            profile: {
                emailAddress:'',
                password: ''
            },
            signIn: false,
        }

    }




    render(){
        return(
            
                <Layout>
                <div className = "main-login-container">
                    <div className="sign-in-option-container">
                        <h1 className="signin-header">Sign In</h1>
                        <form>
                         <label>School Email:</label>
                         <input type="text"/>
                         <label>Password:</label>
                         <input type="text" />
                         <label>Forgot Password?</label>

                        <button>Sign In</button>
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