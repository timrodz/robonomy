import { Button } from 'baseui/button';
import {
  ALIGN,
  HeaderNavigation,
  StyledNavigationItem,
  StyledNavigationList,
} from 'baseui/header-navigation';
import { Display2 } from 'baseui/typography';
import React from 'react';
import { useStyletron } from 'styletron-react';

const Header = ({ siteTitle }) => {
  const [css, theme] = useStyletron();
  const c = css({ textShadow: '4px 4px #edeccc' });

  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <Display2 className>{siteTitle}</Display2>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button>Let's talk</Button>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right} />
      <StyledNavigationList $align={ALIGN.right} />
    </HeaderNavigation>
  );
};

export default Header;
