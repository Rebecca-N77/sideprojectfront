import React, { Component } from "react";
export default class ContactUs extends Component {
  sendMessage = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.content.value);
    const body = new FormData();
    body.append("email", e.target.email.value);
    body.append("content", e.target.content.value);
    const response = await fetch("http://localhost:8000/api/messages", {
      method: "POST",
      body,
    });
    const result = await response.json();
    console.log(result);
  };
  render() {
    return (
      <>
        <form onSubmit={this.sendMessage}>
          <input name="email" type="email" placeholder="email"></input>
          <input name="content" type="text" placeholder="message"></input>
          <input type="submit" value="SEND" />
        </form>
      </>
    );
  }
}
