import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3DarkTheme, Button } from 'react-native-paper';
import { AuthProvider, useAuth } from './src/context/AuthContext';

const paperTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#00E676',
    secondary: '#1DE9B6',
    background: '#000000',
    surface: '#121212',
    onPrimary: '#000000',
    onSecondary: '#000000',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
  },
};

const AppContent = () => {
  const { user, isLoading } = useAuth();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Football Scouting</Text>
      <Text style={styles.subtitle}>App per connettere giovani talenti con osservatori professionali</Text>
      <Text style={styles.version}>✅ Expo SDK 53 • React 19 • Web Version</Text>
      <Text style={styles.status}>
        User: {user ? user.name : 'Non loggato'} | Loading: {isLoading ? 'Sì' : 'No'}
      </Text>
      <Button mode="contained" style={styles.button} onPress={() => console.log('AuthContext funziona!')}>
        Test AuthContext
      </Button>
      <StatusBar style="light" />
    </View>
  );
};

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  title: {
    color: '#00E676',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  version: {
    color: '#B3B3B3',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
  status: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});
