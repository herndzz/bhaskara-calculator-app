import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BhaskaraCalculator = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const calcularBhaskara = () => {
    const discriminante = Math.pow(b, 2) - 4 * a * c;
    if (discriminante > 0) {
      const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      setResult(`x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`);
    } else if (discriminante === 0) {
      const x = -b / (2 * a);
      setResult(`x = ${x.toFixed(2)}`);
    } else {
      setResult('A equação não possui soluções reais');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor de A (Ex: X²)"
        keyboardType="numeric"
        value={a}
        onChangeText={text => setA(parseFloat(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o valor de B (Ex: 2X)"
        keyboardType="numeric"
        value={b}
        onChangeText={text => setB(parseFloat(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o valor de C (Ex: 2)"
        keyboardType="numeric"
        value={c}
        onChangeText={text => setC(parseFloat(text))}
      />
      <Button title="Calcular" onPress={calcularBhaskara} />
      <Text style={styles.textResult}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 2, 
    marginBottom: 10, 
    padding: 10
  },
  textResult: {
    marginTop: 10,
    fontWeight: 700
  }
});

export default BhaskaraCalculator;
