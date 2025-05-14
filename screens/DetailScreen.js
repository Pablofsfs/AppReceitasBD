import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DetailScreen({ route }) {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.instructions}>{recipe.instructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E68C',  // Cor de fundo atualizada
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4e2e00',
    marginBottom: 12,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5a4333',
  },
});
