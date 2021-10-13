import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchCurrentUserById } from '../../services/userAuth';
import PropTypes from 'prop-types';

export default class ConvoItem extends Component {

  state = {
    toUser: {},
    fromUser: {},
  }

  componentDidMount = async () => {
    const id = this.props.convo.toUser;
    const fromUserId = this.props.convo.fromUser;
    const toUser = await fetchCurrentUserById(id);
    const fromUser = await fetchCurrentUserById(fromUserId);
    this.setState({ toUser, fromUser });
  }

  render() {
    return (
      <Link to={`/user/convo/detail/${this.props.convo.id}`}>
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
      </Link>
    );
  }
}

ConvoItem.propTypes = {
  convo: PropTypes.object,
};
