import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { BootUp } from './src/component';
import store from './src/redux/slice/slice';
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {fontLoad ? (
          <View style={styles.container}>
            <BootUp />
          </View>
        ) : (
          <ActivityIndicator size='large' />
        )}
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
