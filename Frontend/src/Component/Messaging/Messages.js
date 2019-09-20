import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class Messages extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.scrollToBottom();
    }, 1000);
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    const { messageList } = this.refs;
    const { scrollHeight } = messageList;
    const height = messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    // eslint-disable-next-line react/no-find-dom-node
    ReactDOM.findDOMNode(messageList).scrollTop =
      maxScrollTop > 0 ? maxScrollTop : 0;
  };

  render() {
    return (
      <div ref="messageList" className="container  message-container">
        {this.props.messages.map(msg => {
          return (
            <div className=" message-bar  display-message p-2  ">
              <h6>{msg.senderName}</h6>
              <h5>{msg.message}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}
