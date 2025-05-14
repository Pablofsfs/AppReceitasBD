import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#B22222',  
          },
          headerTitleStyle: {
            fontSize: 28,  
            fontWeight: 'bold',
            color: '#fff',  
            padding: 10,
          },
        }}
      >
        <Stack.Screen name="Receitas 🍔" component={HomeScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({ title: route.params.recipe.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
