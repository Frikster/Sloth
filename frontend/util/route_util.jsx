import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {fetchUserChannels} from '../actions/userChannel_actions';
import {getJoinedChannels} from '../reducers/selectors';

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/channels/1' />
    )
  )}/>
);

class Protected extends React.Component {

  componentDidMount() {
    this.props.fetchUserChannels();
  }

  constructor(props) {
    super(props);
    this.ProtectedLogin = this.ProtectedLogin.bind(this);
    this.ProtectedChannel = this.ProtectedChannel.bind(this);
  }

  ProtectedLogin({component: Component, path, loggedIn, exact}) {
    return <Route path={path} exact={exact} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    )}/>;
  }

  ProtectedChannel({component: Component, path, exact, match}, channelIds) {
    // debugger
    return <Route path={path} exact={exact} render={(props) => {
      // debugger
      return (channelIds.includes(props.match.params.channelId) ? (
        <Component {...props} />
      ) : (
        <Redirect to={`/channels/${channelIds[0]}`} />
      ));
    }}/>;
  }

  render() {
    if (!this.props.joinedChannels || this.props.joinedChannels.length === 0 || !this.props.loggedIn) {
      return this.ProtectedLogin(this.props);
    }
    const channelIds = this.props.joinedChannels.map(channel => channel.id.toString());
    return this.ProtectedChannel(this.props, channelIds);
  };
};

const mapStateToProps = state => {
  const loggedIn = Boolean(state.session.id);
  return {
    loggedIn: Boolean(state.session.id),
    joinedChannels: loggedIn ? getJoinedChannels(state) : null,
  };
};

const mdp = dispatch => {
  return {
    fetchUserChannels: () => {
      return dispatch(fetchUserChannels());
    }
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, mdp)(Protected));


// TODO why withRouter, why props?
// this is a react container so autmatically gets props from where it is called
// withRouter ensures that props can be passed down to any containers inside
// of this container. i.e. the Component passed to this container may itself be a container
//
// import React from 'react';
// import { connect } from 'react-redux';
// import { Route, Redirect, withRouter } from 'react-router-dom';
// import {fetchUserChannels} from '../actions/userChannel_actions';
// import {getJoinedChannels} from '../reducers/selectors';
//
// const Auth = ({component: Component, path, loggedIn, exact}) => {
//   return <Route path={path} exact={exact} render={(props) => (
//     !loggedIn ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to='/channels/1' />
//     )
//   )}/>;
// };
//
// // const Protected = ({component: Component, path, loggedIn, exact}) => {
// //   return <Route path={path} exact={exact} render={(props) => {
// //     // debugger
// //     return (loggedIn ? (
// //       <div><Component {...props} /></div>
// //     ) : (
// //       <Redirect to='/login' />
// //     ));
// //   }}/>;
// // };
//
// class Protected extends React.Component {
//
//   componentDidMount() {
//     this.props.fetchUserChannels();
//   }
//
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     const {component: Component, ...props} = this.props;
//     const loggedIn = props.loggedIn;
//     const channelIds = props.joinedChannels.map(channel => channel.id.toString());
//     return (<Route path={props.path} exact={props.exact} render={(props) => {
//       let res = <Component {...props} />;
//       debugger
//       if (!loggedIn) {
//         res = <Redirect to='/login' />;
//       } else if (channelIds.length > 0 && !channelIds.includes(props.match.params.channelId)) {
//         res = <Redirect to='/channels/1' />;
//       }
//       return (
//         <div>{res}</div>
//       );
//     }}/>);
//   };
// };
//
// class Protected extends React.Component {
//
//   componentDidMount() {
//     this.props.fetchUserChannels();
//   }
//
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     const {component: Component, ...props} = this.props;
//     if (!props.loggedIn || props.joinedChannels.length === 0) {
//       return null;
//     }
//     const channelIds = props.joinedChannels.map(channel => channel.id.toString());
//     let res = <Component {...props} />;
//     return (<Route path={this.props.path} exact={this.props.exact} render={(props) => {
//         if (!channelIds.includes(props.match.params.channelId) && typeof props.match.params.channelId !== 'undefined') {
//           res = <Redirect to='/channels/1' />;
//         }
//         return (
//           <div>
//             {res}
//           </div>
//         );
//       }}/>);
//   }
// };
//
// const mapStateToProps = (state) => {
//   return {
//     loggedIn: Boolean(state.session.id),
//     joinedChannels: getJoinedChannels(state),
//   };
// };
//
// const mdp = dispatch => {
//   return {
//     fetchUserChannels: () => {
//       return dispatch(fetchUserChannels());
//     }
//   };
// };
//
// export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
// export const ProtectedRoute = withRouter(connect(mapStateToProps, mdp)(Protected));
// // export const ProtectedChannelRoute = withRouter(connect(mapStateToProps, mdp)(ProtectedChannel));
//
// // TODO why withRouter, why props?
// // this is a react container so autmatically gets props from where it is called
// // withRouter ensures that props can be passed down to any containers inside
// // of this container. i.e. the Component passed to this container may itself be a container
