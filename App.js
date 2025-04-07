// Required polyfills — MUST be at the top
import 'react-native-get-random-values';
import 'setimmediate';
global.setImmediate = global.setImmediate || ((fn) => setTimeout(fn, 0));

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [theme, setTheme] = useState(null);
  const [error, setError] = useState(null);

  const sendMood = async (mood) => {
    try {
      const requestId = uuidv4(); // Generate uuid when needed
      console.log('Request ID:', requestId); // just for testing

      const response = await fetch('http://192.168.1.5:8000/get-theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood }),
      });

      const data = await response.json();
      setTheme(data);
      setError(null);
    } catch (err) {
      setError('Could not connect to backend');
    }
  };

  const moods = ["Happy", "Sad", "Angry", "Neutral", "Fear", "Surprise"];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>How are you feeling today?</Text>
      {moods.map((mood) => (
        <TouchableOpacity key={mood} style={styles.button} onPress={() => sendMood(mood)}>
          <Text style={styles.buttonText}>{mood}</Text>
        </TouchableOpacity>
      ))}

      {theme && (
        <View style={styles.result}>
          <Text style={styles.resultText}>🎬 Scene: {theme.scene}</Text>
          <Text style={styles.resultText}>🎵 Music: {theme.music}</Text>
        </View>
      )}

      {error && <Text style={styles.error}>{error}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: {
    backgroundColor: '#79c2d0',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontSize: 18 },
  result: { marginTop: 30, alignItems: 'center' },
  resultText: { fontSize: 18, marginVertical: 4 },
  error: { color: 'red', marginTop: 20 },
});
