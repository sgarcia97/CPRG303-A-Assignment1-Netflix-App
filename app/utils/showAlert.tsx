import { Alert } from 'react-native';

const showAlert = (title: string, message: string, buttons?: any[]) => {
  Alert.alert(title, message, buttons || [{ text: 'OK' }]);
};

export default showAlert;