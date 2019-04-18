/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Dummy } from './src/containers';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  render() {

    return (
      <Dummy />
    );

  }
}

export default App


// const mapStateToProps = (state) => {
//     return {
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);


