import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';
import { theme } from '../utils/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AdminSettingsScreen = () => {
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>⚙️ Impostazioni</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Configurazione Sistema</Text>
            <Text style={styles.description}>
              Gestisci le impostazioni della piattaforma, configurazioni di sicurezza, 
              parametri dell'applicazione e altre opzioni amministrative.
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Account</Text>
            <Button 
              mode="contained" 
              onPress={logout} 
              style={styles.logoutButton}
              buttonColor={theme.colors.error}
            >
              Esci dall'account
            </Button>
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
    marginBottom: theme.spacing.md,
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
  logoutButton: {
    marginTop: theme.spacing.md,
  },
});
