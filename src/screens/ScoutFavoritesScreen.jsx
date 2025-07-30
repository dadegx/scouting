import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { theme, themeColors, themeSpacing, themeTypography } from '../config/theme.jsx';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ScoutFavoritesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>❤️ Preferiti</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Giocatori Preferiti</Text>
            <Text style={styles.description}>
              I tuoi giocatori preferiti e quelli che hai aggiunto alla watchlist 
              appariranno qui per un accesso rapido.
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.background,
  },
  header: {
    padding: themeSpacing.md,
    backgroundColor: themeColors.surface,
  },
  title: {
    ...themeTypography.h2,
    color: themeColors.primary,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: themeSpacing.md,
  },
  card: {
    backgroundColor: themeColors.cardBackground,
    borderRadius: theme.borderRadius.md,
  },
  cardTitle: {
    ...themeTypography.h3,
    color: themeColors.primary,
    marginBottom: themeSpacing.md,
  },
  description: {
    ...themeTypography.body1,
    color: themeColors.textSecondary,
    lineHeight: 24,
  },
});
