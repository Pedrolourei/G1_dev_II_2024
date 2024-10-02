import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; 
import { StackParamList } from '../App'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

type AddUserScreenProp = StackNavigationProp<StackParamList, 'AddUser'>;

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  
  const navigation = useNavigation<AddUserScreenProp>();

  const handleAddUser = () => {
    if (name && email && login && password && city) {
      axios.post('http://192.168.42.170:3000/users', { name, email, login, password, city })
        .then(() => {
          Alert.alert('Success', 'User added successfully');
          navigation.navigate('Home'); 
        })
        .catch(() => {
          Alert.alert('Error', 'Failed to add user');
        });
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
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
        <Picker
          selectedValue={city}
          onValueChange={(itemValue) => setCity(itemValue)}
        >
          <Picker.Item label="Select a city" value="" />
          <Picker.Item label="São Paulo" value="São Paulo" />
          <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
          <Picker.Item label="Belo Horizonte" value="Belo Horizonte" />
        </Picker>
        <Button title="Add User" onPress={handleAddUser} />
      </View>
      <Footer />
    </View>
  );
};

export default AddUser;
