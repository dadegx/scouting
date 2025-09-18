import { MD3DarkTheme } from 'react-native-paper';

export const paperTheme = {
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

export const themeColors = {
  primary: '#00E676',
  secondary: '#1DE9B6',
  accent: '#4CAF50',
  background: '#000000',
  surface: '#121212',
  cardBackground: '#1E1E1E',
  inputBackground: '#2A2A2A',
  textPrimary: '#FFFFFF',
  textSecondary: '#B3B3B3',
  onPrimary: '#000000',
  onSecondary: '#000000',
  onBackground: '#FFFFFF',
  onSurface: '#FFFFFF',
  error: '#F44336',
  warning: '#FF9800',
  success: '#4CAF50',
  border: '#333333',
  gradientPrimary: ['#00E676', '#1DE9B6'],
  gradientBackground: ['#000000', '#121212'],
};

export const themeSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const themeTypography = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  body1: {
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
  },
};

export const theme = {
  colors: themeColors,
  spacing: themeSpacing,
  typography: themeTypography,
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
    },
  },
};
