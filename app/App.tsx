import { useState } from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'

import store from './store/store';

import Profile from './Pages/Profile';
import Swipe from './Pages/Swipe';
import Messages from './Pages/Messages';
import Message from './Pages/Message';

import MenuBar from './Pages/Components/MenuBar';
import Splash from './Pages/Components/Splash';


export default function App() {
  //++TESTING++
  //store.subscribe(() => console.log('store changed!', JSON.stringify(store.getState(), null, 2)));

  //++NAVIGATOR++
  const Page = createNativeStackNavigator();
  const navigationRef = createNavigationContainerRef();
  const [isReady, setIsReady] = useState(false);
  
  store.subscribe(() => navigationFunction(store.getState().app.page))
  
  function navigationFunction(path: string) {
    //@ts-expect-error
    if (!isReady) {window.setTimeout(navigationFunction, 100)} else {navigationRef.navigate(path)}}
  
    return (
      <Provider store={store}>
        <NavigationContainer
          ref={navigationRef}
          fallback={<Splash/>}
          onReady={() => { setIsReady(true) }}>
            <Page.Navigator
              initialRouteName='profile'
              screenOptions={{
                animationTypeForReplace: 'pop',
                headerShown: false
              }}>
              <Page.Screen name='profile' component={Profile} />
              <Page.Screen name='swipe' component={Swipe} />
              <Page.Screen name='messages' component={Messages} />
              <Page.Screen name='message' component={Message} />
            </Page.Navigator>
          <MenuBar />
        </NavigationContainer>
      </Provider>)
}

//import * as SplashScreen from 'expo/expo-splash-screen';

//++API CALL++??
  //SplashScreen.preventAutoHideAsync();
  //setTimeout(SplashScreen.hideAsync, 1000);
  //TODO also call when api call is finished to remove splash screen