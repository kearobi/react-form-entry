import React, { Component } from 'react';
import UserDataForm from './UserDataForm'

class App extends Component {
  constructor(props){
    super(props)
      this.state= {
        firstName: '',
        LastName: '',
        email: '',
      }
  }

  userDataUpdated(userData){
    this.setState({userData: userData})
  }

  render() {
    return (
          <div>
          <h2>Welcome to React</h2>
          <UserDataForm
            userData={this.state.userData}
            userDataUpdated={this.userDataUpdated.bind(this)}
          />
          <UserData userData={this.state.UserData} />
          <h1>Hello{this.state.firstName}</h1>
          </div>
    );
  }
}

export default App;
