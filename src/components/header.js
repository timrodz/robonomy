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
  
  const MOBILE = "@media screen and (max-width: 880px)";
  const link = css({ textDecoration: 'none' });
  const itemAlignment = css({ justifyContent: 'space-between' });
  const margin = css({
    marginRight: '1rem',
    [MOBILE]: {
      marginRight: '0px'
    }
  });

  return (
    <HeaderNavigation className={itemAlignment}>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <StyledLink className={link} href="/">
            {siteTitle}
          </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right} className={margin}>
        <StyledNavigationItem>
          <StyledLink
            className={link}
            href="https://www.instagram.com/robonomy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink className={link} href={`mailto:${email}`}>
            <Button>Let's talk</Button>
          </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};

export default Header;
