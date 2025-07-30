import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Avatar } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';
import { theme } from '../utils/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export const PlayerProfileScreen = () => {
  const { user, logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={theme.colors.gradientPrimary}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <Avatar.Text 
            size={80} 
            label={user?.name?.charAt(0) || 'P'} 
            style={styles.avatar}
          />
          <Text style={styles.name}>{user?.name || 'Giocatore'}</Text>
          <Text style={styles.subtitle}>⚽ Profilo Giocatore</Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Informazioni Personali</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email:</Text>
              <Text style={styles.infoValue}>{user?.email}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Tipo Account:</Text>
              <Text style={styles.infoValue}>Giocatore</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Membro dal:</Text>
              <Text style={styles.infoValue}>
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('it-IT') : 'N/A'}
              </Text>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Azioni</Text>
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
  headerGradient: {
    paddingVertical: theme.spacing.xl,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.colors.surface,
    marginBottom: theme.spacing.md,
  },
  name: {
    ...theme.typography.h2,
    color: theme.colors.onPrimary,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.typography.body1,
    color: theme.colors.onPrimary,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: theme.spacing.md,
  },
  card: {
    backgroundColor: theme.colors.cardBackground,
    marginBottom: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  cardTitle: {
    ...theme.typography.h4,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm,
  },
  infoLabel: {
    ...theme.typography.body1,
    color: theme.colors.textSecondary,
  },
  infoValue: {
    ...theme.typography.body1,
    color: theme.colors.textPrimary,
    fontWeight: '500',
  },
  logoutButton: {
    marginTop: theme.spacing.md,
  },
});
