import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { BootUp } from './src/component';
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
    <ThemeProvider theme={theme}>
      {fontLoad ? (
        <View style={styles.container}>
          <BootUp />
        </View>
      ) : (
        <ActivityIndicator size='large' />
      )}
    </ThemeProvider>
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
