import './assets';
import { ThemeProvider, colors } from '@assets';
// import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
// import { AlertProvider } from './components/alerts';
import { Text, View } from './components';
import { Root } from './screens';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  console.log('ThemeProvider:', ThemeProvider);
console.log('Root:', Root);
console.log('GestureHandlerRootView:', GestureHandlerRootView);

  return (
    <ThemeProvider>
      <StatusBar
        backgroundColor={colors.light.onPrimary}
        barStyle="dark-content"
      />
      <GestureHandlerRootView>
        {/* <BottomSheetModalProvider> */}
        <Root />
        {/* </BottomSheetModalProvider> */}
      </GestureHandlerRootView>
      {/* <AlertProvider /> */}
    </ThemeProvider>
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <Root />
    // </GestureHandlerRootView>
  );
}

export default App;
