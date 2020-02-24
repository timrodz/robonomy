import { Block } from 'baseui/block';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import Footer from './footer';
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

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        email={data.site.siteMetadata.email}
      />
      <Block>
        <main>{children}</main>
      </Block>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
