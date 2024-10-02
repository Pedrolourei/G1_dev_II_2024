import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; 
import { StackParamList } from '../App'; 
import axios from 'axios';

type EditUserScreenProp = StackNavigationProp<StackParamList, 'EditUser'>;

const EditUser = () => {
  const navigation = useNavigation<EditUserScreenProp>();
  const route = useRoute(); 

  const { id } = route.params as { id: number };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
 
    axios.get(`http://192.168.42.170:3000/users/${id}`)
      .then(response => {
        const user = response.data;
        setName(user.name);
        setEmail(user.email);
        setLogin(user.login);
        setPassword(user.password);
        setCity(user.city);
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to load user data');
      });
  }, [id]);

  const handleUpdateUser = () => {
    if (name && email && login && password && city) {
      axios.put(`http://192.168.42.170:3000/users/${id}`, { name, email, login, password, city })
        .then(() => {
          Alert.alert('Success', 'User updated successfully');
          navigation.navigate('Home');
        })
        .catch(() => {
          Alert.alert('Error', 'Failed to update user');
        });
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Name:</Text>
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
        value={name}
        onChangeText={setName}
      />
      <Text>Email:</Text>
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
        value={email}
        onChangeText={setEmail}
      />
      <Text>Login:</Text>
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
        value={login}
        onChangeText={setLogin}
      />
      <Text>Password:</Text>
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text>City:</Text>
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
        value={city}
        onChangeText={setCity}
      />
      <Button title="Update User" onPress={handleUpdateUser} />
    </View>
  );
};

export default EditUser;
