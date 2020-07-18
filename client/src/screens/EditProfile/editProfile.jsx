import React, { Component } from 'react';
import CreateProfileButton from '../../components/EditProfile/Button/CreateProfileButton'
// import { updateProfile } from '../../services/profile'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './editProfile.css'
import Heading from '../../components/EditProfile/Heading/Heading'

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
    const profile = await axios.put(`https://hitch-account-info.herokuapp.com/api/profile/${id}`, this.state.profile)
    console.log(profile)
  }
  render() {
    const { profile } = this.state
    console.log(profile.fullName)
    return (
      <>
        <Heading />
        <form className='editForm' onSubmit={this.handleSubmit}>
          <div className='formC'>
            <div className='formItem'>
              <label>Full Name:</label>
              <div className='inputC'>
                <input type='text' id='fullName' name='fullName'
                  value={profile.fullName} onChange={this.handleChange}></input>
              </div>
            </div>
            <div className='formItem'>
              <label>Hometown:</label>
              <div className='inputC'>
                <input type='text' id='hometown' name='hometown'
                  defaultValue={profile.hometown} onChange={this.handleChange}></input>
              </div>
            </div>
          </div>
          <div className='formC'>
            <div className='formItem'>
              <label>School:</label>
              <div className='inputC'>
                <input type='text' id='school' name='school'
                  defaultValue={profile.school} onChange={this.handleChange}></input>
              </div>
            </div>
            <div className='formItem'>
              <label>Major:</label>
              <div className='inputC'>
                <input type='text' id='major' name='major'
                  defaultValue={profile.major} onChange={this.handleChange}></input>
              </div>
            </div>
          </div>
          <div className='formC'>
            <div className='formItem'>
              <label>Graduation Year:</label>
              <div className='inputC'>
                <input type='text' id='gradYear' name='gradYear'
                  defaultValue={profile.graduationYear} onChange={this.handleChange}></input>
              </div>
            </div>
            <div className='formItem'>
              <label>Age:</label>
              <div className='inputC'>
                <input type='text' id='age' name='age'
                  defaultValue={profile.age} onChange={this.handleChange}></input>
              </div>
            </div>
          </div>
          <div className='bio'>
            <label>Bio:</label>
            <div className='bioInputC'>
              <textarea type='text' id='bio' name='bio' className='bioInput'
                defaultValue={profile.bio} onChange={this.handleChange}></textarea>
            </div>
          </div>
          <CreateProfileButton />
        </form>
      </>
    );
  }
}

export default withRouter(EditProfile)