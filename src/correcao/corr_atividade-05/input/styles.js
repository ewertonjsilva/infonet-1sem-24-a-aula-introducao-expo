import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    txtEntrada: {
        borderWidth: RFValue(4),
        textAlign: 'center',
        fontSize: RFValue(20),
        borderColor: '#E91E63',
        // height: 50, 
        color: '#E53935',
        borderRadius: RFValue(10),
        marginTop: RFValue(10),
        padding: RFValue(10)
    },
});

export default styles;