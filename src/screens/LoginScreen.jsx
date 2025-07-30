import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Card, Chip } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';
import { useAuth } from '../context/AuthContext.jsx';
import { theme, themeColors, themeSpacing, themeTypography } from '../config/theme.jsx';
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
          colors={themeColors.gradientPrimary}
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
                          theme={{ colors: { background: themeColors.inputBackground } }}
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
                        theme={{ colors: { background: themeColors.inputBackground } }}
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
                        theme={{ colors: { background: themeColors.inputBackground } }}
                      />
                      {touched.password && errors.password && (
                        <Text style={styles.errorText}>{errors.password}</Text>
                      )}

                      <Button
                        mode="contained"
                        onPress={handleSubmit}
                        loading={isSubmitting}
                        style={styles.button}
                        buttonColor={themeColors.primary}
                      >
                        {isLogin ? 'Accedi' : 'Registrati'}
                      </Button>

                      <Button
                        mode="text"
                        onPress={() => setIsLogin(!isLogin)}
                        style={styles.switchButton}
                        textColor={themeColors.primary}
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
    backgroundColor: themeColors.background,
  },
  keyboardContainer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: themeSpacing.md,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: themeSpacing.xl,
  },
  title: {
    ...themeTypography.h1,
    color: themeColors.onPrimary,
    textAlign: 'center',
    marginBottom: themeSpacing.sm,
  },
  subtitle: {
    ...themeTypography.body1,
    color: themeColors.onPrimary,
    opacity: 0.9,
    textAlign: 'center',
    lineHeight: 22,
  },
  card: {
    backgroundColor: themeColors.cardBackground,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.large,
  },
  cardTitle: {
    ...themeTypography.h2,
    color: themeColors.primary,
    textAlign: 'center',
    marginBottom: themeSpacing.md,
  },
  userTypeLabel: {
    ...themeTypography.body1,
    color: themeColors.textPrimary,
    marginBottom: themeSpacing.sm,
    fontWeight: '500',
  },
  userTypeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: themeSpacing.md,
  },
  userTypeChip: {
    flex: 1,
    marginHorizontal: 2,
  },
  chipText: {
    fontSize: 12,
  },
  input: {
    marginBottom: themeSpacing.sm,
  },
  errorText: {
    color: themeColors.error,
    fontSize: 12,
    marginBottom: themeSpacing.sm,
  },
  button: {
    marginTop: themeSpacing.md,
    paddingVertical: themeSpacing.xs,
  },
  switchButton: {
    marginTop: themeSpacing.sm,
  },
});
