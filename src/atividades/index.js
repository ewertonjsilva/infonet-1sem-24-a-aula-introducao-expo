import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Atividades() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividades</Text>

            <TouchableOpacity style={styles.botao}>
                <Text>Atividade 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Atividade 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Atividade 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Atividade 4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Atividade 5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Atividade 6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Atividade 7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text>Atividade 8</Text>
            </TouchableOpacity>
            
        </View>
    );
}