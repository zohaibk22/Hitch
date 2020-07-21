import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './ProfilePic.css'
import SvgIcons from '../../shared/SVGIcons/SvgIcons'
import axios from 'axios'

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

class ProfilePic extends Component {
  constructor(props) {
    super(props);
    this.state = {
        profilePicture: '',
      }
  }
  async componentDidMount() {
    let { id } = this.props.match.params
    const res = await axios(`https://hitch-account-info.herokuapp.com/api/profile/${id}`)
    this.setState({
      profilePicture: res.data.profilePicture
    })
  }
  render() {
    return (
      <>
        <button className='circle'>
          <div className='head'></div>
          <div className='shoulder'></div>
          <div className='cameraC'>
            <div style={styles}>
              <SvgIcons name='camera'
                width={39}
                fill='#051d54' />
            </div>
          </div>
        </button>
        <div className='picMenu'>
          <div className='imgInput'>
            <label className='imgL'>please enter the url for your profile image</label>
            <input className='imgI' value={this.state.profilePicture}></input>
            <button className='imgB'>Submit</button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ProfilePic);




