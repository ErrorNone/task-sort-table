import React from "react";
import Table from "react-bootstrap/Table";

const MyTable = ({ users }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>id</th>
          <th>birthday</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>phone</th>
          <th>website</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.birthday}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;
