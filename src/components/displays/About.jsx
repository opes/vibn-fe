import React, { Component } from 'react';
import styles from '../../styles/about.css';
import lilogo from '../../assets/linkedin-logo.png';
import ghlogo from '../../assets/gh-logo.png';
import Header from '../displays/Header';
import linebreak from '../../assets/linebreak.png';

export default class About extends Component {
  render() {
    return (
      <div className={styles.about_container}>
        <Header />
        <h1 className={styles.about_title}>We&apos;re Vibn</h1>
        <img src={linebreak} alt="linebreak" className={styles.linebreak} />
        <section className={styles.bri}>
          <h1 className={styles.bio_name}>Bri</h1>
          <p className={styles.bio}>
            A full-stack software engineer with a background in hospitality. I
            champion human-centered designs built on strong, efficient
            foundations using collaborative problem-solving. I enjoy learning
            new technologies and working on diverse teams while implementing a
            strong sense of community.
          </p>
          <section className={styles.links_container}>
            <a className={styles.bio_links} href="https://github.com/bribias">
              <img src={ghlogo} className={styles.bio_logos_gh} />
            </a>
            <a
              className={styles.bio_links}
              href="https://www.linkedin.com/in/bribias/"
            >
              <img src={lilogo} className={styles.bio_logos_li} />
            </a>
          </section>
        </section>

        <section className={styles.elise}>
          <h1 className={styles.bio_name}>Elise</h1>
          <p className={styles.bio}>
            A full-stack software engineer from St Paul, Minnesota with a
            background in psychology, CCBHC mental health, and board game
            publishing. My passion is in combining this background with my newly
            honed skills in software development to work with a team on creating
            and maintaining inclusive apps that accommodate the needs of
            marginalized communities. Always preferring to keep busy, I fill my
            non-coding time with as much dance, D&D, studying French & Korean,
            crafting, and board gaming as I can get!
          </p>
          <section className={styles.links_container}>
            <a className={styles.bio_links} href="https://github.com/eliamue">
              <img src={ghlogo} className={styles.bio_logos_gh} />
            </a>
            <a
              className={styles.bio_links}
              href="https://www.linkedin.com/in/eliamue/"
            >
              <img src={lilogo} className={styles.bio_logos_li} />
            </a>
          </section>
        </section>
        <section className={styles.sofia}>
          <h1 className={styles.bio_name}>Sofia</h1>
          <p className={styles.bio}>
            A full-stack engineer based in the San Francisco Bay Area. I love to
            code because it&apos;s an exciting and challenging field where I can
            see myself being an asset to my community and where I know I will
            feel fulfilled. When I&apos;m not coding, you can find me on Steam,
            learning to be a better photographer, or reading novels. My favorite
            languages are Korean and Spanish!
          </p>
          <section className={styles.links_container}>
            <a
              className={styles.bio_links}
              href="https://github.com/sofiatejada"
            >
              <img src={ghlogo} className={styles.bio_logos_gh} />
            </a>
            <a
              className={styles.bio_links}
              href="https://www.linkedin.com/in/sofianais/"
            >
              <img src={lilogo} className={styles.bio_logos_li} />
            </a>
          </section>
        </section>
      </div>
    );
  }
}
