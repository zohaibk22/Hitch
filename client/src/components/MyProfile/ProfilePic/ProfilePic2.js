import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './ProfilePic2.css'
import { getProfile } from '../../../services/profile'

//The code that renders the SVG files comes from a
//tutorial that can be found at the following url:
//https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between"
};

class ProfilePic2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicture: '',
      show: false
    }
  }
  async componentDidMount() {
    let { id } = this.props.match.params
    const res = await getProfile(id)
    console.log(res)
    this.setState({
      profilePicture: res.profilePicture
    })
  }
  render() {
    const pic = this.state.profilePicture
    return (
      <>

        {pic ?
          <div className='circle2'
            style={{
              backgroundImage: `url(${pic})`
            }}>
          </div>
          :
          <div className='circle3'
            style={{
              background: 'transparent'
            }}>
          </div>}
      </>
    );
  }
}

export default withRouter(ProfilePic2);




