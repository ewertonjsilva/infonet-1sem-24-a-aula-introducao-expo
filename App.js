import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 
import 'react-native-gesture-handler';

import Constants from 'expo-constants';

// Exemplos
import Exemplos from './src/exemplos';
import Exemplo1 from './src/exemplos/ex-01'; 
import Exemplo2 from './src/exemplos/ex-02'; 
import Exemplo3 from './src/exemplos/ex-03'; 
import Exemplo4 from './src/exemplos/ex-04';
import Exemplo5 from './src/exemplos/ex-05'; 
import Exemplo6 from './src/exemplos/ex-06'; 
import Exemplo7 from './src/exemplos/ex-07'; 
import Exemplo8 from './src/exemplos/ex-08';

// Atividades
import Atividades from './src/atividades';
import Atividade1 from './src/atividades/atividade-01';
import Atividade2 from './src/atividades/atividade-02'; 
import Atividade3 from './src/atividades/atividade-03';
import Atividade4 from './src/atividades/atividade-04'; 
import Atividade5 from './src/atividades/atividade-05';
import Atividade6 from './src/atividades/atividade-06'; 
import Atividade8 from './src/atividades/atividade-08';

import Sobre from './src/sobre';

// Correções
import CorrAtividade2 from './src/correcao/corr_atividade-02';
import CorrecaoAtv3 from './src/correcao/correcao_atividade-03'; 
import Atividade5Corr from './src/correcao/corr_atividade-05';  

import Navegacao from './src/rotas/containerNavegacao';

export default function App() {
  return (
    <View style={styles.container}>
      <Navegacao />
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

