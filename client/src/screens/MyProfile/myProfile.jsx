import React, { Component } from 'react'
import './myProfile.css'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import Main from '../../components/shared/Main/Main'
import Header from '../../components/shared/Header/header'
import Footer from '../../components/shared/Footer/footer'
import { getProfile, updateProfile } from "../../services/profile"
import UpdateProfileButton from '../../components/MyProfile/Button/updateButton'
import DeactivatePopUp from '../../components/MyProfile/DeactivatePopUp/DeactivatePopUp'
import { deleteProfile } from "../../services/profile";
import ProfilePic2 from '../../components/MyProfile/ProfilePic/ProfilePic2'

class MyProfile extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      profile: {
        fullName: '',
        profilePicture: '',
        bio: '',
        school: '',
        major: '',
        graduationYear: '',
        age: '',
        recentReview: '',
        homeTown: '',
        active: true,

      }
    }
  }

  async componentDidMount() {
    //debugger
    let { id } = this.props.match.params
    //debugger
    const res = await getProfile(id)
    //debugger
    console.log(res.data)
    //debugger
    const profile = res;
    this.setState({ profile })
    console.log(this.state)
    //debugger
  }

  handleClick = async (event) => {
      let { id } = this.props.match.params
      const deleted = await deleteProfile(id)
      this.setState ({
      deleted
     })
     this.props.history.push(`/`)
    console.log(deleted._id)
    }
  

  // async componentDidMount() {
  //   let { id } = this.props.match.params
  //   const res = await axios(`https://hitch-account-info.herokuapp.com/api/profile/${id}`)
  //   console.log(res.data)
  //   const profile = res.data
  //   this.setState({ profile })
  // }



  render() {
    const { profile } = this.state
    console.log(profile.bio)
    let { id } = this.props.match.params
    return (
      <>
        <Header />
        <Main>
          <div className="profile-details">
          <h2 className="my-profile">My Profile</h2>
            <div class="profile-container">
              <div className="left-profile">
               
                <h2 className="bio-head">Bio</h2>
                <div className="profile-bio">{profile.bio}</div>
                <h2 className="recentReview">Most Recent Review</h2>
                <div className="review-text">"{profile.recentReview}"</div>
                <h2 className="travel-pref">Travel Preferences</h2>
                <div className="button-container">
                  <Link to={`/profile/update/${id}`} ><UpdateProfileButton /></Link>
                  <h2 className="remove-account">Want to remove your account?</h2>
                  <Link className="remove-button" onClick={this.handleClick}>Deactivate Account</Link>
                </div>
              </div>

              <div className="right-profile">
                <div className="profile-details-image"> {profile.profilePicture}</div>
                <div className="name-pic">
                  <div className="name">{profile.fullName}</div>
                  <div className="age">{profile.age}</div>
                  <div className="hometown">{profile.homeTown}</div>
                  <div className="school">{profile.school}</div>
                  <div className="major">{profile.major}</div><div className="graduation">{profile.graduationYear}</div>
                </div>
              </div>
            </div>
            
              

              
            
            
          </div>

          
        </Main>
        <Footer />
        </>
    )
  }
}

export default withRouter (MyProfile)