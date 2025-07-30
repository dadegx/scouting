import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { AppNavigator } from '../navigation/AppNavigator.jsx';
import { LoadingScreen } from './LoadingScreen.jsx';

export const AppContent = () => {
  const { isLoading } = useAuth();
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return <AppNavigator />;
};
