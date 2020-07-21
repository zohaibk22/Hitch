import React, { Component } from 'react'
import './myProfile.css'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Main from '../../components/shared/Main/Main'
import Header from '../../components/shared/Header/header'
import Footer from '../../components/shared/Footer/footer'
import { getProfile } from "../../services/profile"
import CreateProfileButton from '../../components/EditProfile/Button/updateButton'
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
    return (
      <>
      <Header />
        <Main>
          <div className="profile-details">
            <h2 className="my-profile">My Profile</h2>
            <h2 className="bio-head">Bio</h2>
              <div className="bio">{profile.bio}</div> 
            <img className="profile-details-image" src={profile.imgUrl} alt={profile.fullName} />
            
               <div className="name-pic">
              
                  <div className="name">{profile.fullName}</div>
                  <div className="age">{profile.age}</div>
                  <div className="hometown">{profile.homeTown}</div>
            
            

                 <div className="school">{profile.school}</div>
                 <div className="major">{profile.major}</div><div className="graduation">{profile.graduationYear}</div>
                  
            </div>
            
              

              <h2 className="recentReview">Most Recent Review</h2>
              <div className="review-text">"{profile.recentReview}"</div>
              <h2 className="travel-pref">Travel Preferences</h2>
            
            
          </div>

          <CreateProfileButton />
          <h2 className="remove-account">Want to remove your account?</h2>
          <h2 a href="/" className="remove-button">Deactivate Account</h2>
        </Main>
        <Footer />
        </>
    )
  }
}

export default withRouter (MyProfile)