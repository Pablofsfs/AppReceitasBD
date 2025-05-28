import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';
import EditRecipeScreen from './screens/EditRecipeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#B22222' },
          headerTitleStyle: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
        }}
      >
        <Stack.Screen name="Receitas" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} options={({ route }) => ({ title: route.params.recipe.title })} />
        <Stack.Screen name="AddRecipe" component={AddRecipeScreen} options={{ title: 'Adicionar Receita' }} />
        <Stack.Screen name="EditRecipe" component={EditRecipeScreen} options={{ title: 'Editar Receita' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
