import { AuthProvider } from '../context/AuthContext';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AddUser from '../screens/AddUser';
import EditUser from '../screens/EditUser';
import DetailsUser from '../screens/DetailsUser';
import LoginScreen from '../screens/LoginScreen'; 

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (

    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddUser" component={AddUser} />
          <Stack.Screen name="EditUser" component={EditUser} />
          <Stack.Screen name="DetailsUser" component={DetailsUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default AppNavigation;
