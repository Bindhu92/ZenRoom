import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      navigation.replace('Home', { username });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ZenRoom</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        onChangeText={setUsername}
      />
      <Button title="Continue" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', padding: 20
  },
  title: {
    fontSize: 24, marginBottom: 20, textAlign: 'center'
  },
  input: {
    borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5
  }
});
