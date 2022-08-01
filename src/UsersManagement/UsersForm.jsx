import React, { Component } from 'react';
import axios from 'axios';
export default class UsersForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        username: '',
        fullName: '',
        password: '',
        email: '',
        phoneNumber: '',
        userType: '',
      },
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };
  handleSubmit = async (evt) => {
    evt.preventDefault();
    const { id, ...payload } = this.state.values;
    try {
      if (id) {
        await axios.put(
          `https://62b579ecda3017eabb1b8353.mockapi.io/api/ClassComponent-Users/${id}`,
          payload
        );
      } else {
        await axios.post(
          'https://62b579ecda3017eabb1b8353.mockapi.io/api/ClassComponent-Users',
          payload
        );
      }

      this.setState({
        values: {
          username: '',
          fullName: '',
          password: '',
          email: '',
          phoneNumber: '',
          userType: '',
        },
      });
      this.props.onSuccess();
    } catch (error) {
      console.log(error);
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.user && this.props.user !== prevProps.user) {
      this.setState({ values: { ...this.props.user } });
    }
  }
  render() {
    const { values } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            className="form-control"
            value={values.username}
            onChange={this.handleChange}
            name="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            id="fullName"
            className="form-control"
            value={values.fullName}
            onChange={this.handleChange}
            name="fullName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            className="form-control"
            value={values.password}
            onChange={this.handleChange}
            name="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            className="form-control"
            value={values.email}
            onChange={this.handleChange}
            name="email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            id="phone"
            className="form-control"
            value={values.phoneNumber}
            onChange={this.handleChange}
            name="phoneNumber"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userType" className="form-label">
            User Type
          </label>
          <input
            id="userType"
            className="form-control"
            value={values.userType}
            onChange={this.handleChange}
            name="userType"
          />
        </div>
        <button className="btn btn-dark">Submit</button>
      </form>
    );
  }
}
