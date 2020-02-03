import { StyledBody } from 'baseui/card';
import React from 'react';
import Layout from './layout';
import SEO from './seo';
import ImageGallery from './views/imageGallery';

const App = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledBody>
        <ImageGallery />
      </StyledBody>
    </Layout>
  );
};

export default App;
