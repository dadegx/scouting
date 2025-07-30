import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const handlePress = () => {
    alert('Football Scouting funziona! ⚽🔷');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Football Scouting</Text>
      <Text style={styles.subtitle}>
        App per connettere giovani talenti con osservatori professionali
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>🔷 Test App</Text>
      </TouchableOpacity>
      
      <Text style={styles.status}>✅ Expo SDK 53 • React 19 • Web Version</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});
