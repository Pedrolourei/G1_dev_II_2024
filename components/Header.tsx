import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // Importar o StackNavigationProp
import { StackParamList } from '../App'; // Importar a lista de parâmetros das rotas

// Tipagem para a navegação
type HeaderNavigationProp = StackNavigationProp<StackParamList, 'Home'>;

const Header = () => {
  const navigation = useNavigation<HeaderNavigationProp>(); // Tipar o useNavigation

  return (
    <View style={{ padding: 10, backgroundColor: '#ddd', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 20 }}>User Management</Text>
      <Button title="Add User" onPress={() => navigation.navigate('AddUser')} /> {/* Corrigir o navigate */}
    </View>
  );
};

export default Header;
