import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { updateRecipe } from '../database/Database';

export default function EditRecipeScreen({ route, navigation }) {
  const { recipe } = route.params;

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [instructions, setInstructions] = useState(recipe.instructions);

  function handleUpdate() {
    if (!title || !description || !instructions) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    updateRecipe(recipe.id, title, description, instructions, () => {
      navigation.goBack();
    });
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Título"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Descrição curta"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Instruções"
        style={[styles.input, { height: 120 }]}
        value={instructions}
        onChangeText={setInstructions}
        multiline
      />
      <Button title="Salvar" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E68C',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 10,
    borderRadius: 6,
  },
});
