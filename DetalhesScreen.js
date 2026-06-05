import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetalhesScreen({ setTela }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🚗</Text>

      <Text style={styles.titulo}>Carrinho Controle Remoto</Text>

      <Text style={styles.preco}>R$ 149,90</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setTela('carrinho')}
      >
        <Text style={styles.texto}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  emoji:{fontSize:80},
  titulo:{fontSize:24,fontWeight:'bold'},
  preco:{fontSize:22,color:'green',marginVertical:15},
  botao:{backgroundColor:'#4ECDC4',padding:15,borderRadius:10},
  texto:{color:'#fff'}
});