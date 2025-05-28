import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { addRecipe } from '../database/Database';

export default function AddRecipeScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');

  function handleAdd() {
    if (!title || !description || !instructions) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    addRecipe(title, description, instructions, () => {
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
      <Button title="Adicionar" onPress={handleAdd} />
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
