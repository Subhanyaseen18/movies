import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Text from './CustomText';
import {useThemeAwareObject} from '../theme';
import {hp, wp} from '../util';
import LottieView from 'lottie-react-native';
const CustomButton = ({onPress, text, style, lottieIcon}) => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      container: {
        borderRadius: theme.borders.radius2,
        height: hp(15),
        width: wp(30),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.color.defaultBackground,
        alignSelf: 'center',
      },
      text: {
        fontFamily: theme.family.small,
        fontSize: theme.size.small,
        color: theme.color.primaryColor,
      },
      lottieView: {
        height: hp(10),
        width: wp(26),
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {lottieIcon && (
        <LottieView
          style={styles.lottieView}
          source={lottieIcon ? lottieIcon : null}
          autoPlay
          loop
        />
      )}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
