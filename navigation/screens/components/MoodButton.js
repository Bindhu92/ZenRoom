import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MoodButton({ mood, onSelect }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onSelect(mood)}>
      <Text style={styles.text}>{mood}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A8D5BA',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 6,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  text: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  }
});
