import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class MessageList extends React.Component {

  componentDidMount() {
    this.props.fetchMessages();
  }

  constructor(props) {
    super(props);
  }

  renderChatLog(source) {
    // console.log('renderChatLog')
    // console.log('source' + source)
    return source.map((el) => {
      return (
        <li key={`chat_${el.id}`}>
          <span className='chat-author'>{ el.author_id }</span>
          <span className='chat-message'>{ el.content }</span>
          <span className='chat-created-at'>{ el.created_at }</span>
        </li>
      );
    });
  }

  render() {
    let channelName = '';
    if (this.props.channel) {
      channelName = this.props.channel.name;
    }
    // console.log(this.props.getChannelMessages)
    return (
      <div>
        <h1>{channelName}</h1>
        <ul className='chat-logs'>
          { this.renderChatLog(this.props.getChannelMessages) }
        </ul>
      </div>
    );
  }
}
// { this.renderChatLog(this.props.chatLogsState.chatLogs) }

export default withRouter(MessageList);
