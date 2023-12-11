import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {RootStackNavigationProp} from './types';
import {clearToken} from '../api/client';
import {useUserState} from '../context/UserContext';
import authStorage from '../storages/authStorage';

function UserMenuScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const [user, setUser] = useUserState();
  const onLogin = () => navigation.navigate('Login');
  const onLogout = () => {
    setUser(null);
    clearToken();
    authStorage.clear();
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {user ? (
        <Pressable
          style={[styles.submit]}
          android_ripple={{color: '#00BCAA'}}
          onPress={onLogout}>
          <Text style={styles.submitText}>로그아웃</Text>
        </Pressable>
      ) : (
        <Pressable
          style={[styles.submit]}
          android_ripple={{color: '#00BCAA'}}
          onPress={onLogin}>
          <Text style={styles.submitText}>로그인</Text>
        </Pressable>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  submit: {
    marginTop: 5,
    backgroundColor: '#FF9F39',
    height: 80,
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default UserMenuScreen;
