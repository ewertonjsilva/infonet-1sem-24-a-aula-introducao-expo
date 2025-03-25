import { View, Text, Image } from 'react-native'; 

import styles from './styles'; 

import img from '../../../assets/camisaBranca.png';

import Card from './card';

function CorrAtividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            
            <Card 
                nome='Camisa Branca' 
                descricao={'Camisa titular'} 
                preco={'R$ 350,00'} 
                imagem={img} 
            />

        </View>
    );
}

export default CorrAtividade2;

