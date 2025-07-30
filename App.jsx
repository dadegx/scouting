import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { AuthProvider } from './src/context/AuthContext.jsx';
import { AppContent } from './src/components/AppContent.jsx';
import { paperTheme } from './src/config/theme.jsx';

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </PaperProvider>
  );
}
