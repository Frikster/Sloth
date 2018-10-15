import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import MessageListContainer from './message_list/message_list_container';

class MessageForm extends React.Component {

  componentWillMount() {
    this.createSocket();
  }

  constructor(props) {
    super(props);
    this.state = {
      currentChatMessage: '',
      // chatLogs: []
    };
  }

  updateCurrentChatMessage(event) {
    this.setState({
      currentChatMessage: event.target.value
    });
  }

  createSocket() {
    let cable = ActionCable.createConsumer('ws://localhost:3001/cable');
    this.chats = cable.subscriptions.create({
      channel: 'ChatChannel'
    }, {
      connected: () => {},
      received: (data) => {
        // debugger
        this.props.newMessage(data)
        // let chatLogs = this.state.chatLogs;
        // chatLogs.push(data);
        // setState({chatLogs: chatLogs});
      },
      create: function(chatContent, authorId, channelId) {
        this.perform('create', {
          content: chatContent,
          author_id: authorId,
          channel_id: channelId
        });
      }
    });
  }

  handleSendEvent(event) {
    event.preventDefault();
    this.chats.create(
      // this.props.createMessage, TODO: How to add chat to state??
      this.state.currentChatMessage,
      this.props.currentUser.id,
      this.props.channel.id);
    this.setState({
      currentChatMessage: ''
    });
    // console.log('FORM STATE CHANGE')
    // console.log(this.state)
  }

  handleChatInputKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSendEvent(event);
    }
  }

  renderChatLog() {
    // console.log('this.props.chatLogs' + this.state.chatLogs)
    return this.state.chatLogs.map((el) => {
      // console.log('el.content' + el.content);
      return (
        <li key={`chat_${el.id}`}>
          <span className='chat-message'>{ el.content }</span>
          <span className='chat-created-at'>{ el.created_at }</span>
        </li>
      );
    });
  }

  render() {
    // <h1>Chat</h1>
    // <ul className='chat-logs'>
    //   { this.renderChatLog() }
    // </ul>
    // <MessageListContainer chatLogs={this.state.chatLogs} />

    let channelName = '';
    if (this.props.channel) {
      channelName = this.props.channel.name;
    }

    return (
      <div>
        <div className='chat-stage'>

          <MessageListContainer />

          <div className='chat-input-container'>
            <input
              onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
              value={ this.state.currentChatMessage }
              onChange={ (e) => this.updateCurrentChatMessage(e) }
              type='text'
              placeholder={'Message #' + channelName}
              className='chat-input' />
          </div>
        </div>
      </div>
    );
  }
}

// <MessageListContainer chatLogsState={this.state} />


// <button
//   onClick={ (e) => this.handleSendEvent(e) }
//   className='send'>
//   Send
// </button> Button not needed

export default withRouter(MessageForm);
