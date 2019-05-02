import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import slackSloth from '/../../../../../../app/assets/images/SlackSloth.jpg' TODO

class MessageList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchMessages(); // api/channels/:channelId/messages
    this.scrollToBottom();
    // const messages = this.props.getChannelMessages; //TODO: this can be done more efficiently
    // if (messages.length > 0 && messages[messages.length - 1].image_url) {
    //   this.lastElIsImage = true;
    // }
    // this.scrollToBottom();
  }

  componentDidUpdate(beforeProps) {
    if (JSON.stringify(beforeProps.getChannelMessages) !== JSON.stringify(this.props.getChannelMessages)) {
      this.scrollToBottom();
    }


    // const messages = this.props.getChannelMessages; //TODO: this can be done more efficiently
    // if (messages.length > 0) {
    //   const lastChatHtml = document.getElementById(
    //     `chat_${messages[messages.length - 1].id}`
    //   );
    //   debugger;
    //   if (
    //     lastChatHtml &&
    //     messages[messages.length - 1].image_url &&
    //     lastChatHtml.width > 0 &&
    //     lastChatHtml.height > 0
    //   ) {
    //     this.el.scrollIntoView({ behavior: "auto" });

    //     // setTimeout(function(that) {
    //     //     that.el.scrollIntoView({ behavior: "auto" });
    //     //   }, 3000, this);
    //   } else {
    //     this.scrollToBottom();
    //   }
    // } else {
    //   this.scrollToBottom();
    // }
  }

  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.state = { finalImageStatus: "loading or nonexistent" };
    // this.messages = this.props.getChannelMessages;
    // this.lastElIsImage = false;
  }

  handleImageLoaded() {
    this.scrollToBottom();

    // if (this.messages.length > 0) {
    //   const lastChatImageHtml = document.getElementById(
    //       `chat_image_${this.messages[this.messages.length - 1].id}`
    //     ); // Retrieves the id of the last message and returns the img tag if one exists
    //   if (lastChatImageHtml && lastChatImageHtml.width > 0 && lastChatImageHtml.height > 0) {
    //     this.setState({ finalImageStatus: "loaded" });
    //   } else {
    //     this.scrollToBottom();
    //   }
    // }
  }

  renderChatLog(source) {
    // console.log('renderChatLog')
    // console.log('source' + source)
    let received_image_url = '';
    // if (source.length > 0) {
    //   debugger;
    // }
    if (source.length > 0 && Object.keys(source[source.length - 1]).length === 2 && Object.keys(source[source.length - 1])[0] === "image_url") {
      received_image_url = source[source.length - 1].image_url;
      source.pop();
      if (source.length > 0 && source[source.length - 1].content != "" && !source[source.length - 1].image_url && !source[source.length - 1].content) {
        source[source.length - 1].image_url = received_image_url;
      }
    }

    let userBlockArrs = [];
    let userBlockArr = [];
    // debugger;
    // if (source.length > 0) {debugger;}
    this.messages = source;
    source.forEach(message => {
      if (userBlockArr.length === 0) {
        userBlockArr.push(message);
      } else if (message.author_id === userBlockArr.slice(-1)[0].author_id) {
        userBlockArr.push(message);
      } else {
        userBlockArrs.push(userBlockArr);
        userBlockArr = [message];
      }
    });
    if (userBlockArr.length > 0) {
      userBlockArrs.push(userBlockArr);
    }

    let res = userBlockArrs.map(userBlock => {
      const author_username = this.props.users[userBlock[0].author_id].username;
      const profile_pic_url = this.props.users[userBlock[0].author_id].profile_pic_url;
      let created_at = new Date(userBlock[0].created_at);
      created_at = created_at.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      });
      let first_message = userBlock[0].content;
      if (userBlock[0].content) {
        first_message = userBlock[0].content;
      } else {
        first_message = <img src={userBlock[0].image_url} />;
      }

      const rest_messages = userBlock.slice(1).map(msg => {
        return (
          <div key={`chat_${msg.id}`} className="chat-message">
            {msg.content ? (
              msg.content
            ) : (
              <img
                id={`chat_image_${msg.id}`}
                src={msg.image_url}
                onLoad={this.handleImageLoaded.bind(this)}
              />
            )}
          </div>
        );
      });
      return (
        <section key={`section_${userBlock[0].id}`} className="chat-section">
          <div className="chat-message-header">

            { profile_pic_url ? 
            <img
              className="profile-pic-big"
              src={profile_pic_url}
              alt="SlackSloth"
              height="44"
              width="44"
            />
              : 
            <div
              className="profile-pic-big"
              // src="https://lh3.googleusercontent.com/7_oM7ibjp1PjE402kQH7lxQmWuG2yIS0UsUAqgMMMmxNLXBq3TBOExoEjtbDJvMzC-zYCexs-PmSDO3z_mJkKp3Vww1Yny7fu1sGgjQOUDUttxtOyjXkPplmbFI2OonypQSIQetgDwmWpZBWRKq2VZpSPk5VjwixJXnBDsHLWXHGMslp3_VmujDwHnxwObmVAZKDMnwSKf5-dP_Hp8yMfN9grV_mvRC059wacl6iQGVWPinFNBCzICKk7fAOHE7gSb4eHie2alaFMhD8M0RtjWARA3KzBpp66SdlzK-855UiN8ion9o5zIfGizgnzP3C_pzYkNFtn3-D1nqZaQKPIg2v9O4-j7iYI8qH5e69dRiKPZidIRrbf6URSdQLPF0egcnr_jDsCECi7bY3a2IS3YA3NcMqQKogxyMWSa0Bedn_8_DRCD2AgHaCTAhmh1QRRK0nAKrswx1YWgozdGMPuxdFS9UnbBPVh5fGtURFY_evyvcBEzVD8QNMg3rVvw3RiiJsf0Gy0k7QpEq-iRX_Na4VaRC-OYnf9pbOhwp0Ndou7Z3jBFaTirqkOgxFQe51JD0tP8zHSpveqtd5VVkWkCcXZQS4ulpNiEqOBWC-pF4Ed2Sg1U_sMjNbpJbkOFl7=s892-no"
              // alt="SlackSloth"
              // height="44"
              // width="44"
            />

            }
            <div className="chat-message-header-text-div">
              <div className="chat-author-and-created-at-container">
                <span className="chat-author">{author_username}</span>
                <span className="chat-created-at">{created_at}</span>
              </div>
              <div className="chat-message-first">{first_message}</div>
            </div>
          </div>
          {rest_messages}
        </section>
      );
    }, this);
    return <div>{res}</div>;
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
    this.el.scrollIntoView({ behavior: "auto" });
    // if (this.lastElIsImage) {
    //   this.el.scrollIntoView({ behavior: 'auto' });
    // } else {
    //   this.el.scrollIntoView({ behavior: 'smooth' });
    // }
  }

  render() {
    let channelName = "";
    if (this.props.channel) {
      channelName = this.props.channel.name;
    }
    // Credit: https://stackoverflow.com/a/41700815/2734863
    return (
      <div className="chat-logs">
        <h1>{channelName}</h1>
        <ul>{this.renderChatLog(this.props.getChannelMessages)}</ul>
        <div
          ref={el => {
            this.el = el;
          }}
        />
      </div>
    );
  }
}
// { this.renderChatLog(this.props.chatLogsState.chatLogs) }

export default withRouter(MessageList);
