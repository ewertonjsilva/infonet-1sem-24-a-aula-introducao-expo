import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input'; 
import Botao from './botao';
import SelecionaOperacao from './operacoes';

import styles from './styles';

export default function Atividade5Corr () {

    const [sinal, setSinal] = useState('');

    const [n1, setN1] = useState(0.00);
    const [n2, setN2] = useState(0.00);
    const [total, setTotal] = useState(0.00);
    
    function handleCalcula(operacao) {
        const resultado = SelecionaOperacao(n1, n2, operacao);
        setSinal(operacao);
        setTotal(resultado);
    }

    function zerar() {
        setTotal(0);
        setN1(0);
        setN2(0);
        setSinal('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Atividade 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <Input valor={n1} atualizaValor={setN1} />

            <Text style={styles.txtSaida}> {sinal} </Text>

            <Text style={styles.textLabel}> 2º número </Text>
            <Input valor={n2} atualizaValor={setN2} />

            <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <Input valor={total.toFixed(2)} readOnly='true' />

            <View style={styles.containerBotoes}>
                <Botao operacao={() => handleCalcula('+')}>+</Botao>
                <Botao operacao={() => handleCalcula('-')}>-</Botao>  
                <Botao operacao={() => handleCalcula('*')}>*</Botao>  
                <Botao operacao={() => handleCalcula('/')}>/</Botao>  
            </View>

            <Botao operacao={zerar} botaozao>Zerar</Botao>

        </View>
    );
}