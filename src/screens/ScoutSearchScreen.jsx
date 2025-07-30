import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import { theme, themeColors, themeSpacing, themeTypography } from '../config/theme.jsx';
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
    marginBottom: themeSpacing.md,
  },
  searchBar: {
    backgroundColor: themeColors.inputBackground,
    elevation: 0,
  },
  searchInput: {
    color: themeColors.textPrimary,
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
