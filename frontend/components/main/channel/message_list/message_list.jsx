import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import slackSloth from '/../../../../../../app/assets/images/SlackSloth.jpg' TODO

class MessageList extends React.Component {

  componentDidMount() {
    this.props.fetchMessages();
    this.props.fetchUsers();
    this.scrollToBottom();
    // const messages = this.props.getChannelMessages; //TODO: this can be done more efficiently
    // if (messages.length > 0 && messages[messages.length - 1].image_url) {
    //   this.lastElIsImage = true;
    // }
    // this.scrollToBottom();
  }

  componentDidUpdate() {
    const messages = this.props.getChannelMessages; //TODO: this can be done more efficiently
    if (messages.length > 0) {
      const chatHtml = document.getElementById(`chat_${messages[messages.length - 1].id}`)
      if (chatHtml && messages[messages.length - 1].image_url) {
        chatHtml.scrollIntoView({ behavior: "auto", inline: "center" });
        
        // setTimeout(function(that) {
        //     that.el.scrollIntoView({ behavior: "auto" });
        //   }, 3000, this);
      } else {
        this.scrollToBottom();
      }
    } else {
      this.scrollToBottom();
    }
  }

  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    // this.lastElIsImage = false;
  }

  renderChatLog(source) {
    // console.log('renderChatLog')
    // console.log('source' + source)
    let userBlockArrs = [];
    let userBlockArr = [];
    // debugger;
    // if (source.length > 0) {debugger;}
    source.forEach(message => {
      if (userBlockArr.length === 0) {userBlockArr.push(message);
      } else if (message.author_id === userBlockArr.slice(-1)[0].author_id) {
        userBlockArr.push(message);
      } else {
        userBlockArrs.push(userBlockArr);
        userBlockArr = [message];
      }
    });
    if (userBlockArr.length > 0) { userBlockArrs.push(userBlockArr);}
    // if (userBlockArrs.length > 0) {debugger;}
    let res = userBlockArrs.map(userBlock => {
      const author_id = this.props.users[userBlock[0].author_id].username;
      let created_at = new Date(userBlock[0].created_at);
      created_at = created_at.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});

      let first_message = userBlock[0].content;
      if (userBlock[0].content) {
        first_message = userBlock[0].content;
      } else {
        first_message = <img src={userBlock[0].image_url} />;
      }

      const rest_messages = userBlock.slice(1).map(msg => {
        return <div key={`chat_${msg.id}`} id={`chat_${msg.id}`} className="chat-message">
            {msg.content ? msg.content : <img src={msg.image_url} />}
          </div>;
      });

      return (
        <section key={`section_${userBlock[0].id}`} className='chat-section'>
          <div className='chat-message-header'>
            <img className='profile-pic' src='https://lh3.googleusercontent.com/7_oM7ibjp1PjE402kQH7lxQmWuG2yIS0UsUAqgMMMmxNLXBq3TBOExoEjtbDJvMzC-zYCexs-PmSDO3z_mJkKp3Vww1Yny7fu1sGgjQOUDUttxtOyjXkPplmbFI2OonypQSIQetgDwmWpZBWRKq2VZpSPk5VjwixJXnBDsHLWXHGMslp3_VmujDwHnxwObmVAZKDMnwSKf5-dP_Hp8yMfN9grV_mvRC059wacl6iQGVWPinFNBCzICKk7fAOHE7gSb4eHie2alaFMhD8M0RtjWARA3KzBpp66SdlzK-855UiN8ion9o5zIfGizgnzP3C_pzYkNFtn3-D1nqZaQKPIg2v9O4-j7iYI8qH5e69dRiKPZidIRrbf6URSdQLPF0egcnr_jDsCECi7bY3a2IS3YA3NcMqQKogxyMWSa0Bedn_8_DRCD2AgHaCTAhmh1QRRK0nAKrswx1YWgozdGMPuxdFS9UnbBPVh5fGtURFY_evyvcBEzVD8QNMg3rVvw3RiiJsf0Gy0k7QpEq-iRX_Na4VaRC-OYnf9pbOhwp0Ndou7Z3jBFaTirqkOgxFQe51JD0tP8zHSpveqtd5VVkWkCcXZQS4ulpNiEqOBWC-pF4Ed2Sg1U_sMjNbpJbkOFl7=s892-no'
              alt='SlackSloth'
              height='44'
              width='44' />
            <div>
              <div className='chat-author-and-created-at-container'>
                <span className='chat-author'>{ author_id }</span>
                <span className='chat-created-at'>{ created_at }</span>
              </div>
              <div className='chat-message-first'>{ first_message }</div>
            </div>
          </div>
          {rest_messages}
        </section>
      );
    }, this);
    return (
      <div>
        {res}
      </div>
    );
    //   return (
    //     <li key={`chat_${message.id}`}>
    //       <span className='chat-author'>{ message.author_id }</span>
    //       <span className='chat-message'>{ message.content }</span>
    //       <span className='chat-created-at'>{ message.created_at }</span>
    //     </li>
    //   );
    // });
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: "smooth" });
    // if (this.lastElIsImage) {
    //   this.el.scrollIntoView({ behavior: 'auto' });
    // } else {
    //   this.el.scrollIntoView({ behavior: 'smooth' });
    // }
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
