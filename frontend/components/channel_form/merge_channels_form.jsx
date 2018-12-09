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
        this.draggedChannel.style.transform = "translate(0px, 0px)";

        // debugger
        // debugger
        // const toMergeWithChannel = document.elementFromPoint(0, draggedChannelY);


        // Parse text to get transform
        // const rx = /,\s(.*)\)/;
        // const yTransform = rx.exec(draggedChannel.style.transform)[1];
        // // Move channel back to reveal channel underneath (I am well aware how much cheese is in this code)
        // debugger
        // draggedChannel.style.position = "relative";
        // draggedChannel.style.bottom = yTransform;


        // setTimeout(function (self) {
        //     self.toMergeWithChannel = document.elementFromPoint(0, draggedChannelY);
        //  }, 0, this);

        // this.state = {
        //     publicChannels: this.props.getAllPublicChannels
        // };
        // this.filterChannelList = this.filterChannelList.bind(this);
        // this.joinChannel = this.joinChannel.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    };

    // joinChannel(publicChannel) {
    //     return (e) => {
    //         const joinedChannelIds = this.props.getJoinedChannels.map(channel => channel.id)
    //         if (!joinedChannelIds.includes(publicChannel.id)) {
    //             this.props.processForm({ channel_id: publicChannel.id, user_id: this.props.currentUser.id })
    //         }
    //         this.props.history.push('/channels/' + publicChannel.id);
    //         this.props.closeModal();
    //     };
    // }

    // filterChannelList(e) {
    //     const input = e.target.value;
    //     this.setState({
    //         publicChannels: this.props.getAllPublicChannels.filter(channel => channel.name.includes(input))
    //     });
    // };

    render() {
        // const publicChannels = this.state.publicChannels.map(publicChannel => {
        //     return (<div onClick={this.joinChannel(publicChannel).bind(this)}><div className='profile-pic-small'
        //     // src='https://lh3.googleusercontent.com/7_oM7ibjp1PjE402kQH7lxQmWuG2yIS0UsUAqgMMMmxNLXBq3TBOExoEjtbDJvMzC-zYCexs-PmSDO3z_mJkKp3Vww1Yny7fu1sGgjQOUDUttxtOyjXkPplmbFI2OonypQSIQetgDwmWpZBWRKq2VZpSPk5VjwixJXnBDsHLWXHGMslp3_VmujDwHnxwObmVAZKDMnwSKf5-dP_Hp8yMfN9grV_mvRC059wacl6iQGVWPinFNBCzICKk7fAOHE7gSb4eHie2alaFMhD8M0RtjWARA3KzBpp66SdlzK-855UiN8ion9o5zIfGizgnzP3C_pzYkNFtn3-D1nqZaQKPIg2v9O4-j7iYI8qH5e69dRiKPZidIRrbf6URSdQLPF0egcnr_jDsCECi7bY3a2IS3YA3NcMqQKogxyMWSa0Bedn_8_DRCD2AgHaCTAhmh1QRRK0nAKrswx1YWgozdGMPuxdFS9UnbBPVh5fGtURFY_evyvcBEzVD8QNMg3rVvw3RiiJsf0Gy0k7QpEq-iRX_Na4VaRC-OYnf9pbOhwp0Ndou7Z3jBFaTirqkOgxFQe51JD0tP8zHSpveqtd5VVkWkCcXZQS4ulpNiEqOBWC-pF4Ed2Sg1U_sMjNbpJbkOFl7=s892-no'
        //     // alt='SlackSloth'
        //     />
        //         <li key={`public_channel_${publicChannel.id}`}>{publicChannel.name}</li>
        //     </div>);
        // });
        const messages = this.props.getMergedMessages(this.draggedChannel.innerText, this.toMergeWithChannel.innerText);
        debugger
        if(false) {
            this.props.closeModal();
            return <div></div>
        }
        else {
            return (
                    <div className='merge-channels-form-div'>
                        <h1>Are you sure you wish to merge these channels?</h1>
                        <input
                            className='merge-channels-new-channel-name-input'
                            type='text'
                            placeholder='Merged Channel Name' />
                        {/* <ul className='join-channel-form-publicChannel-ul'>
                                {publicChannels}
                            </ul> */}
                    </div>
                );
        }
    }
}

export default withRouter(MergeChannelsForm);
