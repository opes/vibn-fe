import React, { Component } from 'react';
import styles from '../../styles/profile.css';
import linebreak from '../../assets/linebreak.png';
import Header from './Header';
import { fetchUserById } from '../../services/userAuth';
import PropTypes from 'prop-types';

export default class UserDetailClass extends Component {
  state = {
    displayName: '',
    id: '',
    image: '',
    profile_link: '',
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const userObject = await fetchUserById(id);

    this.setState({
      displayName: userObject.displayName,
      id: userObject.id,
      image: userObject.image,
      profile_link: userObject.profile_link,
    });
  };

  render() {
    return (
      <div className={styles.profile_main}>
        <Header />
        <section className={styles.profile}>
          <img
            className={styles.profile_pic}
            alt="user image"
            src={this.userObject.image}
          />
          <a href={this.userObject.profileURL} className={styles.profile_link}>
            <h2 className={styles.profile_name}>{this.userObject.displayName}</h2>
          </a>
        </section>

        <img src={linebreak} alt="linebreak" />
        <h3 className={styles.top_label}>
          {this.userObject.displayName}&apos;s Top Artists
        </h3>
      </div>
    );
  }
}

UserDetailClass.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
