import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/Home/index';
import { StatusBarContainer } from './src/components/StatusBarContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBarContainer>
        <StatusBar style="light" barStyle="light-content" />
      </StatusBarContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333'
  },
});
