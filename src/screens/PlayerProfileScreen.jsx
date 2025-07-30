import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Avatar } from 'react-native-paper';
import { useAuth } from '../context/AuthContext.jsx';
import { theme, themeColors, themeSpacing, themeTypography } from '../config/theme.jsx';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export const PlayerProfileScreen = () => {
  const { user, logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={themeColors.gradientPrimary}
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
              buttonColor={themeColors.error}
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
    backgroundColor: themeColors.background,
  },
  headerGradient: {
    paddingVertical: themeSpacing.xl,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: themeColors.surface,
    marginBottom: themeSpacing.md,
  },
  name: {
    ...themeTypography.h2,
    color: themeColors.onPrimary,
    marginBottom: themeSpacing.xs,
  },
  subtitle: {
    ...themeTypography.body1,
    color: themeColors.onPrimary,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: themeSpacing.md,
  },
  card: {
    backgroundColor: themeColors.cardBackground,
    marginBottom: themeSpacing.md,
    borderRadius: theme.borderRadius.md,
  },
  cardTitle: {
    ...themeTypography.h4,
    color: themeColors.primary,
    marginBottom: themeSpacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: themeSpacing.sm,
  },
  infoLabel: {
    ...themeTypography.body1,
    color: themeColors.textSecondary,
  },
  infoValue: {
    ...themeTypography.body1,
    color: themeColors.textPrimary,
    fontWeight: '500',
  },
  logoutButton: {
    marginTop: themeSpacing.md,
  },
});
