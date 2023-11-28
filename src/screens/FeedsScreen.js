import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {user_login} from '../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function FeedsScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [plain, setPlain] = useState('');
  const [text, setText] = useState('');
  const submitHandler = () => {
    user_login({
      email,
      password,
    })
      .then(result => {
        if (result.status === 200) {
          AsyncStorage.setItem('AccessToken', result.data);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  const testHandler = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
      setPlain(res.data.title);
    });
  };
  const testFrontHandler = () => {
    axios
      .get('http://192.168.0.19:3000/api/hello')
      .then(res => {
        // console.log(res.data);
        setText(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={submitHandler} />
        <Button title="Test" onPress={testHandler} />
        <Button title="Test My Front" onPress={testFrontHandler} />
        <Text style={styles.testText}>{plain}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  testText: {
    color: '#00AC7C',
    fontWeight: 'bold',
  },
});

export default FeedsScreen;
