![Header](https://i0.wp.com/cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/05/Slack-796x398.jpg?ssl=1)

### Check out the [Live Site](https://app-academy-sloth.herokuapp.com/#/)!

## Technologies

* Ruby on Rails
* React
* Redux
* Websockets (ActionCable)

I'm a huge fan of [Slack](https://slack.com/) so have here set about building the core feature set of the site including Live Chat, User Authentication, Channels, Private Channels. In fact, I'm such a huge fan of Slack that I use it daily and believe there is untapped potential in reworking workspaces such that they are designed with individuals in mind instead of just for teams. 

## Notable Features 

1. Live Chat using ActionCable websockets
2. Instant Image updates uploaded from file using ActionCable 

![](app/assets/images/RealTimeMessagingShowcase.gif)


```javascript
  createSocket() {
    let cable;
    if (process.env.NODE_ENV !== 'production') {
      cable = ActionCable.createConsumer('http://localhost:3000/cable');
    } else {
      cable = ActionCable.createConsumer('wss://app-academy-sloth.herokuapp.com/cable');
    }
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
        create: function (chatContent, authorId, channelId, imageUrl, formData) {
          this.perform("create", {
            content: chatContent,
            author_id: authorId,
            channel_id: channelId,
            image_url: imageUrl,
            form_data: formData
          });
      },
        send_url: function (imageUrl) {
          this.perform("send_url", {
            image_url: imageUrl
          });
        },
    });
  }

  handleSendEvent(event) {
    event.preventDefault();

    if(this.state.currentChatMessage) {
      this.chats.create(
        // this.props.createMessage, TODO: How to add chat to state??
        this.state.currentChatMessage,
        this.props.currentUser.id,
        this.props.channel.id);
      this.setState({
        currentChatMessage: ''
      });
    }

    if (this.state.imageFile) {
      let formData = new FormData();
      formData.append("message[photo]", this.state.imageFile);
      formData.append("message[channel_id]", this.props.channel.id);
      $.ajax({
        url: '/api/messages',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
      }).then((res) => {
        // this.chats.send_url(res.message.image_url);
        this.props.history.push("/channels/" + res.message.channel_id); // I'm ashamed of this code
      });
      this.setState({ imageUrl: "", imageFile: null });
      document.getElementById("message-form-hidden-file-upload").value = null;
    }
  }
```



2. Private Channels with protected routes and a search bar for adding users to private channels. These are functionally identical to direct messaging/group messaging. The search updates users in real-time and channels are given default names if none is provided.

### Coming Soon

Gifs of working features for this production README will be added once the following feature set is complete:

1. Workspaces
2. Workspace merging
3. Workspace unmerging
4. Channel merging
5. Channel unmerging
6. User profile pictures and ability to add images/gifs to channels
