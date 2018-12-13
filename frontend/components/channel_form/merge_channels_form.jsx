import React from 'react';
import { withRouter, Redirect } from 'react-router';

class MergeChannelsForm extends React.Component {

    componentWillMount() {
        this.toMergeWithChannel = document.elementFromPoint(0, this.draggedChannelY);
        this.props.fetchMessages();
        this.props.fetchChannels();
        this.props.fetchUserChannels();
    }

    constructor(props) {
        super(props);
        this.draggedChannel = document.getElementsByClassName("react-draggable-dragged")[0];
        this.draggedChannelY = this.draggedChannel.getBoundingClientRect().y;
        this.draggedChannel.style.webkitTransform = "translate(0px, 0px)"
        this.draggedChannel.style.transform = "translate(0px, 0px)";
        this.state = {
            newChannelName: '',
            directMessageChannel: false,
        };
        this.handleMergeChannelsSubmit = this.handleMergeChannelsSubmit.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    };

    handleMergeChannelsSubmit(e) {
        this.messages = this.props.getMergedMessages(this.draggedChannel.innerText, this.toMergeWithChannel.innerText);
        this.props
          .createChannel({
            name: this.state.newChannelName,
            direct_message_channel: this.state.directMessageChannel
          })
          .then(res => {
            this.messages.forEach(msg => {
              this.props.createMessage({
                content: msg.content,
                channel_id: res.payload.channel.id,
                image_url: msg.image_url,
                created_at: msg.created_at
              });
            });
          });

        this.props.closeModal();
    }

    render() {
        if (this.toMergeWithChannel.classList[0] === "react-draggable" || this.toMergeWithChannel.nodeName.toLowerCase() !== "li") {
          this.props.closeModal();
          return <div />;
        } else {
          return <div className="merge-channels-form-div">
              <h1>Are you sure you wish to merge these channels?</h1>
              <form onSubmit={this.handleMergeChannelsSubmit}>
                <input className="merge-channels-new-channel-name-input" type="text" value={this.state.newChannelName} onChange={this.update("newChannelName")} placeholder="New Merged Channel Name" />
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round" />
                </label>
                Private Channel
                {/* <div className='modal-checkbox-div'>
                        <input type="checkbox" className="modal-checkbox" name="merge-private-channel-checkbox"
                        onChange={this.update("newChannelName")}
                                value={this.state.directMessageChannel} />  
                        <label className="modal-checkbox-label" for="merge-private-channel-checkbox">
                            New Merged Channel is Private
                        </label>
                  </div> */}
                <input type="submit" value="GO" />
              </form>
              {/* <ul className='join-channel-form-publicChannel-ul'>
                                {publicChannels}
                            </ul> */}
            </div>;
        }
    }
}

export default withRouter(MergeChannelsForm);
