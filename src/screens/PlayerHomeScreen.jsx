import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Card, Button, FAB, Avatar, Chip, ProgressBar } from 'react-native-paper';
import { useAuth } from '../context/AuthContext.jsx';
import { theme } from '../utils/theme.jsx';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export const PlayerHomeScreen = ({ navigation }) => {
  const { user, logout } = useAuth();
  const [stats] = useState({
    profileViews: 156,
    videoUploads: 8,
    scoutInterests: 12,
    skillRating: 4.2,
  });

  const quickActions = [
    { title: 'Carica Video', icon: 'video-plus', action: () => navigation.navigate('UploadVideo') },
    { title: 'Il Mio Profilo', icon: 'account', action: () => navigation.navigate('PlayerProfile') },
    { title: 'Messaggi Scout', icon: 'message', action: () => navigation.navigate('Messages') },
    { title: 'Statistiche', icon: 'chart-line', action: () => navigation.navigate('PlayerStats') },
  ];

  const recentActivities = [
    { type: 'view', text: 'Il tuo profilo è stato visualizzato da AC Milan Scout', time: '2 ore fa' },
    { type: 'interest', text: 'Juventus Scout ha mostrato interesse', time: '1 giorno fa' },
    { type: 'video', text: 'Nuovo video caricato: "Gol in allenamento"', time: '2 giorni fa' },
    { type: 'rating', text: 'Valutazione aggiornata: 4.2/5', time: '3 giorni fa' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={theme.colors.gradientPrimary}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Avatar.Text size={60} label={user?.name?.charAt(0) || 'P'} />
            <View style={styles.userText}>
              <Text style={styles.welcomeText}>Ciao, {user?.name}!</Text>
              <Text style={styles.userType}>⚽ Giocatore</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <Text style={styles.statNumber}>{stats.profileViews}</Text>
              <Text style={styles.statLabel}>Visualizzazioni</Text>
            </Card.Content>
          </Card>
          
          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <Text style={styles.statNumber}>{stats.videoUploads}</Text>
              <Text style={styles.statLabel}>Video</Text>
            </Card.Content>
          </Card>

          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <Text style={styles.statNumber}>{stats.scoutInterests}</Text>
              <Text style={styles.statLabel}>Interessi Scout</Text>
            </Card.Content>
          </Card>
        </View>

        {/* Skill Rating */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Valutazione Complessiva</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{stats.skillRating}/5.0</Text>
              <ProgressBar progress={stats.skillRating / 5} color="#4CAF50" style={styles.progressBar} />
            </View>
            <View style={styles.skillTags}>
              <Chip icon="soccer" mode="outlined" style={styles.chip}>Velocità</Chip>
              <Chip icon="target" mode="outlined" style={styles.chip}>Precisione</Chip>
              <Chip icon="heart" mode="outlined" style={styles.chip}>Resistenza</Chip>
            </View>
          </Card.Content>
        </Card>

        {/* Quick Actions */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Azioni Rapide</Text>
            <View style={styles.actionsGrid}>
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  mode="outlined"
                  icon={action.icon}
                  onPress={action.action}
                  style={styles.actionButton}
                  contentStyle={styles.actionButtonContent}
                >
                  {action.title}
                </Button>
              ))}
            </View>
          </Card.Content>
        </Card>

        {/* Recent Activities */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Attività Recenti</Text>
            {recentActivities.map((activity, index) => (
              <View key={index} style={styles.activityItem}>
                <View style={styles.activityDot} />
                <View style={styles.activityContent}>
                  <Text style={styles.activityText}>{activity.text}</Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
              </View>
            ))}
          </Card.Content>
        </Card>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('UploadVideo')}
        label="Carica Video"
      />
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userText: {
    marginLeft: theme.spacing.md,
  },
  welcomeText: {
    ...theme.typography.h3,
    color: theme.colors.onPrimary,
  },
  userType: {
    ...theme.typography.body1,
    color: theme.colors.onPrimary,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: theme.spacing.md,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  statCard: {
    width: (width - 50) / 3,
    backgroundColor: theme.colors.cardBackground,
    ...theme.shadows.small,
  },
  statContent: {
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  statNumber: {
    ...theme.typography.h3,
    color: theme.colors.primary,
  },
  statLabel: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  card: {
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.small,
  },
  cardTitle: {
    ...theme.typography.h4,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  ratingText: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    marginRight: theme.spacing.md,
  },
  progressBar: {
    flex: 1,
    height: 8,
    borderRadius: 4,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    marginRight: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: (width - 70) / 2,
    marginBottom: theme.spacing.sm,
  },
  actionButtonContent: {
    height: 50,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    marginTop: 6,
    marginRight: theme.spacing.sm,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    ...theme.typography.body2,
    color: theme.colors.textPrimary,
    lineHeight: 20,
  },
  activityTime: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
  fab: {
    position: 'absolute',
    right: theme.spacing.md,
    bottom: theme.spacing.md,
    backgroundColor: theme.colors.primary,
  },
  bottomSpacing: {
    height: 80,
  },
});
