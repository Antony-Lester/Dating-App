//import * as SplashScreen from 'expo/expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'

import store from './store/store';

import { Profile } from './Pages/Profile';
import { Swipe } from './Pages/Swipe';
import { Messages } from './Pages/Messages';
import { MenuBar } from './Pages/Components/MenuBar';
import { navigationRef } from './Pages/Components/MenuBar';
import { Message } from './Pages/Message';


export default function App() {
  //++TESTING++
  store.subscribe(() => console.log('store changed!', JSON.stringify(store.getState(), null, 2)));

  //++API CALL++
  //SplashScreen.preventAutoHideAsync();
  //setTimeout(SplashScreen.hideAsync, 1000);
  //TODO also call when api call is finished to remove splash screen
  
  //++NAVIGATOR++
  const Page = createNativeStackNavigator();
  // @ts-expect-error
  store.subscribe(() => navigationRef.navigate(store.getState().app.page))
  //navigationRef.isReady()
  
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Page.Navigator screenOptions={{ headerShown: false }}>
          <Page.Screen name='profile' component={Profile} />
          <Page.Screen name='swipe' component={Swipe} />
          <Page.Screen name='messages' component={Messages} />
          <Page.Screen name='message' component={Message} />
        </Page.Navigator>
        <MenuBar />
      </NavigationContainer>
    </Provider>);
}
