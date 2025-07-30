import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import { AuthProvider } from './src/context/AuthContext.jsx';
import { AppContent } from './src/components/AppContent.jsx';
import { paperTheme } from './src/config/theme.jsx';

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <AuthProvider>
        <AppContent />
        <StatusBar style="light" />
        <Toast />
      </AuthProvider>
    </PaperProvider>
  );
}
