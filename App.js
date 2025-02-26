import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

import Constants from 'expo-constants';

import Exemplo1 from './src/exemplos/ex-01';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',     
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: Constants.statusBarHeight || 12,     
  },
});
