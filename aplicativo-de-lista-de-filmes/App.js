import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TelaPrincipal from './TelaPrincipal'; 
import { Filme } from './Filme'; 

export default function App() {
  const [filmes, setFilmes] = useState([]); 

  const adicionarFilme = (novoFilme) => {
    setFilmes([...filmes, novoFilme]);
  };

  const excluirFilme = (id) => {
    const novaListaFilmes = filmes.filter((filme) => filme.id !== id);
    setFilmes(novaListaFilmes);
  };

  return (
    <View style={styles.container}>
      <TelaPrincipal filmes={filmes} onAdicionarFilme={adicionarFilme} onExcluirFilme={excluirFilme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
