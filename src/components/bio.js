import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Icon from '@components/icon';
import styles from './bio.module.scss';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 70, height: 70, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            linkedin
            instagram
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;
  const avatar = data?.avatar?.childImageSharp?.fixed;

  return (
    <div className={styles.bio}>
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ''}
          className={styles.bioAvatar}
          imgStyle={{
            borderRadius: '50%',
          }}
        />
      )}
      {author?.name && (
        <p className={styles.authorName}>
          <strong>{author.name}</strong>
        </p>
      )}
      {author?.summary && (
        <p
          dangerouslySetInnerHTML={{
            __html: author.summary
          }}
          className={styles.authorDescription}
        />
      )}
      {social &&
        <ul className={styles.iconsWrapper}>
          {Object.keys(social).map(key => (
            <Icon name={key} href={social[key]} key={key} />
          ))}
        </ul>
      }
    </div>
  );
};

export default Bio;
