import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import { theme } from '../utils/theme';
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
  fab: {
    position: 'absolute',
    right: theme.spacing.md,
    bottom: theme.spacing.md,
    backgroundColor: theme.colors.primary,
  },
});
