import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Icon from '@components/icon';
import { useDeviceDetect } from '@utils/deviceDetect';
import styles from './bio.module.scss';

const Bio = ({ rootPath }) => {
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

  const bioStyle = rootPath ? 'bio' : 'nonRootBio';
  const socialHtml = (
    <ul className={styles[`${bioStyle}__iconsWrapper`]}>
      {Object.keys(social).map(key => (
        <Icon name={key} href={social[key]} key={key} />
      ))}
    </ul>
  );

  const [show, setShow] = useState(!rootPath);
  const [dropDownMessage, setDropDownMessage]  = useState('Read more');

  const changeDropDownMessage = () => {
    console.log('i am here');
    const message = show ? 'Read more' : 'Read less';
    setDropDownMessage(message);
  }

  const { isMobile } = useDeviceDetect();
  if (isMobile) {
    return (
      <div className={styles[`${bioStyle}`]}>
        <div className={styles[`${bioStyle}__avatarWrapper`]}>
          {avatar && (
            <Image
              fixed={avatar}
              alt={author?.name || ''}
              className={styles[`${bioStyle}__avatar`]}
              imgStyle={{
                borderRadius: '50%',
              }}
            />
          )}
          {social && socialHtml}
        </div>
        <div className={styles[`${bioStyle}__readMoreWrapper`]}>
          {author?.name && (
            <p className={styles[`${bioStyle}__authorName`]}>
              <strong>{author.name}</strong>
            </p>
          )}
          {rootPath && (
            <button
              className={styles[`${bioStyle}__readMore`]}
              aria-label="Read more"
              onClick={() => {
                setShow(!show);
                changeDropDownMessage();
              }}
            >
              <span>{dropDownMessage}</span>
            </button>
          )}
        </div>
        <Fade top collapse when={show} duration={1000} distance="20px" >
          {author?.summary && (
            <p
              dangerouslySetInnerHTML={{
                __html: author.summary
              }}
              className={styles[`${bioStyle}__authorDescription`]}
            />
          )}
        </Fade>
      </div>
    )
  }

  return (
    <div className={styles[`${bioStyle}`]}>
      <div className={styles[`${bioStyle}__avatarWrapper`]}>
        {avatar && (
          <Image
            fixed={avatar}
            alt={author?.name || ''}
            className={styles[`${bioStyle}__avatar`]}
            imgStyle={{
              borderRadius: '50%',
            }}
          />
        )}
        {social && !rootPath && socialHtml}
      </div>
      {author?.name && (
        <p className={styles[`${bioStyle}__authorName`]}>
          <strong>{author.name}</strong>
        </p>
      )}
      {author?.summary && (
        <p
          dangerouslySetInnerHTML={{
            __html: author.summary
          }}
          className={styles[`${bioStyle}__authorDescription`]}
        />
      )}
      {social && rootPath && socialHtml}
    </div>
  );
};

export default Bio;
