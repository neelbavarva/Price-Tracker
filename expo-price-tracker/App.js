// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppLoading} from 'expo';
import {useFonts} from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';

export default function App() {

  let [fontsLoaded] = useFonts({
		'GothamBlack': require('./assets/fonts/Gotham-Black.otf'),
		'GothamBold': require('./assets/fonts/Gotham-Bold.otf'),
		'GothamMedium': require('./assets/fonts/GothamMedium.ttf'),
		'GothamLight': require('./assets/fonts/GothamLight.ttf'),
		'GothamThin': require('./assets/fonts/Gotham-Thin.otf'),
		'GothamBoldItalic': require('./assets/fonts/GothamBoldItalic.ttf'),
		'GothamBookItalic': require('./assets/fonts/Gotham-BookItalic.otf')
	});

	// if (!fontsLoaded) {
	// 	return <AppLoading />;
  // }
  
  return (
    <Login />
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
