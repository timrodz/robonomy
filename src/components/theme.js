import { createTheme, lightThemePrimitives } from 'baseui';

const primitives = {
  ...lightThemePrimitives,
};

const overrides = {
	typography: {
	  DisplayLarge: {
		fontFamily: 'Titillium Web',
	  },
	  DisplayMedium: {
		fontFamily: 'Titillium Web',
	  },
	  DisplaySmall: {
		fontFamily: 'Titillium Web',
	  },
	  DisplayXSmall: {
		fontFamily: 'Titillium Web',
	  },
	},
  };

const Theme = createTheme(primitives, overrides);
export default Theme;