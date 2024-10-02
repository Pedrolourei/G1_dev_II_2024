import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../App'; 
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

type HomeScreenProp = StackNavigationProp<StackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const [users, setUsers] = useState<any[]>([]); 

  useEffect(() => {
    axios.get('http://192.168.42.170:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to load users');
      });
  }, []);

  const handleDeleteUser = (id: number) => {
    axios.delete(`http://192.168.42.170:3000/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
        Alert.alert('Success', 'User deleted successfully');
      })
      .catch(() => {
        Alert.alert('Error', 'Failed to delete user');
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 20, borderBottomWidth: 1 }}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Button title="View Details" onPress={() => navigation.navigate('DetailsUser', { id: item.id })} />
            <Button title="Edit" onPress={() => navigation.navigate('EditUser', { id: item.id })} />
            <Button title="Delete" onPress={() => handleDeleteUser(item.id)} />
          </View>
        )}
      />
      <Footer />
    </View>
  );
};

export default Home;
