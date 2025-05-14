import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => navigation.navigate('Detail', { recipe: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E68C',  // Cor de fundo atualizada
    paddingTop: 16,
  },
});
