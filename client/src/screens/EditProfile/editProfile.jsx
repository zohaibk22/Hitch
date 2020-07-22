import React, { Component } from 'react';
import CreateProfileButton from '../../components/EditProfile/Button/CreateProfileButton'
import { getProfile, updateProfile } from '../../services/profile'
import { withRouter } from 'react-router-dom'
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
      rImg: false
    }
  }
  componentWillMount() {
    if (this.state.profile.profilePicture === false
      || this.state.profile.profilePicture === 'test.png') {
      this.setState({
        rImg: false
      })
    } else {
      this.setState({
        rImg: true
      })
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
    event.preventDefault()
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
  parentFunction() {
    this._child.changeTheState();
  }
  render() {
    console.log(this.state.profile.fullName)
    const profile = this.state.profile
    return (
      <>
        <Header />
        <Main>
          <Heading />
          <ProfilePic ref={component => this._child = component} />
          {this.state.picStatus ? null : <PopUp />}
          <form className='editForm' onSubmit={this.handleSubmit}>
            <div className='formC'>
              <div className='formItem'>
                <label>Full Name:</label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  defaultValue={profile.fullName}
                  onChange={this.handleChange}></input>
              </div>
              <div className='formItem'>
                <label>Hometown:</label>
                <input
                  type='text'
                  id='hometown'
                  name='hometown'
                  defaultValue={profile.hometown}
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
                  defaultValue={profile.school}
                  onChange={this.handleChange}></input>
              </div>
              <div className='formItem'>
                <label>Major:</label>
                <input
                  type='text'
                  id='major'
                  name='major'
                  defaultValue={profile.major}
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
                  defaultValue={profile.graduationYear}
                  onChange={this.handleChange}></input>
              </div>
              <div className='formItem'>
                <label>Age:</label>
                <input
                  type='text'
                  id='age'
                  name='age'
                  defaultValue={profile.age}
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
                defaultValue={profile.bio}
                onChange={this.handleChange}></textarea>
            </div>
            <div className='formC'>
              <div className='formItem'>
                <label>Profile Picture URL:</label>
                <input
                  type='text'
                  id='pic'
                  name='pic'
                  defaultValue={profile.profilePicture}
                  onChange={this.handleChange}></input>
              </div>
            </div>
            <div className='formC'>
              <div className='formItem'>
                <label>Select Travel Preferences:</label>
                <input
                  type='text'
                  id='music'
                  name='music'
                  defaultValue={profile.music}
                  onChange={this.handleChange}></input>
              </div>
            </div>
            <div className='formC'>
              <div>
                <label>Snacks Welcome:</label>
                <input
                  type='radio'
                  id='snacks'
                  name='snacks'
                  defaultValue={profile.snacks}
                  onChange={this.handleChange}></input>
                <label>Smoke Free:</label>
                <input
                  type='radio'
                  id='smoke'
                  name='smoke'
                  defaultValue={profile.smoke}
                  onChange={this.handleChange}></input>
              </div>
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