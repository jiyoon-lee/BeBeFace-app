import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async () => {
  const authState = await messaging().requestPermission();
  console.log(authState);

  const enabed =
    authState === messaging.AuthorizationStatus.AUTHORIZED ||
    authState === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabed) {
    getFcmToken();
  }
};

// get fcmToken to send notification
export const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');

  if (!fcmToken) {
    try {
      const token = await messaging().getToken();
      console.log(token);

      if (token) {
        await AsyncStorage.setItem('fcmToken', token);
      }
    } catch (error) {
      console.log(`Can not get fcm token ${error}`);
    }
  }
};
