import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList from './UsersList';
import UsersForm from './UsersForm';
import axios from 'axios';
export default class UsersManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      // selectedUser: null,
    };
  }
  fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        'https://62b579ecda3017eabb1b8353.mockapi.io/api/ClassComponent-Users'
      );
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  };
  // fetchDeleteUsers = async (userId) => {
  //   try {
  //     const { selectedUser } = await axios.delete(
  //       `https://62b579ecda3017eabb1b8353.mockapi.io/api/ClassComponent-Users/${userId}`
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <h1 className="text-center text-primary mt-4"> Users Management </h1>
        <div className="card mb-5">
          <div className="card-header bg-dark text-white">
            <strong> User Form</strong>
          </div>
          <div className="card-body">
            <UsersForm />
          </div>

          <div className="card-header bg-dark text-white">
            <strong> User List</strong>
          </div>
          <div className="card-body">
            <UsersList users={users} onDeleteSuccess={this.fetchUsers} />
          </div>
        </div>
      </div>
    );
  }
}
