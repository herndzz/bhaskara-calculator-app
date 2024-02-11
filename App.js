import { StyleSheet, View, Text } from 'react-native';
import BhaskaraCalculator from './src/bhaskara';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bhaskara Calculator - Resolva Logo Abaixo</Text>
      <BhaskaraCalculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  }
});
