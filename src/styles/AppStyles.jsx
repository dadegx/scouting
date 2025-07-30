import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  title: {
    color: '#00E676',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  version: {
    color: '#B3B3B3',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
  status: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});
