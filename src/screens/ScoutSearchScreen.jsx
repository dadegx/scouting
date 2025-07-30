import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import { theme } from '../utils/theme.jsx';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ScoutSearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🔍 Ricerca Giocatori</Text>
        <Searchbar
          placeholder="Cerca per nome, posizione, età..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
          inputStyle={styles.searchInput}
        />
      </View>
      
      <ScrollView style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Ricerca Avanzata</Text>
            <Text style={styles.description}>
              Utilizza i filtri avanzati per trovare i giocatori che corrispondono 
              ai tuoi criteri specifici: posizione, età, abilità e molto altro.
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
    marginBottom: theme.spacing.md,
  },
  searchBar: {
    backgroundColor: theme.colors.inputBackground,
    elevation: 0,
  },
  searchInput: {
    color: theme.colors.textPrimary,
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
