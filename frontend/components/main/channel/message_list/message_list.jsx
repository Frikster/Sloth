import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class MessageList extends React.Component {

  componentDidMount() {
    this.props.fetchMessages();
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
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

  scrollToBottom() {
    this.el.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    let channelName = '';
    if (this.props.channel) {
      channelName = this.props.channel.name;
    }
    // Credit: https://stackoverflow.com/a/41700815/2734863
    return (
      <div className='chat-logs'>
        <h1>{channelName}</h1>
        <ul >
          { this.renderChatLog(this.props.getChannelMessages) }
        </ul>
        <div ref={el => { this.el = el; }} />
      </div>
    );
  }
}
// { this.renderChatLog(this.props.chatLogsState.chatLogs) }

export default withRouter(MessageList);
