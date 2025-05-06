import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FF80AB',
        padding: RFValue(8),
        width: '100%',
        borderRadius: RFValue(20),
    },
    titulo: {
        margin: RFValue(6),
        fontSize: RFValue(28),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C51162',
    },
    txtSaida: {
        margin: RFValue(6),
        fontSize: RFValue(20),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E91E63',
    },
    textLabel: {
        fontSize: RFValue(16),
        fontWeight: 'bold',
        color: '#C51162',
    },
    containerBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

export default styles;