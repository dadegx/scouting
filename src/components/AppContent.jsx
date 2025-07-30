import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-paper';
import { useAuth } from '../context/AuthContext.jsx';
import { appStyles } from '../styles/AppStyles.jsx';

export const AppContent = () => {
  const { user, isLoading } = useAuth();
  
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>⚽ Football Scouting</Text>
      <Text style={appStyles.subtitle}>
        App per connettere giovani talenti con osservatori professionali
      </Text>
      <Text style={appStyles.version}>
        ✅ Expo SDK 53 • React 19 • Web Version
      </Text>
      <Text style={appStyles.status}>
        User: {user ? user.name : 'Non loggato'} | Loading: {isLoading ? 'Sì' : 'No'}
      </Text>
      <Button 
        mode="contained" 
        style={appStyles.button} 
        onPress={() => console.log('AuthContext funziona!')}
      >
        Test AuthContext
      </Button>
      <StatusBar style="light" />
    </View>
  );
};
