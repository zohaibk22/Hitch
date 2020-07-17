import React, { Component } from 'react'
import './myProfile.css'
import Layout from '../../components/shared/Layout/Layout'
import { getProfile, deleteProfile } from '../../services/profile'
import { Link } from 'react-router-dom'


class ProfileDetails extends Component {
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

  async componentDidMount() {
    let { id } = this.props.match.params
    const profile = await getProfile(id)
    this.setState({ profile })
  }
  render() {
    const { profile } = this.state
    return (
      <Layout>
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
      </Layout>
    )
  }
}

export default ProfileDetails