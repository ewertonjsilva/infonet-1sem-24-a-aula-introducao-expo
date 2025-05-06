import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#E91E63',
        height: RFValue(60),
        justifyContent: 'center',
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        width: '20%',
    },
    buttonTouch: {
        backgroundColor: '#C51162',
    },
    textButton: {
        fontSize: RFValue(28),
        color: '#FF80AB',
        textAlign: 'center',
    },
    botaoGrande: {
        width: '100%',
    },
});

export default styles;