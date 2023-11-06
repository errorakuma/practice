import { io } from "socket.io-client";
import React, { useEffect, useState } from "react";
import moment from "moment";

const generateRandomUsername = () => {
  return `User#${Math.floor(1000 + Math.random() * 9000)}`;
};
const username = prompt("What is your username") || generateRandomUsername();
const socket = io("http://localhost:5001", {
  transports: ["websocket", "polling"],
});

const Client = () => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("username", username);
    });

    socket.on("users", (users) => {
      setUsers(users);
    });

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("connected", (user) => {
      setUsers((prevUsers) => [...prevUsers, user]);
    });
    socket.on("disconnected", (id) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      //   setDis((prevUsers) => [...prevUsers, id]);
    });
  }, [username]);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("send", message);
    setMessage("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4 mb-4">
          <h6>Hello {username}</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <h6>Messages</h6>

          <div id="messages">
            {messages.map(({ user, date, text }, index) => (
              <div key={index} className="message-container">
                <div className="message-details">
                  <div className="message-time">
                    {moment(date).format("h:mm:ss a")}
                  </div>
                  <div className="message-text">{text}</div>
                  <div
                    className="message-user"
                    style={{
                      backgroundColor: users.some((u) => u.id === user.id)
                        ? "green"
                        : "red",
                    }}
                  >
                    {user.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} id="form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}
                id="text"
              />
              <span className="input-group-btn">
                <button id="submit" type="submit" className="btn btn-primary">
                  Send
                </button>
              </span>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <h6>Users</h6>
          <ul id="users">
            {users.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Client;
