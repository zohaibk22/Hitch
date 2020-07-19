import React, { Component } from 'react';
import { getProfile, updateProfile } from '../../../services/profile'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  async componentDidMount() {
    // let { id } = 
    // const profile = await getProfile(id)
    // this.setState({ profile })
  }
  render() {
    return (
      <div className='form'>
        <div classname='formC'>
          <div className='formItem'>
            <label for='fullName'>Full Name:</label>
            <input type='text' id='fullName' name='fullName'></input>
          </div>
          <div className='formItem'>
            <label for='hometown'>Hometown:</label>
            <input type='text' id='hometown' name='hometown'></input>
          </div>
        </div>
        <div classname='formC'>
          <div className='formItem'>
            <label for='school'> School:</label>
            <input type='text' id='school' name='school' ></input>
          </div>
          <div className='formItem'>
            <label for='major'>Major:</label>
            <input type='text' id='major' name='major'></input>
          </div>
        </div>
        <div classname='formC'>
          <div className='formItem'>
            <label for='gradYear'>Graduation Year:</label>
            <input type='text' id='gradYear' name='gradYear'></input>
          </div>
          <div className='formItem'>
            <label for='age'>Age:</label>
            <input type='text' id='age' name='age'></input>
          </div>
        </div>
        <div className='bio'>
          <label for='bio'>Bio:</label>
          <input type='text' id='bio' name='bio'></input>
        </div>
      </div>
    );
  }
}

export default Form;