import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import { theme, themeColors, themeSpacing, themeTypography } from '../config/theme.jsx';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ScoutMessagesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>💬 Messaggi</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Centro Messaggi</Text>
            <Text style={styles.description}>
              Comunica direttamente con i giocatori, gestisci le tue conversazioni 
              e mantieni i contatti con i talenti che ti interessano.
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>

      <FAB
        icon="message-plus"
        style={styles.fab}
        onPress={() => {}}
        label="Nuovo Messaggio"
      />
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
  fab: {
    position: 'absolute',
    right: themeSpacing.md,
    bottom: themeSpacing.md,
    backgroundColor: themeColors.primary,
  },
});
