import { BaseProvider, LightTheme } from 'baseui';
import React, { useEffect, useState } from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import App from '../components/app';

export default () => {
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    // Load the `styletron-engine-atomic` package dynamically.
    // Reason: It requires use of `document`, which is not available
    // outside the browser, so we need to wait until it successfully loads.
    // Source: https://www.gatsbyjs.org/docs/debugging-html-builds/
    import('styletron-engine-atomic').then(styletron => {
      const clientEngine = new styletron.Client();
      setEngine(clientEngine);
    });
  }, []);

  if (!engine) return null;

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  );
};
