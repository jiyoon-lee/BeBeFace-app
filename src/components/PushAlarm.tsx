import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Milk = require('../assets/milk.png');
const Poop = require('../assets/poop.png');
const Shower = require('../assets/shower.png');
const Sleep = require('../assets/sleep.png');
const {height} = Dimensions.get('window');

const categories = [
  {image: Milk, value: 'milk'},
  {image: Poop, value: 'poop'},
  {image: Shower, value: 'shower'},
  {image: Sleep, value: 'sleep'},
];
function UserMenuScreen() {
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const onPress = (type: string) => {
    console.log(category);
    setCategory(type);
  };
  const onSubmit = () => {
    console.log('요청보냄');
  };
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{height: height / 3}}
          resizeMode="contain"
          source={require('../assets/illustration.png')}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 30,
          }}>
          <Text style={{fontSize: 30, color: '#FF9F39', fontWeight: 'bold'}}>
            하루 일기
          </Text>
          <Text style={{fontSize: 15, color: 'gray', marginTop: 10}}>
            보호자에게 아이의 행동 기록을 공유해요.
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 40,
            paddingVertical: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {categories.map(category => (
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => onPress(category.value)}>
              <Image
                source={category.image}
                resizeMode="contain"
                style={{height: 40}}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={{paddingHorizontal: 30}}>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            placeholder="코멘트를 남겨주세요."
            value={content}
            onChangeText={setContent}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Pressable
            style={[styles.submit]}
            android_ripple={{color: '#00BCAA'}}
            onPress={onSubmit}>
            <Text style={styles.submitText}>전송</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  categoryBtn: {
    backgroundColor: '#FFEACE',
    borderColor: '#FF9F39',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  input: {
    backgroundColor: 'white',
    padding: 8,
    borderColor: '#dddddd',
    borderWidth: 1,
    marginBottom: 8,
    textAlignVertical: 'top',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  submit: {
    marginTop: 5,
    backgroundColor: '#FF9F39',
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserMenuScreen;
