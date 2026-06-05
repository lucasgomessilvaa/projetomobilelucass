import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CarrinhoScreen({ setTela }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛒 Carrinho</Text>

      <Text>Carrinho Controle Remoto</Text>

      <Text style={styles.total}>Total: R$149,90</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setTela('home')}
      >
        <Text style={styles.texto}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  titulo:{fontSize:28,fontWeight:'bold'},
  total:{fontSize:22,color:'green',marginVertical:20},
  botao:{backgroundColor:'tomato',padding:15,borderRadius:10},
  texto:{color:'#fff'}
});