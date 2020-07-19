import React, { Component } from 'react'
import './myProfile.css'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


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

      }
    }
  }

  //async componentDidMount() {
    //let { id } = this.props.match.params
    //const profile = await getProfile(id)
    //this.setState({ profile })
  //}


  async componentDidMount() {
    let { id } = this.props.match.params
    const res = await axios(`https://hitch-account-info.herokuapp.com/api/profile/${id}`)
    console.log(res.data)
    const profile = res.data
    this.setState({ profile })
  }



  render() {
    const { profile } = this.state
    console.log(profile.bio)
    return (
      
        <div className="profile-details">
          <img className="profile-details-image" src={profile.imgUrl} alt={profile.name} />
          <div className="detail">
            <div className="name">{profile.name}</div>
            <div className="bio">{profile.bio}</div>
            <div className="school">{profile.school}</div>
            <div className="major">{profile.major}</div>
            <div className="graduation">{profile.graduationYear}</div>
            <div className="age">{profile.age}</div>
            <div className="recentReview">{profile.recentReview}</div>
            <div className="hometown">{profile.homeTown}</div>
        
          </div>
        </div>
      
    )
  }
}

export default withRouter (MyProfile)