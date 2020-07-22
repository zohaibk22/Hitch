import React, { Component } from 'react';
import CreateProfileButton from '../../components/EditProfile/Button/CreateProfileButton'
import { getProfile, updateProfile } from '../../services/profile'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './editProfile.css'
import ProfilePic from '../../components/EditProfile/ProfilePic/ProfilePic'
import PopUp from '../../components/EditProfile/PopUp/PopUp'
import Main from '../../components/shared/Main/Main'
import Heading from '../../components/EditProfile/Heading/Heading'
import Header from '../../components/shared/Header/header'
import Footer from '../../components/shared/Footer/footer'

class EditProfile extends Component {
  constructor(props) {
    super(props);
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
        hometown: '',
        active: true,
      },
      picStatus: true,
    }
  }
  async componentDidMount() {
    let { id } = this.props.match.params
    const profile = await getProfile(id)
    console.log(profile)
    this.setState({ profile })
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      profile: {
        ...this.state.profile,
        [name]: value
      }
    })
  }
  handleSubmit = async (event) => {
    // event.preventDefault()
    if (this.state.profile.profilePicture === false
      || this.state.profile.profilePicture === 'test.png') {
      this.setState({
        picStatus: false
      })
    } else {
      let { id } = this.props.match.params
      const profile = await updateProfile(id, this.state.profile)
      this.setState({ profile })
    }
  }
  handleWillDo = () => {
    this.setState({
      picStatus: true
    })
  }
  render() {
    console.log(this.state.profile.fullName)
    const profile = this.state.profile
    return (
      <>
        <Header />
        <Main>
          <Heading />
          <ProfilePic />
          {this.state.picStatus ? null : <PopUp onSubmit={this.handleWillDo}/>}
          <form className='editForm' onSubmit={this.handleSubmit}>
            <div className='formC'>
              <div className='formItem'>
                <label>Full Name:</label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  value={profile.fullName}
                  onChange={this.handleChange}></input>
              </div>
              <div className='formItem'>
                <label>Hometown:</label>
                <input
                  type='text'
                  id='hometown'
                  name='hometown'
                  value={profile.hometown}
                  onChange={this.handleChange}></input>
              </div>
            </div>
            <div className='formC'>
              <div className='formItem'>
                <label>School:</label>
                <input
                  type='text'
                  id='school'
                  name='school'
                  value={profile.school}
                  onChange={this.handleChange}></input>
              </div>
              <div className='formItem'>
                <label>Major:</label>
                <input
                  type='text'
                  id='major'
                  name='major'
                  value={profile.major}
                  onChange={this.handleChange}></input>
              </div>
            </div>
            <div className='formC'>
              <div className='formItem'>
                <label>Graduation Year:</label>
                <input
                  type='text'
                  id='gradYear'
                  name='gradYear'
                  value={profile.graduationYear}
                  onChange={this.handleChange}></input>
              </div>
              <div className='formItem'>
                <label>Age:</label>
                <input
                  type='text'
                  id='age'
                  name='age'
                  value={profile.age}
                  onChange={this.handleChange}></input>
              </div>
            </div>
            <div className='bio'>
              <label>Bio:</label>
              <textarea
                type='text'
                id='bio'
                name='bio'
                className='bioInput'
                value={profile.bio}
                onChange={this.handleChange}></textarea>
            </div>
            <CreateProfileButton />
          </form>
        </Main>
        <Footer />
      </>
    );
  }
}

export default withRouter(EditProfile)