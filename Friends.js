import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        Add friends here!
        {
          this.props.screenProps.possibleFriends.map((friend, index) => (
            <Button
              key={ friend }
              title={ `Add ${ friend }` }
              onPress={() =>
                this.props.screenProps.addFriend(index)
              }
            />
          )
        )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });