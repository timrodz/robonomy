import { Button } from 'baseui/button';
import {
  ALIGN,
  HeaderNavigation,
  StyledNavigationItem,
  StyledNavigationList,
} from 'baseui/header-navigation';
import * as React from 'react';
import Link from './generics/link';

const Header = ({ siteTitle, email }) => (
  <HeaderNavigation
    overrides={{
      Root: {
        style: {
          justifyContent: 'space-between',
        },
      },
    }}
  >
    <StyledNavigationList $align={ALIGN.left}>
      <StyledNavigationItem>
        <Link href="/">{siteTitle}</Link>
      </StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.right}>
      <StyledNavigationItem>
        <Link
          href="https://www.instagram.com/robonomy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <Link href={`mailto:${email}`}>
          <Button>Let's talk</Button>
        </Link>
      </StyledNavigationItem>
    </StyledNavigationList>
  </HeaderNavigation>
);

export default Header;
