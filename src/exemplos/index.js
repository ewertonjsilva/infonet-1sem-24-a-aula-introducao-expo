import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Exemplos() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplos</Text>

            <TouchableOpacity style={styles.botao}>
                <Text>Exemplo 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Exemplo 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Exemplo 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Exemplo 4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Exemplo 5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Exemplo 6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Exemplo 7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Exemplo 8</Text>
            </TouchableOpacity>
            
        </View>
    );
}