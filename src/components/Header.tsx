import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; 
import { StackParamList } from '../App'; 

type HeaderNavigationProp = StackNavigationProp<StackParamList, 'Home'>;

const Header = () => {
  const navigation = useNavigation<HeaderNavigationProp>(); 

  return (
    <View style={{ padding: 10, backgroundColor: '#ddd', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 20 }}>User Management</Text>
      <Button title="Add User" onPress={() => navigation.navigate('AddUser')} /> {}
    </View>
  );
};

export default Header;
