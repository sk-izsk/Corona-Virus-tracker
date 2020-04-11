import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import store from './src/redux';
import { Stacks } from './src/routes';
import { theme } from './src/theme';

export default function App() {
  const [fontLoad, setFontLoad] = useState<boolean>(false);
  const fontLoading = async () => {
    await Font.loadAsync({
      'regular-font': require('./src/asset/fonts/ComicNeue-Regular.ttf'),
      'bold-italic-font': require('./src/asset/fonts/ComicNeue-BoldItalic.ttf'),
      'italic-font': require('./src/asset/fonts/ComicNeue-Italic.ttf'),
      'bold-font': require('./src/asset/fonts/ComicNeue-Bold.ttf'),
    });

    return setFontLoad(true);
  };
  useEffect(() => {
    fontLoading();
  }, []);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {fontLoad ? (
            <>
              <Stacks />
            </>
          ) : (
            <ActivityIndicator size='large' />
          )}
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
}
