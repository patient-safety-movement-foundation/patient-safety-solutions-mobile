import React from 'react';

import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView
      originWhitelist={['*']}
      source={{uri: 'https://apss.patient-safety-movement.now.sh/'}}
    />
  );
};

export default App;
