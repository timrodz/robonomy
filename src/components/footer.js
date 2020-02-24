import { Paragraph1 } from 'baseui/typography';
import * as React from 'react';
import Link from './generics/link';

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
        Copyright © {new Date().getFullYear()} Roberto Ord&#243;ñez — Made by{' '}
        <Link
          href="https://www.timrodz.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Juan Alejandro Morais
        </Link>
      </Paragraph1>
    </footer>
  );
};

export default Footer;
