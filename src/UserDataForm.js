import React, { Component } from 'react'

class UserDataForm extends Component {
  constructor(props){
    super(props)
    this.state = props.userData
  }
  handleChange(event){
    const target = event.target
    const attribute = target.name
    this.setState({[attribute]: event.target.value})
  }
  handleSubmit(event){
    this.props.userData(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div>
            <label>First Name
              <input
                name='firstName'
                type='text'
                value={this.props.firstName}
                onChange={this.handleChange.bind(this)}
                className='form-control'
              />
            </label>
          </div>
          <div>
            <br />
            <label>Last Name

              <input
                name='LastName'
                type='text'
                value={this.props.LastName}
                onChange={this.handleChange.bind(this)}
                className='form-control'
              />

            </label>
          </div>
          <div>
            <br />
            <label>Email

              <input
                name='Email'
                type='text'
                value={this.props.email}
                onChange={this.handleChange.bind(this)}
                className='form-control'
              />

            </label>
          </div>
          <div>
            <br />
            <label>

              <input
                type='submit'
                value='Submit'
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default UserDataForm;
