import { Paragraph1 } from 'baseui/typography';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { useStyletron } from 'styletron-react';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          email
        }
      }
    }
  `);

  const [css] = useStyletron();
  const centered = css({ textAlign: 'center' });

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        email={data.site.siteMetadata.email}
      />
      <div>
        <main>{children}</main>
        <footer>
          <Paragraph1 className={centered}>
            Copyright © {new Date().getFullYear()} Roberto Ord&#243;ñez — Made
            by{' '}
            <a
              href="https://www.timrodz.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Juan Alejandro Morais
            </a>
          </Paragraph1>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
