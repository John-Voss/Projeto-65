import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import AppHeader from './components/AppHeader';
import PrincipalField from './components/principalField';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <PrincipalField />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})