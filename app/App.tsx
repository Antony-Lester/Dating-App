import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { KissHelper, MarryHelper, AvoidHelper } from './Pages/Elements/Icons';

export default function App() {
  return (
    <View style={styles.container}>
      <KissHelper/>
      <MarryHelper/>
      <AvoidHelper/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
