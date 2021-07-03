import React from 'react';
import {Linking} from 'react-native';

import {WebView} from 'react-native-webview';

class App extends React.Component {
  handleLink = newNavState => {
    const {url} = newNavState;
    if (!url) {
      return;
    } else if (
      !url.startsWith('https://apss-patient-safety-movement.vercel.app/')
    ) {
      this.webView.stopLoading();
      Linking.openURL(newNavState.url);
      return false;
    }
  };

  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{uri: 'https://apss-patient-safety-movement.vercel.app/'}}
        ref={c => {
          this.webView = c;
        }}
        onNavigationStateChange={this.handleLink}
      />
    );
  }
}

export default App;
