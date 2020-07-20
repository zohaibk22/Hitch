import React, { Component } from 'react'
import './myProfile.css'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Main from '../../components/shared/Main/Main'
import Header from '../../components/shared/Header/header'
import Footer from '../../components/shared/Footer/footer'
import { getProfile } from "../../services/profile"

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
    const profile = await getProfile(id)
    //debugger
    console.log(profile)
    this.setState({ profile })
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
            <h1 className="my-profile">My Profile</h1>
         
            <div className="detail">
              <img className="profile-details-image" src={profile.imgUrl} alt={profile.name} />
              <div className="name">{profile.fullname}</div>
              <div className="age">Age{profile.age}</div>
              <div className="hometown">Hometown:{profile.homeTown}</div>
            </div>
            

            <div className="school">School:{profile.school}</div>
            <div className="major">Major:{profile.major}</div>
            <div className="graduation">Graduation:{profile.graduationYear}</div>
            <h2 className="bio">Bio{profile.bio}</h2> 
            <h2 className="recentReview">Most Recent Review{profile.recentReview}</h2>
            <h2 className="travel-pref">Travel Preferences</h2>
            
            
        </div>
      </Main>
        <Footer />
        </>
    )
  }
}

export default withRouter (MyProfile)