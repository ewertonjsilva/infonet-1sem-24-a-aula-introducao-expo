import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 

import Constants from 'expo-constants';

// Exemplos
import Exemplo1 from './src/exemplos/ex-01'; 
import Exemplo2 from './src/exemplos/ex-02'; 
import Exemplo3 from './src/exemplos/ex-03'; 
import Exemplo4 from './src/exemplos/ex-04';
import Exemplo5 from './src/exemplos/ex-05'; 
import Exemplo6 from './src/exemplos/ex-06';

// Atividades
import Atividade1 from './src/atividades/atividade-01';
import Atividade2 from './src/atividades/atividade-02'; 
import Atividade3 from './src/atividades/atividade-03';
import Atividade4 from './src/atividades/atividade-04'; 
import Atividade5 from './src/atividades/atividade-05';
import Atividade6 from './src/atividades/atividade-06';

// Correções
import CorrAtividade2 from './src/correcao/corr_atividade-02';
import CorrecaoAtv3 from './src/correcao/correcao_atividade-03'; 
import Atividade5Corr from './src/correcao/corr_atividade-05'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade6 />
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

