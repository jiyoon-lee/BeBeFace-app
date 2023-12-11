import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Platform,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import useLogin from '../hooks/useLogin';

function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {mutate: login, isLoading} = useLogin();

  const onPress = () => {
    if (isLoading) {
      return;
    }
    login({
      email,
      password,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.block}
      behavior={Platform.select({ios: 'padding'})}>
      <View style={styles.block}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 40}}>Login here</Text>
          <Text style={{fontSize: 17, marginTop: 5, marginBottom: 80}}>
            Welcome to BeBeFace!
          </Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <TextInput
            style={styles.input}
            placeholder="이메일"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Pressable
            style={({pressed}) => [
              styles.submit,
              Platform.OS === 'ios' && pressed && styles.submitPressed,
            ]}
            android_ripple={{color: '#42a5f5'}}
            onPress={onPress}>
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.submitText}>로그인</Text>
            )}
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  block: {
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  input: {
    padding: 8,
    backgroundColor: '#FFD6AA',
    marginBottom: 8,
    borderRadius: 5,
  },
  submit: {
    marginTop: 24,
    backgroundColor: '#FF9F39',
    height: 56,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitPressed: {
    opacity: 0.75,
  },
  submitText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AuthForm;
