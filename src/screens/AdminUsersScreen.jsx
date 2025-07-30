import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { theme, themeColors, themeSpacing, themeTypography } from '../config/theme.jsx';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AdminUsersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>👥 Gestione Utenti</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Amministrazione Utenti</Text>
            <Text style={styles.description}>
              Gestisci tutti gli utenti della piattaforma: giocatori, scout e altri admin. 
              Approva registrazioni, gestisci privilegi e monitora l'attività.
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
