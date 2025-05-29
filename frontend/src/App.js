import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SlackDashboard() {
  const [users, setUsers] = useState([]);
  const [license, setLicense] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [isLoadingLicense, setIsLoadingLicense] = useState(true);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchUsers();
    fetchLicense();
  }, []);

  const fetchUsers = () => {
    setIsLoadingUsers(true);
    fetch("http://localhost:5000/api/slack/users.list")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setIsLoadingUsers(false));
  };

  const fetchLicense = () => {
    fetch("http://localhost:5000/api/slack/license.info")
      .then((res) => res.json())
      .then((data) => setLicense(data))
      .finally(() => setIsLoadingLicense(false));
  };

  const handleUserClick = (userId) => {
    fetch(`http://localhost:5000/api/slack/users.info?user=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedUser(data);
        setEditMode(true);
        setNewName(data.name);
        setNewEmail(data.email);
      })
      .catch((err) => console.error(err));
  };

  const handleAddUser = () => {
    if (!newName || !newEmail) {
      alert("Please enter name and email");
      return;
    }

    fetch("http://localhost:5000/api/slack/users.add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName, email: newEmail }),
    })
      .then((res) => res.json())
      .then((_data) => {
        fetchUsers();
        setNewName("");
        setNewEmail("");
      })
      
      .catch((err) => console.error("Add User Error:", err));
  };

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/api/slack/users.remove?user=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        fetchUsers();
        setSelectedUser(null);
      })
      .catch((err) => console.error("Delete Error:", err));
  };

  const handleUpdateUser = () => {
    if (!selectedUser || !newName || !newEmail) {
      alert("Select a user and enter new name/email");
      return;
    }

    fetch("http://localhost:5000/api/slack/users.update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: selectedUser.id,
        name: newName,
        email: newEmail,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchUsers();
        setSelectedUser(null);
        setNewName("");
        setNewEmail("");
        setEditMode(false);
      })
      .catch((err) => console.error("Update Error:", err));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h1 className="mb-4">Slack Mock Dashboard</h1>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">License Info</h5>
          {isLoadingLicense ? (
            <p>Loading license info...</p>
          ) : license ? (
            <ul>
              <li>Total Licenses: {license.totalLicenses}</li>
              <li>Used Licenses: {license.usedLicenses}</li>
              <li>Available Licenses: {license.availableLicenses}</li>
              <li>License Key: {license.licenseKey}</li>
              <li>Expiration Date: {license.expirationDate}</li>
              <li>License Type: {license.licenseType}</li>
              <li>Support Contact: {license.supportContact}</li>
            </ul>
          ) : (
            <p>No license info available</p>
          )}
        </div>
      </div>

      <input
        className="form-control mb-3"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{editMode ? "Edit User" : "Add New User"}</h5>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          {editMode ? (
            <button className="btn btn-warning me-2" onClick={handleUpdateUser}>
              Update User
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleAddUser}>
              Add User
            </button>
          )}
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">All Users</h5>
          {isLoadingUsers ? (
            <p>Loading users...</p>
          ) : (
            <ul className="list-group">
              {filteredUsers.map((user) => (
                <li
                  key={user.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span onClick={() => handleUserClick(user.id)} style={{ cursor: "pointer" }}>
                    {user.name} - {user.email}
                  </span>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
