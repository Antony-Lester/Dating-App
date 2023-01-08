import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, View } from 'react-native';
import { KissHelper } from './Pages/Elements/Icons';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  //call when content is loaded to remove splash screen
  setTimeout(SplashScreen.hideAsync, 2000); 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <KissHelper/>
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
