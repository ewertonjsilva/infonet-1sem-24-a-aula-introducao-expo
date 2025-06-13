import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        backgroundColor: 'deepskyblue',
    },
    titulo: {
        fontSize: RFValue(20),
        fontWeight: 'bold',
        color: '#fafafa',
        marginTop: RFValue(10),
        marginBottom: RFValue(20),
    },
    botao: {
        alignItems: 'center',
        borderWidth: RFValue(3),
        borderColor: '#fafafa',
        borderRadius: RFValue(10),
        padding: RFValue(5),
        width: '80%', 
        marginBottom: RFValue(10),
    },
});

export default styles;