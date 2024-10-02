import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import AddUser from './screens/AddUser';
import EditUser from './screens/EditUser';
import DetailsUser from './screens/DetailsUser';
import { AuthProvider } from './context/AuthContext';
import AppNavigation from './navigation/AppNavigation'

// Defina o tipo de navegação (StackParamList)
export type StackParamList = {
  Home: undefined;
  AddUser: undefined;
  EditUser: { id: number };
  DetailsUser: { id: number };
};

const App = () => {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};

const Stack = createStackNavigator<StackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddUser" component={AddUser} />
        <Stack.Screen name="EditUser" component={EditUser} />
        <Stack.Screen name="DetailsUser" component={DetailsUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;