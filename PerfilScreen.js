import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PerfilScreen({ setTela }) {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>👤</Text>

      <Text style={styles.nome}>Lucas Henrique</Text>

      <Text>Cliente Premium</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setTela('home')}
      >
        <Text style={styles.texto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  avatar:{fontSize:80},
  nome:{fontSize:26,fontWeight:'bold'},
  botao:{backgroundColor:'#4ECDC4',padding:15,borderRadius:10,marginTop:20},
  texto:{color:'#fff'}
});