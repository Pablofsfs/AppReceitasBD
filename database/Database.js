import * as SQLite from 'expo-sqlite';
import { Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';

const db = SQLite.openDatabase('test.db');

export default function App() {
  const [result, setResult] = useState('No result yet');

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, value TEXT);'
      );
    });
  }, []);

  const addItem = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO items (value) VALUES (?)', ['Hello'], 
        () => setResult('Item inserted'),
        (t, error) => { console.log(error); setResult('Error ' + error.message); return false; }
      );
    });
  };

  const getItems = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM items', [], 
        (_, { rows }) => setResult(JSON.stringify(rows._array)),
        (t, error) => { console.log(error); setResult('Error ' + error.message); return false; }
      );
    });
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Button title="Add Item" onPress={addItem} />
      <Button title="Get Items" onPress={getItems} />
      <Text>{result}</Text>
    </View>
  );
}
