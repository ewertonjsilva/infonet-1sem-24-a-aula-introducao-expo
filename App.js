import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 

import Constants from 'expo-constants';

// Exemplos
import Exemplo1 from './src/exemplos/ex-01'; 
import Exemplo2 from './src/exemplos/ex-02'; 
import Exemplo3 from './src/exemplos/ex-03';

// Atividades
import Atividade1 from './src/atividades/atividade-01';
import Atividade2 from './src/atividades/atividade-02'; 

// Correções
import CorrAtividade2 from './src/correcao/corr_atividade-02';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo3 />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',     
    // alignItems: 'center',
    // justifyContent: 'center', 
    padding: 8,
    paddingTop: Constants.statusBarHeight || 8,     
  },
});

