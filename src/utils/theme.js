export const theme = {
  colors: {
    // Main colors
    primary: '#00E676', // Verde brillante
    primaryDark: '#00C853', // Verde scuro
    secondary: '#1DE9B6', // Verde acqua
    accent: '#69F0AE', // Verde chiaro
    
    // Background colors
    background: '#000000', // Nero puro
    surface: '#121212', // Grigio molto scuro
    surfaceVariant: '#1E1E1E', // Grigio scuro
    
    // Text colors
    onPrimary: '#000000', // Testo su verde
    onSecondary: '#000000', // Testo su verde acqua
    onBackground: '#FFFFFF', // Testo su sfondo nero
    onSurface: '#FFFFFF', // Testo su superficie
    
    // Status colors
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    
    // Neutral colors
    textPrimary: '#FFFFFF',
    textSecondary: '#B3B3B3',
    textTertiary: '#757575',
    
    // Border and divider
    border: '#333333',
    divider: '#2A2A2A',
    
    // Card and component backgrounds
    cardBackground: '#1A1A1A',
    inputBackground: '#2A2A2A',
    
    // Gradients
    gradientPrimary: ['#00E676', '#00C853'],
    gradientSecondary: ['#1DE9B6', '#00E676'],
    gradientDark: ['#121212', '#000000'],
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 999,
  },
  
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 40,
    },
    h2: {
      fontSize: 28,
      fontWeight: 'bold',
      lineHeight: 36,
    },
    h3: {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 32,
    },
    h4: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 28,
    },
    body1: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    },
    body2: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
    },
  },
  
  // Removed shadows to prevent undefined errors
  // Use explicit shadow properties in components instead
};
