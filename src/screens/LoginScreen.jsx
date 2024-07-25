import { APP_NAME, LOGO,THEME } from '@env';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import config from '../config/config';

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if(userName!=='' && password !==''){
      navigation.navigate('Home',{userName});
    }else{
      Alert('Invalid credentials');

    }
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: LOGO }} style={styles.logo} />
      <Text style={styles.title}>{APP_NAME}</Text>
      <TextInput
        style={styles.input}
        placeholder="userName"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button 
      disabled={userName==='' || password ===''}
      color={config.theme.colors.primary}
      title="Login" onPress={handleLogin} />
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: config.theme.colors.primary,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderColor: config.theme.colors.primary,
    borderWidth: 1,
    borderRadius: config.theme.colors.roundness,
  },
});

export default LoginScreen;
