import React, { Component } from "react";
import { getProfile } from "../../services/profile";

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
    };
  }

  componentDidMount = async () => {
    const data = await getProfile();
    console.log(data);
  };
  render() {
    return <div></div>;
  }
}
