import axios from 'axios';
import React, { Component } from 'react';
export default class UsersList extends Component {
  handleDelete = async (userId) => {
    try {
      await axios.delete(
        `https://62b579ecda3017eabb1b8353.mockapi.io/api/ClassComponent-Users/${userId}`
      );
      this.props.onDeleteSuccess();
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { users } = this.props;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>User Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.fullName}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.userType}</td>
                <td>
                  <button className="btn btn-success me-2">Update</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.handleDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
