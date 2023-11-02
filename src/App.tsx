import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import WebView from 'react-native-webview';
import axios from 'axios';
import QNavigator from './Quiz/navigator/QNavigator';

function App(): JSX.Element {
  const websiteUrl = 'https://www.traffic-devils2.com/en/';

  const [websiteExists, setWebsiteExists] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(websiteUrl)
      .then(response => {
        setWebsiteExists(true);
      })
      .catch(error => {
        setWebsiteExists(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return (
    <View style={{flex: 1}}>
      {loading ? (
        <ActivityIndicator
          size="large"
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      ) : websiteExists ? (
        <WebView source={{uri: websiteUrl}} style={{flex: 1}} />
      ) : (
        <QNavigator />
      )}
    </View>
  );
}

export default App;
