import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { recipe, onDelete } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.instructions}>{recipe.instructions}</Text>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Editar Receita"
          onPress={() => navigation.navigate('EditRecipe', { recipe })}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Excluir Receita"
          color="red"
          onPress={() => {
            Alert.alert(
              'Excluir Receita',
              'Tem certeza que deseja excluir esta receita?',
              [
                { text: 'Cancelar', style: 'cancel' },
                {
                  text: 'Excluir',
                  style: 'destructive',
                  onPress: () => {
                    onDelete();
                    navigation.goBack();
                  },
                },
              ]
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E68C',
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
