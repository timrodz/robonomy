import { Paragraph1 } from 'baseui/typography';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { useStyletron } from 'styletron-react';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [css] = useStyletron();
  const centered = css({ textAlign: 'center' });

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          <Paragraph1 className={centered}>
            Copyright © {new Date().getFullYear()}
            {` `}
            <a
              href="https://www.timrodz.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Juan Alejandro Morais
            </a>{' '}
            — Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
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
