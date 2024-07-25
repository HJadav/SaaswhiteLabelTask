import React from 'react';
import { LOGO } from '@env';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import config from '../config/config';

const HomeScreen = ({ navigation,route }) => {
  const {userName} = route?.params || null
  return (
    <View style={styles.container}>
        <Image source={{ uri: LOGO }} style={styles.logo} />
      <Text style={styles.title}>Welcome {userName}!</Text>
      <Button
        title="Logout"
        onPress={() => navigation.navigate('Login')}
        color={config.theme.colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: config.theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: config.theme.colors.primary,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default HomeScreen;
