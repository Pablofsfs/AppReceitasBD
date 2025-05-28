import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('recipes.db');

export function createTables() {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        instructions TEXT
      );`
    );
  });
}

export function getRecipes(callback) {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM recipes;',
      [],
      (_, { rows: { _array } }) => callback(_array),
      (_, error) => { console.log(error); return false; }
    );
  });
}

export function addRecipe(title, description, instructions, callback) {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO recipes (title, description, instructions) VALUES (?, ?, ?);',
      [title, description, instructions],
      (_, result) => callback(result.insertId),
      (_, error) => { console.log(error); return false; }
    );
  });
}

export function updateRecipe(id, title, description, instructions, callback) {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE recipes SET title = ?, description = ?, instructions = ? WHERE id = ?;',
      [title, description, instructions, id],
      (_, result) => callback(result),
      (_, error) => { console.log(error); return false; }
    );
  });
}

export function deleteRecipe(id, callback) {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM recipes WHERE id = ?;',
      [id],
      (_, result) => callback(result),
      (_, error) => { console.log(error); return false; }
    );
  });
}
