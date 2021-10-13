import React, { Component } from 'react';
import { getSingleConvo } from '../../services/convos.js';
import { fetchCurrentUserById } from '../../services/userAuth.js';
import PropTypes from 'prop-types';

export default class ConvoDetail extends Component {

    state = {
      convo: {},
      toUser: {},
      fromUser: {},
    }

    componentDidMount = async () => {
      const convoId = this.props.match.params.id;
      const convo = await getSingleConvo(convoId);
      const id = this.convo.toUser.id;
      const toUser = await fetchCurrentUserById(id);
      const fromUserId = localStorage.getItem('CURRENT_USER_ID');
      const fromUser = await fetchCurrentUserById(fromUserId);
      this.setState({ toUser, fromUser, convo });
    }

    render() {
      return (
        <>
          <div>
            <h4>
              from: {this.state.fromUser.displayName}
              to: {this.state.toUser.displayName}
            </h4>
          </div>
          <article>
            <h2>
              {this.props.convo.date}
            </h2>
            <p>
              {this.props.convo.message}
            </p>
          </article>  
        </>           
      );
    }
}
  
ConvoDetail.propTypes = {
  convo: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
