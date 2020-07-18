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
    const res = await axios(`https://hitch-account-info.herokuapp.com/api/profile/${id}`)
    console.log(res.data)
    const profile = res.data
    this.setState({ profile })
    // this.setState({
    //   fullName: profile.data.fullName,
    //   profilePicture: profile.data.profilePicture,
    //   bio: profile.data.bio,
    //   school: profile.data.School,
    //   major: profile.data.Major,
    //   graduationYear: profile.data.GraduationYear,
    //   age: profile.data.age,
    //   recentReview: profile.data.recentReview,
    //   hometown: profile.data.hometown,
    //   active: null,
    // })
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
    const { profile } = this.state
    return (
      <>
        <form className='editForm' onSubmit={this.handleSubmit}>
          <div className='formC'>
            <div className='formItem'>
              <label>Full Name:</label>
              <input type='text' id='fullName' name='fullName'
                defaultValue={profile.fullName} onChange={this.handleChange}></input>
            </div>
            <div className='formItem'>
              <label>Hometown:</label>
              <input type='text' id='hometown' name='hometown'
                defaultValue={profile.hometown} onChange={this.handleChange}></input>
            </div>
          </div>
          <div className='formC'>
            <div className='formItem'>
              <label>School:</label>
              <input type='text' id='school' name='school'
                defaultValue={profile.school} onChange={this.handleChange}></input>
            </div>
            <div className='formItem'>
              <label>Major:</label>
              <input type='text' id='major' name='major'
                defaultValue={profile.major} onChange={this.handleChange}></input>
            </div>
          </div>
          <div className='formC'>
            <div className='formItem'>
              <label>Graduation Year:</label>
              <input type='text' id='gradYear' name='gradYear'
                defaultValue={profile.graduationYear} onChange={this.handleChange}></input>
            </div>
            <div className='formItem'>
              <label>Age:</label>
              <input type='text' id='age' name='age'
                defaultValue={profile.age} onChange={this.handleChange}></input>
            </div>
          </div>
          <div className='bio'>
            <label>Bio:</label>
            <input type='text' id='bio' name='bio'
              defaultValue={profile.bio} onChange={this.handleChange}></input>
          </div>
        </form>
        <CreateProfileButton />
      </>
    );
  }
}

export default withRouter(EditProfile)