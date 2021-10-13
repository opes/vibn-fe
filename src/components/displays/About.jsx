import React, { Component } from 'react';
import styles from '../../styles/about.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className={styles.bri}>
          <h1 className={styles.bio_name}>Bri</h1>
          <p className={styles.bio}>
            A full-stack software engineer with a background in hospitality. I
            champion human-centered designs built on strong, efficient
            foundations using collaborative problem-solving. I enjoy learning
            new technologies and working on diverse teams while implementing a
            strong sense of community.
          </p>
          <a className={styles.bio_link} href="https://github.com/bribias">
            <img className={styles.bio_logos} alt="github logo" />
          </a>
          <a
            className={styles.bio_link}
            href="https://www.linkedin.com/in/bribias/"
          >
            <img className={styles.bio_logos} alt="linkedin logo" />
          </a>
        </section>

        <section className={styles.elise}>
          <h1 className={styles.bio_name}>Elise</h1>
          <p className={styles.bio}>
            I am a full-stack software engineer from St Paul, Minnesota with a
            background in psychology and CCBHC mental health. My passion is in
            combining this background with my newly honed skills in software
            development to work with a team on creating and maintaining
            inclusive apps that accommodate the needs of marginalized
            communities. Always preferring to keep busy, I fill my non-coding
            time with as much dance, D&D, studying French & Korean, crafting,
            and board gaming as I can get!
          </p>
          <a className={styles.bio_link} href="https://github.com/eliamue">
            <img className={styles.bio_logos} alt="github logo" />
          </a>
          <a
            className={styles.bio_link}
            href="https://www.linkedin.com/in/eliamue/"
          >
            <img className={styles.bio_logos} alt="linkedin logo" />
          </a>
        </section>
        <section className={styles.sofia}>
          <h1 className={styles.bio_name}>Sofia</h1>
          <p>
            A Full-stack Developer based in the San Francisco Bay Area. I love
            to code because it&apos;s an exciting and challenging field where I can
            see myself being an asset to my community and where I know I will
            feel fulfilled. When I&apos;m not coding, you can find me on Steam,
            learning to be a better photographer, or reading novels. My favorite
            languages are Korean and Spanish!
          </p>
          <a className={styles.bio_link} href="https://github.com/sofiatejada">
            <img className={styles.bio_logos} alt="github logo" />
          </a>
          <a
            className={styles.bio_link}
            href="https://www.linkedin.com/in/sofianais/"
          >
            <img className={styles.bio_logos} alt="linkedin logo" />
          </a>
        </section>
      </div>
    );
  }
}
