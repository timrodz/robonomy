import { Paragraph1 } from 'baseui/typography';
import SocialLink from 'common/socialLink';
import * as React from 'react';

const config = require('data/config');

const Footer = () => {
  return (
    <footer>
      <Paragraph1
        overrides={{
          Block: {
            style: {
              textAlign: 'center',
            },
          },
        }}
      >
        Copyright © {new Date().getFullYear()} {config.legalName} — Made by{' '}
        <SocialLink href={config.authorUrl}>{config.author}</SocialLink>
      </Paragraph1>
    </footer>
  );
};

export default Footer;
