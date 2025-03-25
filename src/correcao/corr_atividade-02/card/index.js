import { View, Text, Image } from 'react-native'; 

import styles from './styles'; 

function Card ({ nome, descricao, preco, imagem }) {
    return(
        <View style={styles.container}>
            <Image source={imagem} style={styles.img} />
            <Text style={styles.titulo}>{nome}</Text>
            <Text style={styles.texto}>{descricao}</Text>
            <Text style={styles.texto}>{preco}</Text> 
        </View>
    );
}

export default Card;

