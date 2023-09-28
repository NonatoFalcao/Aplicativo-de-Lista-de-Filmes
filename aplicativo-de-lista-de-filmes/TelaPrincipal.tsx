
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { Filme } from './Filme';

interface Props {
  filmes: Filme[];
  onAdicionarFilme: (filme: Filme) => void;
  onExcluirFilme: (id: number) => void;
}

const TelaPrincipal: React.FC<Props> = ({ filmes, onAdicionarFilme, onExcluirFilme }) => {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [nota, setNota] = useState('');

  const adicionarFilme = () => {
    if (titulo && genero && nota) {
      const novoFilme: Filme = {
        id: filmes.length + 1,
        titulo,
        genero,
        nota: parseFloat(nota),
      };

      onAdicionarFilme(novoFilme);
      setTitulo('');
      setGenero('');
      setNota('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Filmes</Text>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.filme}>
            <Text>{item.titulo}</Text>
            <Text>Gênero: {item.genero}</Text>
            <Text>Nota: {item.nota}</Text>
            <Button
              title="Excluir"
              onPress={() => onExcluirFilme(item.id)}
            />
          </View>
        )}
      />

      <Text style={styles.header}>Adicionar Filme</Text>
      <TextInput
        style={styles.input}
        placeholder="Título do Filme"
        value={titulo}
        onChangeText={(text) => setTitulo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero do Filme"
        value={genero}
        onChangeText={(text) => setGenero(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nota"
        keyboardType="numeric"
        value={nota}
        onChangeText={(text) => setNota(text)}
      />
      <Button title="Adicionar Filme" onPress={adicionarFilme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
  },
  filme: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
  },
});

export default TelaPrincipal;
