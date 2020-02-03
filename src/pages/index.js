import { BaseProvider } from 'baseui';
import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import App from '../components/app';
import Theme from '../components/theme';

const engine = new Styletron();

export default () => (
  <StyletronProvider value={engine}>
    <BaseProvider theme={Theme}>
      <App />
    </BaseProvider>
  </StyletronProvider>
);
