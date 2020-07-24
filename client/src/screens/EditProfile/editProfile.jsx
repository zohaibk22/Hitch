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
import SvgIcons from '../../components/shared/SVGIcons/SvgIcons'

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
    let { id } = this.props.match.params
    await updateProfile(id, this.state.profile)
    this.props.history.push(`/profile/${id}`)
  }
  render() {
    const profile = this.state.profile
    return (
      <>
        <Header />
        <Main>
          <Heading />
          <ProfilePic />
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
                  id='graduationYear'
                  name='graduationYear'
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
            <div className='formC'>
              <div className='bio'>
                <label className='bioL'>Bio:</label>
                <textarea
                  type='text'
                  id='bio'
                  name='bio'
                  className='bioInput'
                  defaultValue={profile.bio}
                  onChange={this.handleChange}></textarea>
              </div>
            </div>
            <div className='formC'>
              <div className='formItem'>
                <label>Profile Picture URL:</label>
                <input
                  type='text'
                  id='profilePicture'
                  name='profilePicture'
                  defaultValue={profile.profilePicture}
                  onChange={this.handleChange}></input>
              </div>
            </div>
            <div className='formC'>
              <SvgIcons name='music'
                width={39}
                fill='#051d54' />
              <label className='plusSvg'>Select Travel Preferences:</label>
            </div>
            <div className='formC'>
              <div className='formItem'>
                <input
                  type='text'
                  id='music'
                  name='music'
                  placeholder='Enter favorite music genres'
                  defaultValue={profile.music}
                  onChange={this.handleChange}></input>
              </div>
            </div>
            <SvgIcons name='snack'
              width={30}
              fill='#051d54'
              className='snackSvg' />
            <label className='plusSvg'>Snacks Welcome:</label>
            <input
              type='checkbox'
              name='snacks'
              className='checkOne'></input>
            <SvgIcons name='smoke'
              width={100}
              fill='#051d54'
              className='smokeSvg' />
            <label className='plusSvgSmoke'>Smoke Free:</label>
            <input
              type='checkbox'
              id='smoke'
              name='smoke'
              className='checkOne'></input>
            <CreateProfileButton />
          </form>
        </Main>
        <Footer />
      </>
    );
  }
}


export default withRouter(EditProfile)