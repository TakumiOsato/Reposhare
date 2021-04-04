import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

const TxtInput = (props) => {
  return(
    <View>
      <TextInput
          style={styles.input}
          value={props.value}
          onChangeText={props.onChangeText}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={props.placeholder}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ddd',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: 300
  },
})

export default TxtInput