import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import {
  ALIGN,
  HeaderNavigation,
  StyledNavigationItem,
  StyledNavigationList,
} from 'baseui/header-navigation';
import { StyledLink } from 'baseui/link';
import React from 'react';

const Header = ({ siteTitle, email }) => {
  const [css] = useStyletron();
  const itemAlignment = css({
    justifyContent: 'space-between',
  });

  return (
    <HeaderNavigation className={itemAlignment}>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
        <StyledLink
            href="/"
          >
            {siteTitle}
          </StyledLink></StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink
            href="https://www.instagram.com/robonomy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
        <StyledLink
            href={`mailto:${email}`}
          >
          <Button>Let's talk</Button>
          </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};

export default Header;
