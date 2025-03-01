import { useStyletron } from 'baseui';
import * as React from 'react';

const Link = props => {
  const [css, theme] = useStyletron();
  const decor = css({
    color: theme.colors.primaryA,
    textDecoration: 'none',
  });
  return (
    <a className={decor} {...props}>
      {props.children}
    </a>
  );
};

export default Link;
