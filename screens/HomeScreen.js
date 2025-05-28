import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Button, Alert } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { getRecipes, createTables, deleteRecipe } from '../database/Database';

export default function HomeScreen({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  function loadRecipes() {
    getRecipes(setRecipes);
  }

  useEffect(() => {
    createTables();
    loadRecipes();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadRecipes();
    });
    return unsubscribe;
  }, [navigation]);

  function handleDelete(id) {
    Alert.alert(
      'Excluir Receita',
      'Tem certeza que deseja excluir esta receita?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            deleteRecipe(id, () => loadRecipes());
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Button
        title="Adicionar Receita"
        onPress={() => navigation.navigate('AddRecipe')}
      />
      <FlatList
        data={recipes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => navigation.navigate('Detail', { recipe: item, onDelete: () => handleDelete(item.id) })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E68C',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});
