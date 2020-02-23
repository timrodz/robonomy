import { styled } from 'baseui';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Image = styled(Img, {
  objectFit: 'cover',
  objectPosition: '100% 0',
  width: '100%',
  height: '400px',
});

const ImageGallery = () => {
  const {
    allInstaNode: { edges },
  } = useStaticQuery(graphql`
    {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 12) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const renderImages = () => {
    const images = edges.map(({ node }) => {
      const {
        id,
        caption,
        localFile: { childImageSharp },
      } = node;
      const imageData = childImageSharp.fluid;

      return (
        <FlexGridItem key={id}>
          <Image loading="lazy" alt={caption || ''} fluid={imageData} />
        </FlexGridItem>
      );
    });

    return images;
  };

  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 2, 3]}
      flexGridColumnGap="scale100"
      flexGridRowGap="scale100"
      marginBottom="scale800"
    >
      {renderImages()}
    </FlexGrid>
  );
};

export default ImageGallery;
