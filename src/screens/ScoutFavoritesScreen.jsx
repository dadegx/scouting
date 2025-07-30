import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { theme } from '../utils/theme.jsx';
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
    backgroundColor: theme.colors.background,
  },
  header: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: theme.spacing.md,
  },
  card: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.md,
  },
  cardTitle: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  },
  description: {
    ...theme.typography.body1,
    color: theme.colors.textSecondary,
    lineHeight: 24,
  },
});
