import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {requestUserPermission} from './src/utils/notificationHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    requestUserPermission();

    getFcmToken();
  }, []);

  const getFcmToken = async () => {
    const token = await AsyncStorage.getItem('fcmToken');
    console.log(token);

    if (token) {
      setToken(token);
      console.log(token);
    }
  };
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Notification App</Text>
      <Text>좀 되라</Text>
      <Text selectable={true}>{token}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#676767',
    fontWeight: 'bold',
  },
});
