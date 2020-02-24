import * as React from 'react';
import {useStyletron} from 'baseui';

const Link = props => {
  const [css, theme] = useStyletron();
	const decor = css({
		color: theme.colors.primaryA,
		textDecoration: 'none'
	});
  return <a className={decor} {...props} />;
};

export default Link;
