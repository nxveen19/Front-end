import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      gender: 'male',
      bio: '',
      role: 'frontend developer',
      techSkills: {
        python: false,
        express: false,
        mongodb: false,
        nodejs: false,
        kotlin: false,
        shell: false,
        go: false,
        rust: false,
      },
      teamOption: 'create',
      teamName: '',
      joinCode: '',
      agreeTerms: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    if (type === 'checkbox') {
      if (name === 'agreeTerms') {
        this.setState({ [name]: checked });
      } else {
        this.setState((prevState) => ({
          techSkills: {
            ...prevState.techSkills,
            [name]: checked,
          },
        }));
      }
    } else {
      this.setState({ [name]: value });
    }
  };
  

  handleTeamOptionChange = (event) => {
    this.setState({ teamOption: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic h
    console.log(this.state);
  };

  handleResetForm = () => {
    this.setState({
      name: '',
      email: '',
      gender: 'male',
      bio: '',
      role: 'frontend developer',
      techSkills: {
        python: false,
        express: false,
        mongodb: false,
        nodejs: false,
        kotlin: false,
        shell: false,
        go: false,
        rust: false,
      },
      teamOption: 'create',
      teamName: '',
      joinCode: '',
      agreeTerms: false,
    });
  };

  render() {
    return (
      <div className="registration-form">
        <h1>Hackathon Registration</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={this.state.gender === 'male'}
                  onChange={this.handleInputChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={this.state.gender === 'female'}
                  onChange={this.handleInputChange}
                />
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              value={this.state.bio}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={this.state.role}
              onChange={this.handleInputChange}
            >
              <option value="frontend developer">Frontend Developer</option>
              <option value="backend developer">Backend Developer</option>
              <option value="mobile developer">Mobile Developer</option>
              <option value="designer">Designer</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="techSkills">Tech Skills:</label>
            <div className="checkbox-group">
              {Object.entries(this.state.techSkills).map(([key, value]) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    name={key}
                    checked={value}
                    onChange={this.handleInputChange}
                  />
                  {key}
                </label>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Team Option:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="teamOption"
                  value="create"
                  checked={this.state.teamOption === 'create'}
                  onChange={this.handleTeamOptionChange}
                />
                Create a Team
              </label>
              <label>
                <input
                  type="radio"
                  name="teamOption"
                  value="join"
                  checked={this.state.teamOption === 'join'}
                  onChange={this.handleTeamOptionChange}
                />
                Join a Team
              </label>
            </div>
          </div>
          {this.state.teamOption === 'create' && (
            <div className="form-group">
              <label htmlFor="teamName">Team Name:</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={this.state.teamName}
                onChange={this.handleInputChange}
              />
            </div>
          )}
          {this.state.teamOption === 'join' && (
            <div className="form-group">
              <label htmlFor="joinCode">Enter Team Code:</label>
              <input
                type="text"
                id="joinCode"
                name="joinCode"
                value={this.state.joinCode}
                onChange={this.handleInputChange}
              />
            </div>
          )}
          <div className="form-group">
  <label>
    <input
      type="checkbox"
      name="agreeTerms"
      checked={this.state.agreeTerms}
      onChange={this.handleInputChange}
      required
    />
    <span>I agree to terms and conditions</span>
  </label>
</div>


          <div className="form-group">
            <button type="submit">Submit</button>
            <button type="button" onClick={this.handleResetForm}>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
