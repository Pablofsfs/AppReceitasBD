import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RecipeCard({ recipe, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.description}>{recipe.shortDescription}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FF8C00',
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 18,
    borderRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5e3600',
  },
  description: {
    fontSize: 14,
    color: '#7a5e42',
    marginTop: 10,
  },
});
