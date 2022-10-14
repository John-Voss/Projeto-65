import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>WORLD SPEECH</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 0.1,
        backgroundColor: '#00BFFF',
        alignItems: 'center'
    },
    text:{
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})