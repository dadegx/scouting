import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../context/AuthContext.jsx';
import { LoadingScreen } from '../components/LoadingScreen.jsx';
import { LoginScreen } from '../screens/LoginScreen.jsx';
import { Ionicons } from '@expo/vector-icons';

// Import screens for different user types
import { PlayerHomeScreen } from '../screens/PlayerHomeScreen.jsx';
import { PlayerProfileScreen } from '../screens/PlayerProfileScreen.jsx';
import { PlayerStatsScreen } from '../screens/PlayerStatsScreen.jsx';
import { PlayerVideosScreen } from '../screens/PlayerVideosScreen.jsx';

import { ScoutHomeScreen } from '../screens/ScoutHomeScreen.jsx';
import { ScoutSearchScreen } from '../screens/ScoutSearchScreen.jsx';
import { ScoutFavoritesScreen } from '../screens/ScoutFavoritesScreen.jsx';
import { ScoutMessagesScreen } from '../screens/ScoutMessagesScreen.jsx';

import { AdminHomeScreen } from '../screens/AdminHomeScreen.jsx';
import { AdminUsersScreen } from '../screens/AdminUsersScreen.jsx';
import { AdminReportsScreen } from '../screens/AdminReportsScreen.jsx';
import { AdminSettingsScreen } from '../screens/AdminSettingsScreen.jsx';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Theme colors (hardcoded to avoid import issues)
const themeColors = {
  primary: '#00E676',
  textSecondary: '#B3B3B3',
  surface: '#121212',
  border: '#333333',
};

// Player Tabs
const PlayerTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        
        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            break;
          case 'Profile':
            iconName = focused ? 'person' : 'person-outline';
            break;
          case 'Videos':
            iconName = focused ? 'videocam' : 'videocam-outline';
            break;
          case 'Stats':
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            break;
          default:
            iconName = 'help';
        }
        
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.textSecondary,
      tabBarStyle: {
        backgroundColor: theme.colors.surface,
        borderTopColor: theme.colors.border,
        paddingBottom: 8,
        paddingTop: 8,
        height: 70,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
      headerShown: false,
    })}
  >
    <Tab.Screen 
      name="Home" 
      component={PlayerHomeScreen}
      options={{ title: 'Home' }}
    />
    <Tab.Screen 
      name="Profile" 
      component={PlayerProfileScreen}
      options={{ title: 'Profilo' }}
    />
    <Tab.Screen 
      name="Videos" 
      component={PlayerVideosScreen}
      options={{ title: 'Video' }}
    />
    <Tab.Screen 
      name="Stats" 
      component={PlayerStatsScreen}
      options={{ title: 'Statistiche' }}
    />
  </Tab.Navigator>
);

// Scout Tabs
const ScoutTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        
        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            break;
          case 'Search':
            iconName = focused ? 'search' : 'search-outline';
            break;
          case 'Favorites':
            iconName = focused ? 'heart' : 'heart-outline';
            break;
          case 'Messages':
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            break;
          default:
            iconName = 'help';
        }
        
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.textSecondary,
      tabBarStyle: {
        backgroundColor: theme.colors.surface,
        borderTopColor: theme.colors.border,
        paddingBottom: 8,
        paddingTop: 8,
        height: 70,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
      headerShown: false,
    })}
  >
    <Tab.Screen 
      name="Home" 
      component={ScoutHomeScreen}
      options={{ title: 'Dashboard' }}
    />
    <Tab.Screen 
      name="Search" 
      component={ScoutSearchScreen}
      options={{ title: 'Ricerca' }}
    />
    <Tab.Screen 
      name="Favorites" 
      component={ScoutFavoritesScreen}
      options={{ title: 'Preferiti' }}
    />
    <Tab.Screen 
      name="Messages" 
      component={ScoutMessagesScreen}
      options={{ title: 'Messaggi' }}
    />
  </Tab.Navigator>
);

// Admin Tabs
const AdminTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        
        switch (route.name) {
          case 'Home':
            iconName = focused ? 'grid' : 'grid-outline';
            break;
          case 'Users':
            iconName = focused ? 'people' : 'people-outline';
            break;
          case 'Reports':
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            break;
          case 'Settings':
            iconName = focused ? 'settings' : 'settings-outline';
            break;
          default:
            iconName = 'help';
        }
        
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.textSecondary,
      tabBarStyle: {
        backgroundColor: theme.colors.surface,
        borderTopColor: theme.colors.border,
        paddingBottom: 8,
        paddingTop: 8,
        height: 70,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
      headerShown: false,
    })}
  >
    <Tab.Screen 
      name="Home" 
      component={AdminHomeScreen}
      options={{ title: 'Dashboard' }}
    />
    <Tab.Screen 
      name="Users" 
      component={AdminUsersScreen}
      options={{ title: 'Utenti' }}
    />
    <Tab.Screen 
      name="Reports" 
      component={AdminReportsScreen}
      options={{ title: 'Report' }}
    />
    <Tab.Screen 
      name="Settings" 
      component={AdminSettingsScreen}
      options={{ title: 'Impostazioni' }}
    />
  </Tab.Navigator>
);

export const AppNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  const getTabNavigator = () => {
    if (!user) return null;
    
    switch (user.userType) {
      case 'player':
        return PlayerTabs;
      case 'scout':
        return ScoutTabs;
      case 'admin':
        return AdminTabs;
      default:
        return PlayerTabs;
    }
  };

  const TabNavigator = getTabNavigator();

  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: theme.colors.primary,
          background: theme.colors.background,
          card: theme.colors.surface,
          text: theme.colors.textPrimary,
          border: theme.colors.border,
          notification: theme.colors.primary,
        },
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user && TabNavigator ? (
          <Stack.Screen name="MainTabs" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
