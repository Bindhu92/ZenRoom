import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import MoodButton from '../components/MoodButton';

const moods = ["Happy", "Sad", "Angry", "Neutral", "Fear", "Surprise"];

export default function MoodScreen() {
  const [mood, setMood] = useState(null);

  const getTheme = async () => {
    const response = await fetch('http://127.0.0.1:8000/get-theme', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mood }),
    });

    const data = await response.json();
    Alert.alert("ZenRoom Theme", `Scene: ${data.scene}\nMusic: ${data.music}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling?</Text>
      {moods.map((m) => (
        <MoodButton key={m} mood={m} onSelect={(selected) => setMood(selected)} />
      ))}
      {mood && (
        <MoodButton mood="Get ZenRoom 🌿" onSelect={getTheme} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, justifyContent: 'center'
  },
  title: {
    fontSize: 22, marginBottom: 20, textAlign: 'center'
  }
});
