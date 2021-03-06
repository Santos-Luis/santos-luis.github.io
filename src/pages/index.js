import React from 'react';
import { Link, graphql } from 'gatsby';
import Bio from '@components/bio';
import Layout from '@components/layout';
import SEO from '@components/seo';
import styles from './index.module.scss';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className={styles.indexWrapper}>
        <Bio rootPath={true} />
        <div className={styles.postsWrapper}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug;
            return (
              <article
                key={post.fields.slug}
                className={styles.postListItem}
                itemScope
                itemType="http://schema.org/Article"
              >
                <header className={styles.cardsHeader}>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p className={styles.technologies}>
                    <u>Technologies:</u> {post.frontmatter.technologies}
                  </p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            );
          })}
        </div>
    </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          technologies
        }
      }
    }
  }
`;
