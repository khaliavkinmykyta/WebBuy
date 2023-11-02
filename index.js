/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import appsFlyer from 'react-native-appsflyer';
import invariant from 'invariant';

if (Platform.OS === 'ios') {
    invariant(appsFlyer != null, 'appsFlyer is not available.');
  
    appsFlyer.initSdk(
      {
        devKey: 'K21234567891099',
        isDebug: false,
        appId: '412345674', 
      },
      result => {
        console.log('result');
        console.log(result);
      },
      error => {
        console.error(error);
      }
    );
  } else if (Platform.OS === 'android') { 
    appsFlyer.initSdk(
      {
        devKey: 'K21234567891099',
        isDebug: false,
        appId: '412345674',
      },
      result => {
        console.log('result');
        console.log(result);
      },
      error => {
        console.error(error);
      }
    );
  }

AppRegistry.registerComponent(appName, () => App);
