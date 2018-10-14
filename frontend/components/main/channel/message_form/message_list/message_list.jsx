import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class MessageList extends React.Component {

  constructor(props) {
    super(props);
  }

  renderChatLog() {
    console.log('this.props.chatLogsState' + this.props.chatLogsState)
    return this.props.chatLogsState.chatLogs.map((el) => {
      console.log('el.content' + el.content);
      return (
        <li key={`chat_${el.id}`}>
          <span className='chat-message'>{ el.content }</span>
          <span className='chat-created-at'>{ el.created_at }</span>
        </li>
      );
    });
  }

  render() {
    console.log('MESSAGE LIST RENDER')
    return (
      <div>
        <h1>Chat</h1>
        <ul className='chat-logs'>
          { this.renderChatLog() }
        </ul>
      </div>
    );
  }
}

export default withRouter(MessageList);
