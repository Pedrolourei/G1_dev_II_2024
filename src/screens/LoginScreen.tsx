
import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import AuthContext from '../context/AuthContext';
import { RootStackParamList } from '../navigation';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const authContext = useContext(AuthContext);

  const handleLogin = () => {
    if (authContext) {
      authContext.login(); // Chame a função de login do contexto
      navigation.navigate('Home'); // Navega para a tela Home após o login
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default LoginScreen;
