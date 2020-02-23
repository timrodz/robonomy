import { Block } from 'baseui/block';
import { Display1, Paragraph1 } from 'baseui/typography';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const centered = {
  align: 'center',
};

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Block>
      <Display1 {...centered}>NOT FOUND</Display1>
      <Paragraph1 {...centered}>This page doesn&#39;t exist.</Paragraph1>
    </Block>
  </Layout>
);

export default NotFoundPage;
