import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Card, Button, Avatar, DataTable, FAB } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export const AdminHomeScreen = ({ navigation }) => {
  const { user, logout } = useAuth();
  
  const [systemStats] = useState({
    totalUsers: 1247,
    activePlayers: 892,
    activeScouts: 245,
    totalVideos: 3456,
    monthlyGrowth: 12.5,
    dailyActiveUsers: 547,
  });

  const [recentUsers] = useState([
    { id: '1', name: 'Marco Rossi', type: 'player', joinDate: '2025-01-28', status: 'active' },
    { id: '2', name: 'Giovanni Scout', type: 'scout', joinDate: '2025-01-27', status: 'pending' },
    { id: '3', name: 'Luca Bianchi', type: 'player', joinDate: '2025-01-26', status: 'active' },
    { id: '4', name: 'Antonio Coach', type: 'scout', joinDate: '2025-01-25', status: 'active' },
  ]);

  const [systemAlerts] = useState([
    { type: 'warning', text: 'Storage al 85% - Considera espansione server', priority: 'high' },
    { type: 'info', text: '15 nuovi utenti registrati oggi', priority: 'normal' },
    { type: 'success', text: 'Backup completato con successo', priority: 'low' },
    { type: 'warning', text: '3 report di contenuto in attesa di revisione', priority: 'medium' },
  ]);

  const quickActions = [
    { title: 'Gestisci Utenti', icon: 'account-group', action: () => navigation.navigate('UserManagement') },
    { title: 'Report Sistema', icon: 'chart-box', action: () => navigation.navigate('SystemReports') },
    { title: 'Moderazione', icon: 'shield-check', action: () => navigation.navigate('Moderation') },
    { title: 'Impostazioni', icon: 'cog', action: () => navigation.navigate('AdminSettings') },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#4CAF50';
      case 'pending': return '#FF9800';
      case 'inactive': return '#757575';
      default: return '#757575';
    }
  };

  const getAlertColor = (priority) => {
    switch (priority) {
      case 'high': return '#F44336';
      case 'medium': return '#FF9800';
      case 'low': return '#4CAF50';
      default: return '#2196F3';
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6A1B9A', '#4A148C']}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Avatar.Text size={60} label={user?.name?.charAt(0) || 'A'} />
            <View style={styles.userText}>
              <Text style={styles.welcomeText}>Admin Panel</Text>
              <Text style={styles.userType}>👨‍💼 {user?.name}</Text>
            </View>
          </View>
          <Button mode="text" onPress={logout} textColor="white">
            Esci
          </Button>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* System Overview */}
        <Text style={styles.sectionTitle}>📊 Panoramica Sistema</Text>
        <View style={styles.statsGrid}>
          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <Text style={styles.statNumber}>{systemStats.totalUsers}</Text>
              <Text style={styles.statLabel}>Utenti Totali</Text>
            </Card.Content>
          </Card>
          
          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <Text style={styles.statNumber}>{systemStats.activePlayers}</Text>
              <Text style={styles.statLabel}>Giocatori Attivi</Text>
            </Card.Content>
          </Card>

          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <Text style={styles.statNumber}>{systemStats.activeScouts}</Text>
              <Text style={styles.statLabel}>Scout Attivi</Text>
            </Card.Content>
          </Card>

          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <Text style={styles.statNumber}>{systemStats.totalVideos}</Text>
              <Text style={styles.statLabel}>Video Caricati</Text>
            </Card.Content>
          </Card>

          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <Text style={styles.statNumber}>{systemStats.dailyActiveUsers}</Text>
              <Text style={styles.statLabel}>Utenti Attivi Oggi</Text>
            </Card.Content>
          </Card>

          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <Text style={styles.statNumber}>+{systemStats.monthlyGrowth}%</Text>
              <Text style={styles.statLabel}>Crescita Mensile</Text>
            </Card.Content>
          </Card>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>🚀 Azioni Rapide</Text>
        <View style={styles.actionsGrid}>
          {quickActions.map((action, index) => (
            <Card key={index} style={styles.actionCard} onPress={action.action}>
              <Card.Content style={styles.actionContent}>
                <Avatar.Icon size={40} icon={action.icon} style={styles.actionIcon} />
                <Text style={styles.actionTitle}>{action.title}</Text>
              </Card.Content>
            </Card>
          ))}
        </View>

        {/* System Alerts */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>🚨 Avvisi Sistema</Text>
            {systemAlerts.map((alert, index) => (
              <View key={index} style={styles.alertItem}>
                <View 
                  style={[
                    styles.alertDot, 
                    { backgroundColor: getAlertColor(alert.priority) }
                  ]} 
                />
                <Text style={styles.alertText}>{alert.text}</Text>
              </View>
            ))}
          </Card.Content>
        </Card>

        {/* Recent Users */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>👥 Nuovi Utenti</Text>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Nome</DataTable.Title>
                <DataTable.Title>Tipo</DataTable.Title>
                <DataTable.Title>Data</DataTable.Title>
                <DataTable.Title>Stato</DataTable.Title>
              </DataTable.Header>

              {recentUsers.map((user, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{user.name}</DataTable.Cell>
                  <DataTable.Cell>
                    {user.type === 'player' ? '⚽' : '👁️'} {user.type}
                  </DataTable.Cell>
                  <DataTable.Cell>{user.joinDate}</DataTable.Cell>
                  <DataTable.Cell>
                    <View 
                      style={[
                        styles.statusBadge, 
                        { backgroundColor: getStatusColor(user.status) }
                      ]}
                    >
                      <Text style={styles.statusText}>{user.status}</Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </Card.Content>
        </Card>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('AdminActions')}
        label="Azioni Admin"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerGradient: {
    paddingTop: 50,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userText: {
    marginLeft: 15,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  userType: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  statCard: {
    width: (width - 50) / 3,
    marginBottom: 10,
    elevation: 2,
  },
  statContent: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6A1B9A',
  },
  statLabel: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  actionCard: {
    width: (width - 50) / 2,
    marginBottom: 10,
    elevation: 2,
  },
  actionContent: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  actionIcon: {
    backgroundColor: '#6A1B9A',
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
  card: {
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 15,
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  alertDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },
  alertText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#6A1B9A',
  },
  bottomSpacing: {
    height: 80,
  },
});
