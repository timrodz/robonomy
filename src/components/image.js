import React from 'react';
import Img from 'gatsby-image';

const Image = ({ imageData, caption }) => {
  return <Img loading="lazy" alt={caption || ''} fixed={imageData} />;
};

export default Image;
