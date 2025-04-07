import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, {username} 👋</Text>
      <Button title="Start Mood Scan" onPress={() => navigation.navigate('Mood')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  greeting: {
    fontSize: 22, marginBottom: 20
  }
});
