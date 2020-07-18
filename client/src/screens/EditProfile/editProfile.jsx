import React, { Component } from 'react';
import CreateProfileButton from '../../components/EditProfile/Button/CreateProfileButton'
// import { getProfile } from '../../services/profile'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

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
        active: null,
      }
    }
  }
  // async componentDidMount() {
  //   let { id } = this.props.match.params
  //   console.log(id)
  //   const profile = await getProfile(id)
  //   console.log(profile)
  //   this.setState({ profile })
  // }
  async componentDidMount() {
    let { id } = this.props.match.params
    const profile = await axios(`https://hitch-account-info.herokuapp.com/api/profile/${id}`)
    console.log(profile.data)
    this.setState({
      fullName: profile.data.fullName,
      profilePicture: profile.data.profilePicture,
      bio: profile.data.bio,
      school: profile.data.School,
      major: profile.data.Major,
      graduationYear: profile.data.GraduationYear,
      age: profile.data.age,
      recentReview: profile.data.recentReview,
      hometown: profile.data.hometown,
      active: null,
    })
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
  render() {
    return (
      <>
        <form className='editForm' onSubmit={this.handleSubmit}>
          <div className='formC'>
            <div className='formItem'>
              <label htmlFor='fullName'>Full Name:</label>
              <input type='text' id='fullName' name='fullName'
                value={this.state.fullName} onChange={this.handleChange}></input>
            </div>
            <div className='formItem'>
              <label htmlFor='hometown'>Hometown:</label>
              <input type='text' id='hometown' name='hometown'
                value={this.state.hometown} onChange={this.handleChange}></input>
            </div>
          </div>
          <div className='formC'>
            <div className='formItem'>
              <label htmlFor='school'> School:</label>
              <input type='text' id='school' name='school'
                value={this.state.school} onChange={this.handleChange}></input>
            </div>
            <div className='formItem'>
              <label htmlFor='major'>Major:</label>
              <input type='text' id='major' name='major'
                value={this.state.major} onChange={this.handleChange}></input>
            </div>
          </div>
          <div className='formC'>
            <div className='formItem'>
              <label htmlFor='gradYear'>Graduation Year:</label>
              <input type='text' id='gradYear' name='gradYear'
                value={this.state.graduationYear} onChange={this.handleChange}></input>
            </div>
            <div className='formItem'>
              <label htmlFor='age'>Age:</label>
              <input type='text' id='age' name='age'
                value={this.state.age} onChange={this.handleChange}></input>
            </div>
          </div>
          <div className='bio'>
            <label htmlFor='bio'>Bio:</label>
            <input type='text' id='bio' name='bio'
              value={this.state.bio} onChange={this.handleChange}></input>
          </div>
        </form>
        <CreateProfileButton />
      </>
    );
  }
}

export default withRouter(EditProfile)