import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; 
import { StackParamList } from '../App'; 
import axios from 'axios';

type DetailsUserScreenProp = StackNavigationProp<StackParamList, 'DetailsUser'>;

const DetailsUser = () => {
  const navigation = useNavigation<DetailsUserScreenProp>();
  const route = useRoute();

  // Acesse o parâmetro `id` da rota
  const { id } = route.params as { id: number };

  const [user, setUser] = useState<{ name: string; email: string; login: string; password: string; city: string } | null>(null);

  useEffect(() => {
    // Carregar os dados do usuário
    axios.get(`http://192.168.0.213:3000/users/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to load user data');
      });
  }, [id]);

  return (
    <View style={{ padding: 20 }}>
      {user ? (
        <>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Login: {user.login}</Text>
          <Text>Password: {user.password}</Text>
          <Text>City: {user.city}</Text>
          <Button title="Edit User" onPress={() => navigation.navigate('EditUser', { id })} />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default DetailsUser;

