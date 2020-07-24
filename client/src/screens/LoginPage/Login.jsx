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
                    <div className="sign-in-option-container">
                        <h1 className="signin-header">Sign In</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label>School Email:</label>

                            <input type="text"
                            onChange={this.handleChange}
                            name="emailAddress"
                            value={profile.emailAddress}
                            required/>

                            <label>Password:</label>

                            <input type="password"  
                            name="password"
                            value={profile.password}
                            onChange={this.handleChange}
                            required />
                    
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