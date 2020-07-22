import React, {Component} from "react"
import "../LoginPage/Login.css"
import {getProfile} from "../../services/profile"
import Layout from "../../components/shared/Layout/Layout"

class Login extends Component {
    constructor() {
        super();

        this.state = {
            profile: {
                emailAddress:'',
                password: ''
            }
        }

    }



    render(){
        return(
            <div className = "main-login-container">
                <Layout>
                    <h1>Login Pag</h1>

                    
                </Layout>
            </div>
        )
    }
}

export default Login