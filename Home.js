/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component{
    render(){
      return (
        <View style = {StyleSheet.container}>
          <Text>We have no Friends!</Text>
          <Button 
          title ="Add some Friends"
          onPress={() => this.props.navigation.navigate('Friends')}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems : 'center',
    justifyContent: 'center',
  }
});