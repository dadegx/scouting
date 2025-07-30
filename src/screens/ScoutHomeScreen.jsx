import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Card, Button, Avatar, Chip, Searchbar, FAB } from 'react-native-paper';
import { useAuth } from '../context/AuthContext.jsx';
import { LinearGradient } from 'expo-linear-gradient';

export const ScoutHomeScreen = ({ navigation }) => {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  
  const [players] = useState([
    {
      id: '1',
      name: 'Marco Rossi',
      age: 19,
      position: 'Attaccante',
      club: 'Juventus Primavera',
      rating: 4.5,
      location: 'Torino, Italia',
      avatar: 'MR',
      skills: ['Velocità', 'Finalizzazione', 'Dribbling'],
      videos: 12,
      views: 2340,
    },
    {
      id: '2',
      name: 'Alessandro Bianchi',
      age: 20,
      position: 'Centrocampista',
      club: 'AC Milan Youth',
      rating: 4.2,
      location: 'Milano, Italia',
      avatar: 'AB',
      skills: ['Passaggi', 'Visione', 'Resistenza'],
      videos: 8,
      views: 1890,
    },
    {
      id: '3',
      name: 'Giuseppe Verde',
      age: 18,
      position: 'Difensore',
      club: 'Roma Primavera',
      rating: 4.3,
      location: 'Roma, Italia',
      avatar: 'GV',
      skills: ['Contrasti', 'Gioco aereo', 'Leadership'],
      videos: 6,
      views: 1560,
    },
  ]);

  const [recentActivity] = useState([
    { type: 'discovery', text: 'Hai scoperto un nuovo talento: Marco Rossi', time: '1 ora fa' },
    { type: 'interest', text: 'Hai mostrato interesse per Alessandro Bianchi', time: '3 ore fa' },
    { type: 'message', text: 'Nuovo messaggio da Giuseppe Verde', time: '1 giorno fa' },
    { type: 'report', text: 'Report settimanale pronto per il download', time: '2 giorni fa' },
  ]);

  const renderPlayerCard = ({ item }) => (
    <Card style={styles.playerCard} onPress={() => navigation.navigate('PlayerDetail', { player: item })}>
      <Card.Content>
        <View style={styles.playerHeader}>
          <Avatar.Text size={50} label={item.avatar} />
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>{item.name}</Text>
            <Text style={styles.playerDetails}>{item.age} anni • {item.position}</Text>
            <Text style={styles.playerClub}>{item.club}</Text>
          </View>
          <View style={styles.playerRating}>
            <Text style={styles.ratingText}>{item.rating}</Text>
            <Text style={styles.ratingLabel}>⭐</Text>
          </View>
        </View>
        
        <View style={styles.playerStats}>
          <Text style={styles.statText}>📹 {item.videos} video</Text>
          <Text style={styles.statText}>👀 {item.views} visualizzazioni</Text>
          <Text style={styles.statText}>📍 {item.location}</Text>
        </View>

        <View style={styles.skillsContainer}>
          {item.skills.map((skill, index) => (
            <Chip key={index} mode="outlined" style={styles.skillChip}>
              {skill}
            </Chip>
          ))}
        </View>

        <View style={styles.playerActions}>
          <Button mode="contained" compact buttonColor="#2E7D32">
            Mostra Interesse
          </Button>
          <Button mode="outlined" compact>
            Messaggio
          </Button>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1976D2', '#1565C0']}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Avatar.Text size={60} label={user?.name?.charAt(0) || 'S'} />
            <View style={styles.userText}>
              <Text style={styles.welcomeText}>Ciao, {user?.name}!</Text>
              <Text style={styles.userType}>👁️ Scout Professionista</Text>
            </View>
          </View>
          <Button mode="text" onPress={logout} textColor="white">
            Esci
          </Button>
        </View>

        <Searchbar
          placeholder="Cerca giocatori per nome, posizione..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Quick Stats */}
        <View style={styles.quickStats}>
          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <Text style={styles.statNumber}>47</Text>
              <Text style={styles.statLabel}>Giocatori Scoperti</Text>
            </Card.Content>
          </Card>
          
          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Interessi Attivi</Text>
            </Card.Content>
          </Card>

          <Card style={styles.statCard}>
            <Card.Content style={styles.statContent}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Contratti Chiusi</Text>
            </Card.Content>
          </Card>
        </View>

        {/* Recommended Players */}
        <Text style={styles.sectionTitle}>🌟 Giocatori Raccomandati</Text>
        <FlatList
          data={players}
          renderItem={renderPlayerCard}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />

        {/* Recent Activity */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Attività Recenti</Text>
            {recentActivity.map((activity, index) => (
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
        icon="account-search"
        style={styles.fab}
        onPress={() => navigation.navigate('SearchPlayers')}
        label="Cerca Talenti"
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
    marginBottom: 15,
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
  searchBar: {
    marginHorizontal: 20,
    elevation: 0,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  quickStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    marginHorizontal: 4,
    elevation: 2,
  },
  statContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  playerCard: {
    marginBottom: 15,
    elevation: 3,
  },
  playerHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  playerInfo: {
    flex: 1,
    marginLeft: 15,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  playerDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  playerClub: {
    fontSize: 14,
    color: '#1976D2',
    marginTop: 2,
    fontWeight: '500',
  },
  playerRating: {
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF9800',
  },
  ratingLabel: {
    fontSize: 16,
  },
  playerStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statText: {
    fontSize: 12,
    color: '#666',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  skillChip: {
    marginRight: 8,
    marginBottom: 4,
  },
  playerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1976D2',
    marginTop: 6,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  activityTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#1976D2',
  },
  bottomSpacing: {
    height: 80,
  },
});
