import {View, StyleSheet} from 'react-native';
import {useThemeAwareObject} from './src/theme';
import React from 'react';
import HomeStack from './src/Navigation';

export default function App() {
  const createStyles = () => {
    const themeStyles = StyleSheet.create({
      container: {
        flex: 1,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <HomeStack/>
    </View>
  );
}
