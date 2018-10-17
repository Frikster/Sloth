import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PublicChannelFormContainer from '../channel_form/public_channel_form_container';
import PrivateChannelFormContainer from '../channel_form/private_channel_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'new_public_channel':
      component = <PublicChannelFormContainer />;
      break;
    case 'new_private_channel':
      component = <PrivateChannelFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className='modal-background' onClick={closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
