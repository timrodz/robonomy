import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Image from '../image';

const itemProps = {
  backgroundColor: 'mono300',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const wideItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      style: ({$theme}) => ({
        width: `calc((200% - ${$theme.sizing.scale800}) / 3)`,
      }),
    },
  },
};

const ImageGallery = () => {
  const {
    allInstaNode: { edges },
  } = useStaticQuery(graphql`
    {
      allInstaNode {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                fixed(width: 512, height: 512) {
                  ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 1200) {
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
      const imageData = childImageSharp.fixed;

      return (
        <FlexGridItem key={id} {...itemProps}>
          <Image imageData={imageData} alt={caption} />
        </FlexGridItem>
      );
    });

    return images;
  };

  return (
    <FlexGrid
      flexGridColumnCount={3}
      flexGridColumnGap="scale100"
      flexGridRowGap="scale100"
      marginBottom="scale800" 
    >
      {renderImages()}
    </FlexGrid>
  );
};

export default ImageGallery;
