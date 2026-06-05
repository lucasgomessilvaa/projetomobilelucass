import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProdutosScreen({ setTela }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎮 Produtos</Text>

      <TouchableOpacity style={styles.card} onPress={() => setTela('detalhes')}>
        <Text>🚗 Carrinho Controle Remoto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => setTela('detalhes')}>
        <Text>🧸 Ursinho de Pelúcia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.voltar} onPress={() => setTela('home')}>
        <Text style={styles.texto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  titulo:{fontSize:30,fontWeight:'bold',marginBottom:20},
  card:{backgroundColor:'#eee',padding:20,borderRadius:10,marginBottom:10},
  voltar:{backgroundColor:'tomato',padding:15,borderRadius:10},
  texto:{color:'#fff',textAlign:'center'}
});