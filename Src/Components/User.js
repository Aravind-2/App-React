import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      location:null,
      avatar_url:null,
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Aravind-2");
    const json = await data.json();
    console.log(json)
    this.setState(json);
  }
  render() {
    return (
      <div className="user-card">
        <img src={this.state.avatar_url}></img>
        <h2>{this.state.name}</h2>
        <h2>{this.state.location}</h2>
      </div>
    );
  }
}

export default User;
