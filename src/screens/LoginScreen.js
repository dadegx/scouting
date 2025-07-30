import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Card, Chip } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';
import { useAuth } from '../context/AuthContext';
import { theme } from '../utils/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Email non valida').required('Email richiesta'),
  password: Yup.string().min(6, 'Password troppo corta').required('Password richiesta'),
});

export const LoginScreen = ({ navigation }) => {
  const { login } = useAuth();
  const [userType, setUserType] = useState('player');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (values, { setSubmitting }) => {
    const result = await login(values.email, values.password, userType);
    
    if (result.success) {
      Toast.show({
        type: 'success',
        text1: 'Login effettuato',
        text2: `Benvenuto in Football Scouting! ⚽`,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Errore login',
        text2: result.error || 'Controlla email e password',
      });
    }
    setSubmitting(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardContainer} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <LinearGradient
          colors={theme.colors.gradientPrimary}
          style={styles.gradient}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>⚽ Football Scouting</Text>
              <Text style={styles.subtitle}>
                Connetti giovani talenti con osservatori professionali
              </Text>
            </View>

            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.cardTitle}>
                  {isLogin ? 'Accedi' : 'Registrati'}
                </Text>

                <Text style={styles.userTypeLabel}>Seleziona il tipo di account:</Text>
                <View style={styles.userTypeButtons}>
                  <Chip 
                    selected={userType === 'player'}
                    onPress={() => setUserType('player')}
                    style={styles.userTypeChip}
                    textStyle={styles.chipText}
                  >
                    ⚽ Giocatore
                  </Chip>
                  <Chip 
                    selected={userType === 'scout'}
                    onPress={() => setUserType('scout')}
                    style={styles.userTypeChip}
                    textStyle={styles.chipText}
                  >
                    👁️ Scout
                  </Chip>
                  <Chip 
                    selected={userType === 'admin'}
                    onPress={() => setUserType('admin')}
                    style={styles.userTypeChip}
                    textStyle={styles.chipText}
                  >
                    👨‍💼 Admin
                  </Chip>
                </View>

                <Formik
                  initialValues={{ email: '', password: '', name: '' }}
                  validationSchema={loginSchema}
                  onSubmit={handleSubmit}
                >
                  {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                    <View>
                      {!isLogin && (
                        <TextInput
                          mode="outlined"
                          label="Nome completo"
                          value={values.name}
                          onChangeText={handleChange('name')}
                          onBlur={handleBlur('name')}
                          style={styles.input}
                          error={touched.name && errors.name}
                          theme={{ colors: { background: theme.colors.inputBackground } }}
                        />
                      )}

                      <TextInput
                        mode="outlined"
                        label="Email"
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                        error={touched.email && errors.email}
                        theme={{ colors: { background: theme.colors.inputBackground } }}
                      />
                      {touched.email && errors.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                      )}

                      <TextInput
                        mode="outlined"
                        label="Password"
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        secureTextEntry
                        style={styles.input}
                        error={touched.password && errors.password}
                        theme={{ colors: { background: theme.colors.inputBackground } }}
                      />
                      {touched.password && errors.password && (
                        <Text style={styles.errorText}>{errors.password}</Text>
                      )}

                      <Button
                        mode="contained"
                        onPress={handleSubmit}
                        loading={isSubmitting}
                        style={styles.button}
                        buttonColor={theme.colors.primary}
                      >
                        {isLogin ? 'Accedi' : 'Registrati'}
                      </Button>

                      <Button
                        mode="text"
                        onPress={() => setIsLogin(!isLogin)}
                        style={styles.switchButton}
                        textColor={theme.colors.primary}
                      >
                        {isLogin 
                          ? 'Non hai un account? Registrati' 
                          : 'Hai già un account? Accedi'
                        }
                      </Button>
                    </View>
                  )}
                </Formik>
              </Card.Content>
            </Card>
          </ScrollView>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  keyboardContainer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: theme.spacing.md,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.onPrimary,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    ...theme.typography.body1,
    color: theme.colors.onPrimary,
    opacity: 0.9,
    textAlign: 'center',
    lineHeight: 22,
  },
  card: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,
  },
  cardTitle: {
    ...theme.typography.h2,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  userTypeLabel: {
    ...theme.typography.body1,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
    fontWeight: '500',
  },
  userTypeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  userTypeChip: {
    flex: 1,
    marginHorizontal: 2,
  },
  chipText: {
    fontSize: 12,
  },
  input: {
    marginBottom: theme.spacing.sm,
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 12,
    marginBottom: theme.spacing.sm,
  },
  button: {
    marginTop: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
  },
  switchButton: {
    marginTop: theme.spacing.sm,
  },
});
