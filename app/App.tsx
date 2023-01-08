import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { Profile } from './Pages/Profile';
import { Swipe } from './Pages/Swipe';
import { Messages } from './Pages/Messages';
import { MenuBar } from './Pages/Components/MenuBar';
import { navigationRef } from './Pages/Components/MenuBar';


export default function App() {
  SplashScreen.preventAutoHideAsync();
  //call when content is loaded to remove splash screen
  setTimeout(SplashScreen.hideAsync, 2000); 
  const Page = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Page.Navigator screenOptions={{headerShown: false}}>
        <Page.Screen name='swipe' component={Swipe}/>
        <Page.Screen name='messages' component={Messages} />
        <Page.Screen name='profile' component={Profile}/>
      </Page.Navigator>
      <MenuBar/>
    </NavigationContainer>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
