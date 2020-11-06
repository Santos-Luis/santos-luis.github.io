import React from 'react';
import Github from '@assets/github.svg';
import Linkedin from '@assets/linkedin.svg';
import Instagram from '@assets/instagram.svg';
import styles from './icon.module.scss';

const mapping = {
  'github': <Github />,
  'linkedin': <Linkedin />,
  'instagram': <Instagram />,
}

const Icon = ({ name, href }) => (
  <li className={styles.icon}>
    <a aria-label={name} href={href} rel="noopener noreferrer" target="_blank">
      {mapping[name]}
    </a>
  </li>
);

export default Icon;
